import  { createRouter, createWebHistory }  from "vue-router";
import  Home  from "@/pages/Home_start.vue";
import  NotFound  from "@/pages/NotFound.vue";

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      props: true,
      component: () => import('@/pages/user_page.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/pages/registration_page.vue')
    },
    { 
      path: '/:pathMatch(.*)',
      component: NotFound 
    }
    
  ]

const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),
  routes,

});

export default router