import type { Component } from "vue";

import type { RouteRecordRaw } from "vue-router";

export interface AppRouteMeta {
	/**
	 * 路由标题
	 */
	title: string;
	/**
	 * 是否缓存路由
	 */
	keepAlive?: boolean;
	/**
	 * 是否隐藏路由
	 */
	hidden?: boolean;
}

export type AppRouteRaw = RouteRecordRaw & {
	/**
	 * 路由名称
	 */
	name: string;
	/**
	 * 路由路径
	 */
	path: string;
	/**
	 * 路由组件
	 */
	component?: Component;
	/**
	 * 路由重定向
	 */
	redirect?: string;
	/**
	 * 路由元信息
	 */
	meta?: AppRouteMeta;
	/**
	 * 子路由
	 */
	children?: Array<AppRouteRaw>;
};
