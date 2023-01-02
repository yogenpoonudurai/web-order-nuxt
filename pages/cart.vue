<template>
  <NuxtLayout name="dashboard">
    <h1 class="text-2xl font-bold font-body mb-4">Your orders</h1>
    <p>You have no orders yet!</p>
    <NuxtLink href="/#mostPopular">
      <button class="btn btn-primary">Add products to cart</button>
    </NuxtLink>
  </NuxtLayout>
</template>
<script setup>
import { useAuthStore } from "~~/store/auth";

const { user } = useAuthStore();

onMounted(() => {
  console.log("user: " + user.isAuthenticated);
});
definePageMeta({
  layout: false,
});
</script>
