import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import * as path from 'path';
import { promises as fs } from 'fs';

const outDir = 'dist';

export default async () => ({
  // Get a list of all the typescript files in the root dir
  input: (await fs.readdir(path.resolve(__dirname, './src'), { withFileTypes: true }))
    .filter(e => e.isFile())
    .map(({ name }) => path.resolve(__dirname, './src', name))
    .filter(name => name.endsWith('.ts')),
  output: [
    {
      dir: outDir,
      entryFileNames: 'esm/[name].esm.js',
      chunkFileNames: 'esm/[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      dir: outDir,
      entryFileNames: 'cjs/[name].js',
      chunkFileNames: 'cjs/[name]-[hash].js',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
    }
  ],
  external: id => !/^(\.|\/)/.test(id),
  plugins: [
    typescript({ outDir, declarationDir: path.resolve(outDir, './types') }),
    resolve(),
    sourcemaps()
  ]
});
