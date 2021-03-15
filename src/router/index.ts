import {createMemoryHistory, createRouter as _createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import Other from "../views/Other.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/other",
		name: "Other",
		component: Other
	},
];

export function createRouter() {
	return _createRouter({
		// @ts-ignore
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes
	})
}
