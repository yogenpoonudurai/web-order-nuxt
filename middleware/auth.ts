export default defineNuxtRouteMiddleware((to, from) => {
  function isAuthenticated() {
    return true;
  }
  if (isAuthenticated() === false) {
    return navigateTo("/");
  }
});
