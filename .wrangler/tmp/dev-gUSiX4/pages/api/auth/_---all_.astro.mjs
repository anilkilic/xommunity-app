globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAuth } from '../../../chunks/auth_DLoPQWjy.mjs';
export { renderers } from '../../../renderers.mjs';

const ALL = async (ctx) => {
  try {
    const env = ctx.locals.runtime?.env;
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
  } catch (e) {
    console.error("Auth Route Error:", e);
    return new Response(JSON.stringify({
      error: "Internal Server Error during Auth",
      message: e.message,
      stack: void 0
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
