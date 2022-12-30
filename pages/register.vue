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
        <div
          class="card flex-shrink-0 lg:max-w-md mx-auto shadow-2xl bg-base-100"
        >
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
            </div>
            <NuxtLink href="/login">
              <span>Already have an account? </span>
              <span class="text-center hover:text-primary link">Login</span>
            </NuxtLink>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Register</button>
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
