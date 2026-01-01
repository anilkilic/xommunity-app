import type { APIRoute } from "astro";
import { createAuth } from "../../../lib/auth";

export const ALL: APIRoute = async (context) => {
    const db = context.locals.runtime.env.DB;
    const auth = createAuth(db, context.locals.runtime.env);
    return auth.handler(context.request);
};
