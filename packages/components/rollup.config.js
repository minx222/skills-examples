import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: ['./index.tsx'],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      name: 'index.js',
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    clear({
      targets: ['web-react'],
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
    terser(),
    uglify(),
  ],
  external: ['react', 'react-dom'],
};
