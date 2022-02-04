import VueRouter from 'vue-router'
import General from '../General'

export default new VueRouter ({
  // mode: history,
  routes: [
    {
      path: '/',
      component: General
    },
  ]
})