import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BIUMr902.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/archives.astro.mjs');
const _page5 = () => import('./pages/oauth/callback.astro.mjs');
const _page6 = () => import('./pages/oauth.astro.mjs');
const _page7 = () => import('./pages/og.png.astro.mjs');
const _page8 = () => import('./pages/posts/_---slug_/index.png.astro.mjs');
const _page9 = () => import('./pages/posts/_---page_.astro.mjs');
const _page10 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/search.astro.mjs');
const _page14 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page15 = () => import('./pages/tags.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.2_@netlify+blobs@8.1.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.34.7_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.md", _page2],
    ["node_modules/.pnpm/astro-decap-cms-oauth@0.5.1_astro@5.5.2_@netlify+blobs@8.1.2_jiti@2.4.2_lightningcss@1._3ab321448c3e5dbaea79087bbedd8f35/node_modules/astro-decap-cms-oauth/src/admin.astro", _page3],
    ["src/pages/archives/index.astro", _page4],
    ["node_modules/.pnpm/astro-decap-cms-oauth@0.5.1_astro@5.5.2_@netlify+blobs@8.1.2_jiti@2.4.2_lightningcss@1._3ab321448c3e5dbaea79087bbedd8f35/node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page5],
    ["node_modules/.pnpm/astro-decap-cms-oauth@0.5.1_astro@5.5.2_@netlify+blobs@8.1.2_jiti@2.4.2_lightningcss@1._3ab321448c3e5dbaea79087bbedd8f35/node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page6],
    ["src/pages/og.png.ts", _page7],
    ["src/pages/posts/[...slug]/index.png.ts", _page8],
    ["src/pages/posts/[...page].astro", _page9],
    ["src/pages/posts/[...slug]/index.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/rss.xml.ts", _page12],
    ["src/pages/search.astro", _page13],
    ["src/pages/tags/[tag]/[...page].astro", _page14],
    ["src/pages/tags/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "399afe8d-65b5-434c-a98f-88e7dbcb16bd"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
