import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Page from './views/Page.vue'
import nav from './nav.js'

Vue.use(Router)

let navs = []
let pages = []
nav.forEach(it => {
  if (it.children && it.children.length) {
    it.children.forEach(jt => {
      let path = `/${it.name}/${jt.name}`
      if (jt.children) {
        jt.children.forEach(ot => {
          let path1 = `/${it.name}/${jt.name}/${ot.name}`
          pages.push({
            path: path1,
            component: require(`./views/page${path1}.vue`).default
          })
        })
      }
      navs.push({
        path: path,
        component: require(`./views/page${path}.vue`).default
      })
    })
  } else {
    let path = `/${it.name}`
    navs.push({
      path: path,
      component: require(`./views/page${path}.vue`).default
    })
  }
})

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
      children: navs
    },
    ...pages
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (window.isLogin) {
      next()
    } else if (window.localStorage.account) {
      setTimeout(() => {
        window.server.login(window.localStorage.account, window.localStorage.code, () => {
          next()
        })
      }, 1000)
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
