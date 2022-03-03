import {createRouter,createWebHistory, RouteRecord, RouteRecordRaw } from "vue-router";

import Home from'../pages/Home.vue';
import Messages from'../pages/Messages.vue';
import Generic from'../pages/Generic.vue';
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home},
 { path: '/about', component: Generic, props:{title:'About Page'} },
 { path: '/login', component: Generic, props:{title:'login'} },
 { path: '/about', component: Generic, props:{title:'About Page'} },
 { path: '/about', component: Generic, props:{title:'About Page'} },
  { path: '/messages', component: Messages },
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router =createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history:createWebHistory(),
  routes,
  linkActiveClass:'is-active' // short for `routes: routes`
})
export default router;
