<template>
  <NuxtLayout name="bare">
    <div class="hero min-h-screen flex flex-col lg:flex-row">
      <div
        class="text-center px-10 bg-primary w-full lg:w-1/2 lg:h-full lg:min-h-screen flex flex-col justify-center text-white"
      >
        <img
          src="/images/login.svg"
          class="lg:w-1/2 h-full mx-auto"
          alt="login"
        />
        <p class="p-6">Let's get you back in!</p>
      </div>
      <div class="lg:w-1/2 w-full px-10 py-10">
        <div class="mb-4 max-w-md mx-auto">
          <h1 class="text-3xl font-bold mb-4">Welcome back!</h1>
        </div>
        <div class="card flex-shrink-0 shadow-2xl bg-base-100 max-w-md mx-auto">
          <form @submit.prevent="handleLogin">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  v-model="password"
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <NuxtLink href="/forgotpassword">
                  <a href="#" class="label-text-alt link link-hover"
                    >Forgot password?</a
                  >
                </NuxtLink>
              </div>

              <NuxtLink href="/register">
                <span>Don't have an account? </span>
                <span class="text-center hover:text-primary link"
                  >Register</span
                >
              </NuxtLink>
              <div class="badge badge-error badge-lg text-xs" v-if="error">
                {{ error }}
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/store/auth";

const email = ref("");
const password = ref("");
const displayName = ref("");
const error = ref("");

const { user } = useAuthStore();
const { $toast } = useToast();

onMounted(() => {
  if (user.isAuthenticated) {
    $toast.success("Detecting authenticated session. Navigating to dashboard");
    navigateTo("/cart");
  }
});

const { login } = useAuth();
async function handleLogin() {
  try {
    error.value = "";
    await login(email.value, password.value)
      .then((data) => {
        if (user.isAuthenticated) {
          navigateTo("/cart");
        } else {
          error.value = data.toString();
        }
      })
      .catch((err) => {
        error.value = err;
      });
  } catch (err: unknown) {
    error.value = err as string;
  }
}

definePageMeta({
  layout: false,
  middleware: "auth",
});
</script>
