import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Pai from '../views/Pai.vue'
import Filha from '../views/Filha.vue'
import Cadastro from '../views/Cadastro.vue'


Vue.use(VueRouter)

console.log(Pai,Filha)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cadastro
  },
  {
    path: '/cadastro/detail/:id',
    name: 'cadastro/detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cadastro
  },


  {
    path: '/pai',
    name: 'pai',
    component: Pai,
    //array de criancas
    children:[
      {
        path:'filha',
        name:'filha',
        component: Filha
      }
   ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
