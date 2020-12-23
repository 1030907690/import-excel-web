import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history', // 如果不加这段代码，地址中间有#号
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/',
        name: 'upload',
        component: resolve => require(['../views/upload'],resolve),
      } 
  ]
})