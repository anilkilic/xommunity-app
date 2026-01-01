import type { APIRoute } from "astro";
import { createAuth } from "../../../lib/auth";

export const ALL: APIRoute = async (context) => {
    try {
        const db = context.locals.runtime.env.DB;
        const auth = createAuth(db, context.locals.runtime.env);
        const response = await auth.handler(context.request);

        // Log callback details
        const url = new URL(context.request.url);
        if (url.pathname.includes('callback')) {
            console.log('[DEBUG] Callback URL:', url.href);
            console.log('[DEBUG] Query params:', Object.fromEntries(url.searchParams));
        }

        return response;
    } catch (error) {
        console.error('[AUTH HANDLER ERROR]:', error);
        console.error('[AUTH HANDLER ERROR DETAILS]:', {
            message: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            url: context.request.url,
        });
        throw error;
    }
};
