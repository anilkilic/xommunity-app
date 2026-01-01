/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		user: import("better-auth").User | null;
		session: import("better-auth").Session | null;
	}
}

interface Env {
	DB: D1Database;
	X_CLIENT_ID: string;
	X_CLIENT_SECRET: string;
	BETTER_AUTH_SECRET: string;
}
