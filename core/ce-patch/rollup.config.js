import resolve from '@rollup/plugin-node-resolve';

export default async () => ({
  // Get a list of all the typescript files in the root dir
  input: 'dist/custom-elements/index.js',
  output: [
    {
      dir: 'dist/custom-elements/',
      entryFileNames: '[name].cjs.js',
      format: 'commonjs',
      preferConst: true
    }
  ],
  // external: id => !/^(\.|\/)/.test(id),
  plugins: [
    resolve()
  ]
});
