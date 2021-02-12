import Vue from 'vue'
import VueRouter from 'vue-router' 
import NProgress from 'nprogress/nprogress.js';
import 'nprogress/nprogress.css';
import axios from 'axios';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },{
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/patients/add',
    name: 'add_patient',
    component: () => import('../views/AddPatient.vue')
  },
  {
    path: '/users/add',
    name: 'add_user',
    component: () => import('../views/AddUser.vue')
  },{
    path: '/patients',
    name: 'patients',
    component: () => import('../views/Patients.vue')
  },{
    path: '/encounters',
    name: 'encounters',
    component: () => import('../views/Encounters.vue')
  },{
    path: '/encounters/add',
    name: 'encounters',
    component: () => import('../views/AddEncounter.vue')
  },
  {
    path: '/allocations',
    name: 'allocations',
    component: () => import('../views/Allocations.vue')
  },
  {
    path: '/allocations/add',
    name: 'add_allocations',
    component: () => import('../views/NewAllocation.vue')
  }
]


const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  console.log(to);
  console.log(from);
  NProgress.done()
})


// before a request is made start the nprogress
axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
axios.interceptors.response.use(response => {
  NProgress.done()
  return response
})
export default router
