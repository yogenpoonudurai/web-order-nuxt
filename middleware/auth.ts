import { useAuthStore } from "~~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuthStore();

  if (!user.isAuthenticated && to.path === "/cart") {
    return navigateTo("/login");
  }
});
