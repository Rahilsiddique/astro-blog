// import { defineConfig } from 'astro/config';

// import preact from "@astrojs/preact";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [preact()]
// });

import { createDefaultConfig } from "@astrojs/build";

export default createDefaultConfig({
  // ...other configuration options
  buildOptions: {
    // Enable production optimizations
    productionMode: true,
    // Enable gzip compression
    compress: true,
    // Enable brotli compression
    brotli: true,
    // Set a cache-control header for all built files
    cacheControl: "public, max-age=31536000, immutable",
    // Minify HTML output
    minifyHtml: true,
    // Minify CSS output
    minifyCss: true,
    // Minify JavaScript output
    minifyJs: true,
    // Remove comments from HTML, CSS, and JavaScript output
    removeComments: true,
    // Inline small assets (less than 4kb) as data URIs
    inlineAssetsMaxSize: 4096,
    // Inline CSS critical path
    inlineCss: true,
    // Preconnect to required origins
    preconnect: true,
    // Prefetch required assets
    prefetch: true,
    // Optimize image assets
    optimizeImages: true
  }
});
