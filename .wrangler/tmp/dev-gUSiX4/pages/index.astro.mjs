globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderScript, r as renderTemplate } from '../chunks/astro/server_BC1azvC1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Xommunity</title>${renderHead()}</head> <body class="bg-background text-foreground min-h-screen flex flex-col items-center justify-center gap-4"> <h1 class="text-4xl font-bold">Xommunity</h1> <p class="text-muted-foreground">Community for the modern web.</p> <button id="login-btn" class="px-4 py-2 bg-black text-white rounded hover:bg-slate-800 transition-colors">
Sign in with X
</button> ${renderScript($$result, "/Users/anilkilic/Documents/Code/CloudFlare/xommunity/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/anilkilic/Documents/Code/CloudFlare/xommunity/src/pages/index.astro", void 0);

const $$file = "/Users/anilkilic/Documents/Code/CloudFlare/xommunity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
