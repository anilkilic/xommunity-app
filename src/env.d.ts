/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type D1Database = import("@cloudflare/workers-types").D1Database;

type Env = {
    DB: D1Database;
    X_CLIENT_ID: string;
    X_CLIENT_SECRET: string;
    BETTER_AUTH_SECRET: string;
};

declare namespace App {
    interface Locals extends Record<string, any> {
        runtime: {
            env: Env;
            cf: import("@cloudflare/workers-types").IncomingRequestCfProperties;
            ctx: import("@cloudflare/workers-types").ExecutionContext;
        }
    }
}
