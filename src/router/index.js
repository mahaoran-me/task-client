import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from "@/views/Home";
import MyMain from "@/components/Main"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'today',
        component: MyMain
      }
    ]
  }
  // {
  //   path: '/login',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
