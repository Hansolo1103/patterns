import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'FleetComponents',

  srcDir: 'web-components',
  outputTargets: [
    {
      type: 'www',

      dir: 'assets',
      buildDir: 'web-components',
      empty: false,

      serviceWorker: null,
    },
    {
      type: 'docs',
    },
  ],

  // Because of https://github.com/ionic-team/stencil/issues/563 we don't use
  // the built-in index.html support, since if it gets written straight into the
  // assets/ directory then it replaces the Fractal home page. As a workaround,
  // we copy a different index.html file into web-components.
  //
  // It won't be pre-rendered, but that's fine.
  copy: [
    { src: 'html', dest: 'web-components' },
    { src: '**/*.schema.json', dest: 'web-components' },
  ],

  plugins: [
    // We use PostCSS with autoprefixer to let us use flexbox in component CSS
    // without writing the prefixes ourselves.
    require('./lib/stencil/postcss-plugin')({
      plugins: [require('autoprefixer')],
    }),
  ],
};
