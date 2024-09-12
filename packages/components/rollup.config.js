const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const gzipPlugin = require('rollup-plugin-gzip');

/**@type {import('rollup').RollupOptions} */
module.exports = {
	input: "./src/news/index.tsx",
	output: {
		dir: "./dist",
		format: 'esm',
		sourcemap: true,
	},
	plugins: [
		resolve(),
		commonjs(),
		postcss(),
		typescript(),
		gzipPlugin.default(),
		babel({
			presets: [
				[
					"@babel/preset-react",
					{
						"pragma": "dom", // default pragma is React.createElement (only in classic runtime)
						"pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
						"throwIfNamespace": false, // defaults to true
						"runtime": "classic", // defaults to classic
						"development": true,
					}
				]
			],
			plugins: [
        // 添加这个插件来确保 JSX 正确处理
        "@babel/plugin-transform-react-jsx",
      ],
		}),
	],
};
