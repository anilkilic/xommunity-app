import { defineMiddleware } from "astro:middleware";
import { createAuth } from "./lib/auth";

export const onRequest = defineMiddleware(async (context, next) => {
    const auth = createAuth(context.locals.runtime.env.DB, context.locals.runtime.env);
    const session = await auth.api.getSession({
        headers: context.request.headers,
    });
    context.locals.user = session?.user || null;
    context.locals.session = session?.session || null;
    return next();
});
