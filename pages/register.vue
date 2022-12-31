<template>
  <NuxtLayout name="bare">
    <div class="hero min-h-screen flex flex-col lg:flex-row">
      <div
        class="text-center px-10 bg-primary lg:w-1/2 w-full lg:h-full h-1/2 lg:min-h-screen flex flex-col justify-center text-white"
      >
        <img src="/images/register.svg" class="lg:w-1/2 mx-auto" alt="login" />
        <p class="p-6">What are you waiting for?1</p>
      </div>
      <div class="lg:w-1/2 w-full px-10 py-10">
        <div class="mb-4 lg:max-w-md mx-auto">
          <h1 class="text-3xl font-bold">Let's get you started.</h1>
          <p>Start purchasing our beautiful products.</p>
        </div>
        <div class="card flex-shrink-0 mx-auto shadow-2xl bg-base-100 max-w-md">
          <form @submit.prevent="handleRegister">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  v-model="email"
                  type="text"
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
              </div>
              <NuxtLink href="/login">
                <span>Already have an account? </span>
                <span class="text-center hover:text-primary link">Login</span>
              </NuxtLink>
              <div class="badge badge-error" v-if="error">{{ error }}</div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const email = ref("");
const password = ref("");
const error = ref("");

const { register } = useAuth();
const { $toast } = useToast();

async function handleRegister() {
  try {
    await register(email.value, password.value)
      .then((data) => {
        if (data.user) {
          $toast.success(
            "Your account has been registered. Navigating to login the page."
          );
          navigateTo("/login");
        } else {
          error.value = data;
        }
      })
      .catch((err) => {
        $toast.warning("Opps. Something went wrong. " + error);
        error.value = err;
      });
  } catch (err) {
    error.value = err;
  }
}

definePageMeta({
  layout: false,
});
</script>
