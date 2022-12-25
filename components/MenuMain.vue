<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">{{
        runtimeConfig.public.brandName
      }}</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li class="hover:text-lime-500">
          <NuxtLink href="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/about">About Us</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/company">Our Company</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>
