"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var vueRouter = require("vue-router");
var _sfc_main$2 = vue.defineComponent({
  name: "App"
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
_sfc_main$2.ssrRender = _sfc_ssrRender$2;
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/luke/Documents/Development/Personal/vue/vue-server-render-bug/src/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var _sfc_main$1 = vue.defineComponent({
  name: "Home"
});
var _imports_0 = "/img/generic-logo-white.svg";
var _imports_1 = "/img/generic-logo-black.svg";
var _imports_2 = "/img/code-white.svg";
var _imports_3 = "/img/code-black.svg";
var Home_vue_vue_type_style_index_0_lang = "\n:root {\n		color-scheme: light dark;\n}\n";
const _hoisted_1 = _imports_0;
const _hoisted_2 = _imports_2;
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><picture><source media="(prefers-color-scheme: dark)" type="image/svg+xml"${serverRenderer.ssrRenderAttr("srcset", _hoisted_1)}><img${serverRenderer.ssrRenderAttr("src", _imports_1)}></picture>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/other"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<picture${_scopeId}><source media="(prefers-color-scheme: dark)" type="image/svg+xml"${serverRenderer.ssrRenderAttr("srcset", _hoisted_2)}${_scopeId}><img${serverRenderer.ssrRenderAttr("src", _imports_3)}${_scopeId}></picture>`);
      } else {
        return [
          vue.createVNode("picture", null, [
            vue.createVNode("source", {
              media: "(prefers-color-scheme: dark)",
              type: "image/svg+xml",
              srcset: _hoisted_1
            }),
            vue.createVNode("img", {src: _imports_3})
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/luke/Documents/Development/Personal/vue/vue-server-render-bug/src/views/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var _sfc_main = vue.defineComponent({
  name: "Other"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(_attrs)}>Other page</h1>`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/luke/Documents/Development/Personal/vue/vue-server-render-bug/src/views/Other.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: _sfc_main$1
  },
  {
    path: "/other",
    name: "Other",
    component: _sfc_main
  }
];
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
function createApp() {
  const app = vue.createSSRApp(_sfc_main$2);
  const router = createRouter();
  app.use(router);
  return {app, router};
}
async function render(url) {
  const {app, router} = createApp();
  await router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  return [html];
}
exports.render = render;
