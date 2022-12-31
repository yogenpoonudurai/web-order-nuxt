import { useAuthStore } from "~~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuthStore();

  if ((!user.isAuthenticated || !user) && to.path === "/dashboard") {
    return navigateTo("/login");
  }
});
