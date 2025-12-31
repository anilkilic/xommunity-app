globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderScript, r as renderTemplate, n as renderComponent, o as Fragment } from '../chunks/astro/server_BC1azvC1.mjs';
import { c as createAuth } from '../chunks/auth_DLoPQWjy.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const runtime = Astro2.locals.runtime;
  let session = null;
  let error = null;
  try {
    if (!runtime?.env?.DB) {
      throw new Error("Missing Cloudflare D1 binding (DB)");
    }
    const auth = createAuth(runtime.env);
    session = await auth.api.getSession({
      headers: Astro2.request.headers
    });
  } catch (e) {
    console.error("Dashboard Auth Error:", e);
    error = e;
  }
  if (!session && !error) {
    return Astro2.redirect("/");
  }
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Dashboard - Xommunity</title>${renderHead()}</head> <body class="bg-background text-foreground min-h-screen flex flex-col items-center justify-center"> ${error ? renderTemplate`<div class="p-4 bg-red-100 text-red-900 rounded"> <h1 class="font-bold">Error Loading Dashboard</h1> <p>${error.message}</p> <pre class="text-xs mt-2">                        ${JSON.stringify(error, null, 2)}
                    </pre> </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <h1 class="text-4xl font-bold mb-4">Dashboard</h1> <p class="mb-8">Welcome, ${session?.user?.name}!</p> <button id="logout-btn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
Sign Out
</button> ` })}`} ${renderScript($$result, "/Users/anilkilic/Documents/Code/CloudFlare/xommunity/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/anilkilic/Documents/Code/CloudFlare/xommunity/src/pages/dashboard.astro", void 0);

const $$file = "/Users/anilkilic/Documents/Code/CloudFlare/xommunity/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
