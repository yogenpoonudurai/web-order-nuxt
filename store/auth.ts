import { User } from "firebase/auth";
import { defineStore } from "pinia";

type Authenticated = {
  user: User | null;
  isAuthenticated: boolean;
};

export const useAuthStore = defineStore("auth", () => {
  const user = ref<Authenticated>({
    user: null,
    isAuthenticated: false,
  });

  function setAuthenticated(data: Authenticated) {
    user.value.user = data.user;
    user.value.isAuthenticated = data.isAuthenticated;
  }

  return {
    user,
    setAuthenticated,
  };
});
