<template>
  <div class="grid lg:grid-cols-6 text-center lg:text-left">
    <div class="lg:col-span-2">
      <h1 class="text-2xl text-primary font-medium lg:block">
        {{ runtimeConfig.public.brandName }}
      </h1>
      <p class="mt-10 lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <SocialBar class="lg:mt-8 my-10 lg:justify-start" />
    </div>
    <div class="mb-4 lg:mb-0">
      <h1 class="font-bold lg:mb-10 mb-4">About Us</h1>
      <ul class="space-y-2">
        <li>About us</li>
        <li>Service Us</li>
        <li>Contact</li>
        <li>Company</li>
      </ul>
    </div>
    <div class="mb-4 lg:mb-0">
      <h1 class="font-bold lg:mb-10 mb-4">Company</h1>
      <ul class="space-y-2">
        <li>Partnership</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Sitemap</li>
      </ul>
    </div>
    <div class="lg:col-span-2">
      <h1 class="font-bold lg:mb-10">Get in touch</h1>
      <p class="text-sm mb-8 mx-6 lg:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div class="flex lg:flex-row flex-col px-4 lg:px-0">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full lg:max-w-xs"
        />
        <button class="btn btn-primary lg:ml-4 mt-4 lg:mt-0">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>
