import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import axios from 'axios'


Vue.use(VueRouter)

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
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/admin/users',
    name: 'users',
    component: Users,

    // guards
    beforeEnter: (to, from, next)=>{

      let data={}
      let config ={
        headers:{
          Authorization: 'Bearer '+localStorage.getItem('token')
        }
      }

      console.log(config)

      if(localStorage.getItem('token') != undefined){
        axios.post('http://localhost:3000/validate',data,config).then( res=> {
          console.log('validate-then',res)
          next()

        }).catch(e =>{
          console.log(e)
          next('/login')
        })

      }else{
        next('/login')
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
