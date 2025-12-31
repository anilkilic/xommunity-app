import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts",
    out: "./migrations",
    dialect: "sqlite",
    driver: "d1-http",
    dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
        databaseId: "b70d72c8-0002-4a4b-ba42-81ffc282c3fe",
        token: process.env.CLOUDFLARE_API_TOKEN!,
    },
} satisfies Config;
