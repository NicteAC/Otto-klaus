import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inventario',
    name: 'Inventario',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "inventario" */ '../views/Inventario.vue')
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "ingreso" */ '../views/Ingreso.vue')
  },
  {
    path: '/borrado',
    name: 'Borrado',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "borrado" */ '../views/Borrado.vue')
  },
  {
    path: '/edicion',
    name: 'EdicionJuguetes',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "edicion" */ '../views/EdicionJuguetes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
  next('/');
  } else if (user && !authRequired) {
  next('inventario');
  } else {
  next();
  }
  });
  export default router

