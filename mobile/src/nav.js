import Home from './views/Home.vue'
import Page from './views/Page.vue'
let nav = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'my',
        meta: {
          title: '我的'
        }
      },
      {
        name: 'my1',
        meta: {
          title: '我的1'
        }
      },
      {
        name: 'my2',
        meta: {
          title: '我的2'
        }
      }
    ]
  },
  {
    path: '/page',
    component: Page,
    children: [
      {
        name: 'a',
        meta: {
          title: 'a的'
        }
      }
    ]
  }
]
nav[0].children.forEach(it => {
  it.component = require(`./views/home/${it.name}.vue`).default
  it.path = `/home/${it.name}`
})
nav[1].children.forEach(it => {
  it.component = require(`./views/page/${it.name}.vue`).default
  it.path = `/page/${it.name}`
})
nav[0].redirect = nav[0].children[0].path

export default nav
