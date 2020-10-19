import resolve from '@rollup/plugin-node-resolve';

export default async () => ({
  input: 'dist/custom-elements/index.js',
  output: [
    /*
    * This CJS build is one big hack to get a build that will run OK in SSG by:
    * - Converting `import` to `require`,
    * - Adding a no-op HTMLElement class,
    * - Inlining the stencil/internal lib
    * */
    {
      dir: 'dist/custom-elements/',
      entryFileNames: '[name].cjs.js',
      format: 'commonjs',
      preferConst: true,
      intro: 'const HTMLElement = typeof window === \'object\' && window.HTMLElement ? window.HTMLElement : class{};'
    }
  ],
  // external: id => !/^(\.|\/)/.test(id),
  plugins: [
    resolve()
  ]
});
