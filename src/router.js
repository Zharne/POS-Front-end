// import Vue from 'vue';
// import Router from 'vue-router';
// import Home from '@/views/Home.vue';
// import Login from '@/components/Login.vue';
// import Register from '@/components/Register.vue';


// export const router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: Register
//     },
//     {
//       path: '/profile',
//       name: 'profile',
//       // lazy-loaded
//       component: () => import('./components/Profile.vue')
//     },
//     {
//       path: '/admin',
//       name: 'admin',
//       // lazy-loaded
//       component: () => import('./components/BoardAdmin.vue')
//     },
//     {
//       path: '/mod',
//       name: 'moderator',
//       // lazy-loaded
//       component: () => import('./components/BoardModerator.vue')
//     },
//     {
//       path: '/user',
//       name: 'user',
//       // lazy-loaded
//       component: () => import('./components/BoardUser.vue')
//     }
//   ]
// });

// Vue.use(Router);
// export default Router

import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Products from "./views/Products.vue";
import Cart from "./components/Cart.vue"
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  {
    name:"cart",
    path: "/cart",
    component: Cart ,
  },
  {
    path: "/products",
    component: Products,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;