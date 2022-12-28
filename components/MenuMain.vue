<template>
  <div class="navbar bg-base-100 max-w-7xl mx-auto">
    <div class="navbar-start lg:hidden">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li class="hover:text-primary">
            <NuxtLink href="/">Home</NuxtLink>
          </li>
          <li class="hover:text-primary">
            <NuxtLink href="/products">Products</NuxtLink>
          </li>
          <li class="hover:text-primary">
            <NuxtLink href="/login">Login</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex-1">
      <a href="/" class="normal-case text-xl text-primary font-bold">{{
        runtimeConfig.public.brandName
      }}</a>
    </div>
    <div class="flex-none hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li class="hover:text-primary">
          <NuxtLink href="/">Home</NuxtLink>
        </li>
        <li class="hover:text-primary">
          <NuxtLink href="/products">Products</NuxtLink>
        </li>
        <li class="hover:text-primary">
          <NuxtLink href="/login">Login</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>
