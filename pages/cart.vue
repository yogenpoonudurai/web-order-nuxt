<template>
  <NuxtLayout name="dashboard">
    <h1 class="text-2xl font-bold font-body mb-4">Your orders</h1>

    <div v-if="cart.length > 0" v-for="(item, index) in cart" :key="index">
      <CartItem :item="item" />
    </div>
    <div v-else>
      <p>You have no orders yet!</p>
      <NuxtLink href="/#mostPopular">
        <button class="btn btn-primary">Add products to cart</button>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { useAuthStore } from "~~/store/auth";
import { useCartStore } from "~~/store/cart";

const { user } = useAuthStore();
const { cart } = useCartStore();

onMounted(() => {
  console.log("user: " + user.isAuthenticated);
});
definePageMeta({
  layout: false,
});
</script>
