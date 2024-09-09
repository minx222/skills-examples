import type { AppRouteRaw } from "@/types";

const routes: Array<AppRouteRaw> = [
	{
		path: "/",
		name: "HomePage",
		component: () => import("@/pages/home.vue"),
		meta: {
			title: "首页",
		},
	},
	{
		path: "/effect-scope",
		name: "effectScope",
		component: () => import("@/pages/effectScope/index.vue"),
		meta: {
			title: "effectScope",
		},
	},
];

export { routes };
