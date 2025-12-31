import { betterAuth } from "better-auth";
import { d1Adapter } from "better-auth/adapters/d1";

export const auth = betterAuth({
    database: d1Adapter({
        binding: process.env.DB, // The binding name in wrangler.jsonc
    }),
    socialProviders: {
        twitter: {
            clientId: process.env.X_CLIENT_ID as string,
            clientSecret: process.env.X_CLIENT_SECRET as string,
        },
    },
});
