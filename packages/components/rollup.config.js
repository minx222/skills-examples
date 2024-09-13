import fs from 'node:fs';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const dir = './src/components'
const components = fs.readdirSync(dir);

export default components.map((component) => {
	return {
		input: `${dir}/${component}/index.tsx`,
		output: [
			{
				file: `dist/${component}/index.js`,
				format: 'cjs',
			},
		],
		plugins: [
			typescript(), // 会自动读取 文件tsconfig.json配置
			clear({
				targets: ['dist'],
			}),
			resolve(),
			commonjs({
				ignoreGlobal: true,
				include: /\/node_modules\//,
				external: ['react', 'react-dom', 'styled-components'],
				namedExports: {
					react: Object.keys(require('react')),
					'react-is': Object.keys(require('react-is')),
				},
			}),
			babel({
				exclude: 'node_modules/**',
				runtimeHelpers: true,
			}),
			postcss({
				plugins: [
					tailwindcss,
					autoprefixer
				],
				extensions: [".css", ".scss"],
				extract: true,
			}),
			terser(),
			uglify(),
		],
		external: ['react', 'react-dom', 'classnames'],
	}
})
