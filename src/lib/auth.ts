import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "../db/schema";

export const createAuth = (env: any) => {
    const db = drizzle(env.DB, { schema });
    return betterAuth({
        database: drizzleAdapter(db, {
            provider: "sqlite",
            schema: {
                ...schema
            }
        }),
        trustedOrigins: [
            "http://localhost:8788",
            "http://127.0.0.1:8788",
            "http://localhost:4321"
        ],
        socialProviders: {
            twitter: {
                clientId: env.X_CLIENT_ID as string,
                clientSecret: env.X_CLIENT_SECRET as string,
            },
        },
        secret: env.BETTER_AUTH_SECRET,
    });
}
