import { createAuth } from "../../../lib/auth";
import type { APIRoute } from "astro";

export const ALL: APIRoute = async (ctx) => {
    try {
        const env = ctx.locals.runtime?.env;

        // Log environment status (be careful not to log secrets in prod logs unless necessary for debugging this specific issue)
        console.log("Auth API triggered. Env present:", !!env, "DB present:", !!env?.DB);

        if (!env?.DB) {
            console.error("CRITICAL ERROR: env.DB is undefined");
            return new Response(JSON.stringify({
                error: "Configuration Error: Database binding (DB) is missing.",
                debug: {
                    hasEnv: !!env,
                    keys: env ? Object.keys(env) : []
                }
            }), { status: 500, headers: { "Content-Type": "application/json" } });
        }

        const auth = createAuth(env);
        return await auth.handler(ctx.request);
    } catch (e: any) {
        console.error("Auth Route Error:", e);
        return new Response(JSON.stringify({
            error: "Internal Server Error during Auth",
            message: e.message,
            stack: import.meta.env.DEV ? e.stack : undefined
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
