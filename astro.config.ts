import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { SITE } from "./src/config";

import netlify from "@astrojs/netlify";

import decapCmsOauth from "astro-decap-cms-oauth";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,

  integrations: [sitemap({
    filter: page => SITE.showArchives || !page.endsWith("/archives"),
  }), decapCmsOauth()],

  // https://astro.build/en/reference/configuration-reference/#output
  // Use static, and in places where routing is needed for dynamic content, use the <a href="https://astro.build/en/core-concepts/routing/#dynamic-routes">dynamic routes</a> feature.
  // This will generate a static site that can be deployed to any static hosting service.
  // If you need server-side rendering, you can use the <a href="https://astro.build/en/core-concepts/routing/#server-side-rendering">SSR</a> feature.
  // https://docs.astro.build/en/guides/on-demand-rendering/#enabling-on-demand-rendering
  output: "static",

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "responsive",
  },

  experimental: {
    svg: true,
    responsiveImages: true,
    preserveScriptOrder: true,
  },

  adapter: netlify(),
});