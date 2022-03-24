import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";
import HomeComponent from "@/components/Home";
import LoginComponent from "@/components/Login";
import ProfileComponent from "@/components/Profile";
import AcoesComponent from "@/components/Acoes";
import OrdersComponent from '@/components/Orders'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeComponent,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      component: LoginComponent,
    },
    {
      path: "/login/callback",
      component: LoginCallback,
    },
    
    {
      path: '/acoes',
      component: AcoesComponent
    },
    {
      path: '/orders',
      component: OrdersComponent
    },
    {
      path: "/profile",
      component: ProfileComponent,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(navigationGuard);

export default router;
