import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "../db";

export const createAuth = (db: D1Database, env: Env) => {
    const drizzle = getDb(db);
    return betterAuth({
        database: drizzleAdapter(drizzle, {
            provider: "sqlite",
        }),
        emailAndPassword: {
            enabled: false,
        },
        socialProviders: {
            twitter: {
                clientId: env.X_CLIENT_ID,
                clientSecret: env.X_CLIENT_SECRET,
            },
        },
    });
};
