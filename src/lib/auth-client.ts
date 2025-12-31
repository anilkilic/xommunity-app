import { createAuthClient } from "better-auth/client";

console.log("Auth Client Initializing with URL:", import.meta.env.PUBLIC_BETTER_AUTH_URL);
export const authClient = createAuthClient({
    baseURL: import.meta.env.PUBLIC_BETTER_AUTH_URL,
    fetchOptions: {
        onError: (ctx) => console.error("Auth Client Error:", ctx.error),
        onSuccess: (ctx) => console.log("Auth Client Success:", ctx.data),
    }
});
