import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Page from './views/Page.vue'
import nav from './nav.js'

Vue.use(Router)

let navs = []
nav.forEach(it => {
  if (it.children && it.children.length) {
    it.children.forEach(jt => {
      let path = `/${it.name}/${jt.name}`
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

export default new Router({
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
    }
  ]
})
