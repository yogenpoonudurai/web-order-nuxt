<template>
  <NuxtLayout name="bare">
    <div class="hero min-h-screen flex flex-col-reverse lg:flex-row">
      <div
        class="text-center px-10 bg-primary lg:w-1/2 h-full min-h-screen flex flex-col justify-center text-white"
      >
        <img src="/images/login.svg" class="max-w-sm mx-auto" alt="login" />
        <p class="p-6">Let's get you back in!</p>
      </div>
      <div class="lg:w-1/2 px-10 py-10">
        <div class="mb-4 max-w-md mx-auto">
          <h1 class="text-3xl font-bold mb-4">Welcome back!</h1>
        </div>
        <div class="card flex-shrink-0 shadow-2xl bg-base-100 max-w-md mx-auto">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
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
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover"
                  >Forgot password?</a
                >
              </label>
            </div>
            <NuxtLink href="/register">
              <span>Don't have an account? </span>
              <span class="text-center hover:text-primary link">Register</span>
            </NuxtLink>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
