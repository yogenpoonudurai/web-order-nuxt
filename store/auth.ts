import { User } from "firebase/auth";
import { defineStore } from "pinia";

type Authenticated = {
  user: User | null;
  isAuthenticated: boolean;
};

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref<Authenticated>({
    user: null,
    isAuthenticated: false,
  });
  const user = ref<User>();
  function setAuthenticated(user: User, authenticated: boolean) {
    isAuthenticated.value.user = user;
    isAuthenticated.value.isAuthenticated = authenticated;
  }

  return {
    isAuthenticated,
    setAuthenticated,
    user,
  };
});
