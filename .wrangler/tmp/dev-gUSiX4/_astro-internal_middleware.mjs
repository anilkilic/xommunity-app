globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_v6rsuZP7.mjs';
import './chunks/astro/server_BC1azvC1.mjs';
import { s as sequence } from './chunks/index_Ctstgr-c.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
