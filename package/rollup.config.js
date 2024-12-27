import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: {
    load: 'src/load/index.ts',
    plugin: 'src/plugin/index.ts',
    write: 'src/write/index.ts',
    merge: 'src/merge/index.ts',
  },
  output: [
    {
      dir: './',
      format: 'esm',
      entryFileNames: '[name]/index.mjs',
      sourcemap: true,
    },
    {
      dir: './',
      format: 'cjs',
      entryFileNames: '[name]/index.cjs',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), terser()],
  external: ['fs', 'path', 'next-intl', 'next-intl/plugin'],
};
