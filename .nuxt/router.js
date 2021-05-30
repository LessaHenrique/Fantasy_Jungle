import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ff2d7114 = () => interopDefault(import('..\\pages\\sceneone.vue' /* webpackChunkName: "pages/sceneone" */))
const _39b7d999 = () => interopDefault(import('..\\pages\\sceneoneout1.vue' /* webpackChunkName: "pages/sceneoneout1" */))
const _39c5f11a = () => interopDefault(import('..\\pages\\sceneoneout2.vue' /* webpackChunkName: "pages/sceneoneout2" */))
const _39d4089b = () => interopDefault(import('..\\pages\\sceneoneout3.vue' /* webpackChunkName: "pages/sceneoneout3" */))
const _e47f36a4 = () => interopDefault(import('..\\pages\\scenethree.vue' /* webpackChunkName: "pages/scenethree" */))
const _5f4d9ad1 = () => interopDefault(import('..\\pages\\scenethreeout1.vue' /* webpackChunkName: "pages/scenethreeout1" */))
const _5f5bb252 = () => interopDefault(import('..\\pages\\scenethreeout2.vue' /* webpackChunkName: "pages/scenethreeout2" */))
const _5f69c9d3 = () => interopDefault(import('..\\pages\\scenethreeout3.vue' /* webpackChunkName: "pages/scenethreeout3" */))
const _ce5e0f48 = () => interopDefault(import('..\\pages\\scenetwo.vue' /* webpackChunkName: "pages/scenetwo" */))
const _f91eb102 = () => interopDefault(import('..\\pages\\scenetwoout1.vue' /* webpackChunkName: "pages/scenetwoout1" */))
const _f9028200 = () => interopDefault(import('..\\pages\\scenetwoout2.vue' /* webpackChunkName: "pages/scenetwoout2" */))
const _f8e652fe = () => interopDefault(import('..\\pages\\scenetwoout3.vue' /* webpackChunkName: "pages/scenetwoout3" */))
const _26f7d966 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/sceneone",
    component: _ff2d7114,
    name: "sceneone"
  }, {
    path: "/sceneoneout1",
    component: _39b7d999,
    name: "sceneoneout1"
  }, {
    path: "/sceneoneout2",
    component: _39c5f11a,
    name: "sceneoneout2"
  }, {
    path: "/sceneoneout3",
    component: _39d4089b,
    name: "sceneoneout3"
  }, {
    path: "/scenethree",
    component: _e47f36a4,
    name: "scenethree"
  }, {
    path: "/scenethreeout1",
    component: _5f4d9ad1,
    name: "scenethreeout1"
  }, {
    path: "/scenethreeout2",
    component: _5f5bb252,
    name: "scenethreeout2"
  }, {
    path: "/scenethreeout3",
    component: _5f69c9d3,
    name: "scenethreeout3"
  }, {
    path: "/scenetwo",
    component: _ce5e0f48,
    name: "scenetwo"
  }, {
    path: "/scenetwoout1",
    component: _f91eb102,
    name: "scenetwoout1"
  }, {
    path: "/scenetwoout2",
    component: _f9028200,
    name: "scenetwoout2"
  }, {
    path: "/scenetwoout3",
    component: _f8e652fe,
    name: "scenetwoout3"
  }, {
    path: "/",
    component: _26f7d966,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
