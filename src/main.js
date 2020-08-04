import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './scss/main.scss'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '*', component: NotFound},
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
