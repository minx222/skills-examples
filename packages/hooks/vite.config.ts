import { URL, fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		AutoImport({
			imports: ["vue", "vue-router", "pinia"],
			dts: "./typesImport.d.ts",
		}),
		viteCompression({
			verbose: true, // 是否在控制台输出压缩结果，默认为 true
			disable: false, //是否禁用压缩，默认即可
			deleteOriginFile: true, //删除源文件
			threshold: 10240, //压缩前最小文件大小
			algorithm: "gzip", //压缩算法
			ext: ".gz", //文件类型
		}),
		viteMockServe({
			logger: true,
			mockPath: './mocks/',
			watchFiles: true,
			enable: true,
		})
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
		},
	},
	server: {
		host: true,
		port: 4000,
		open: false,
		proxy: {
			"dev-api": {
				target: "localhost:4000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/dev-api/, ""),
			},
		},
	},
	build: {
		target: "es2015",
		cssTarget: "chrome80",
		outDir: "dist",
		// 打包警告大小 2000kb
		chunkSizeWarningLimit: 2000,
		rollupOptions: {
			output: {
				chunkFileNames: "static/js/[name]-[hash].js",
				entryFileNames: "static/js/[name]-[hash].js",
				assetFileNames: "static/[ext]/[name]-[hash].[ext]",
			},
		},
	},
	esbuild: {
		pure: ["console.log", "debugger"],
	},
});
