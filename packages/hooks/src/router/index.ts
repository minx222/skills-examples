import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes";

import { setupAfterEach, setupBeforeEach } from "./each";

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export const setupRouter = (app: App) => {
	setupAfterEach(router);
	setupBeforeEach(router);
	app.use(router);
};
