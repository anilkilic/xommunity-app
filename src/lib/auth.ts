import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "../db";

export const createAuth = (db: D1Database, env: Env) => {
    const drizzle = getDb(db);

    return betterAuth({
        baseURL: env.BETTER_AUTH_URL || "http://localhost:4321",
        database: drizzleAdapter(drizzle, {
            provider: "sqlite",
        }),
        secret: env.BETTER_AUTH_SECRET,
        emailAndPassword: {
            enabled: false,
        },
        socialProviders: {
            twitter: {
                clientId: env.X_CLIENT_ID,
                clientSecret: env.X_CLIENT_SECRET,
                scope: ["tweet.read", "users.read", "offline.access"],
                // Custom handler to work around Twitter not providing email
                getUserInfo: async (tokens) => {
                    const response = await fetch(
                        "https://api.twitter.com/2/users/me?user.fields=profile_image_url,description",
                        {
                            headers: {
                                Authorization: `Bearer ${tokens.accessToken}`,
                            },
                        }
                    );

                    const data = await response.json() as { data?: any; errors?: any };
                    console.log("[Twitter API Response]:", data);

                    if (!data.data) {
                        console.error("[Twitter] No user data returned:", data);
                        return null;
                    }

                    const twitterUser = data.data;

                    // Generate a placeholder email using Twitter username since Twitter doesn't provide email
                    return {
                        user: {
                            id: String(twitterUser.id),
                            name: twitterUser.name,
                            username: twitterUser.username,
                            email: `${twitterUser.username}@twitter.placeholder`, // Placeholder email
                            emailVerified: false,
                            image: twitterUser.profile_image_url,
                        },
                        data: twitterUser,
                    };
                },
            },
        },
    });
};
