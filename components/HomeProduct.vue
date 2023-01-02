<template>
  <div
    class="w-full border-base border-2 p-6 hover:border-primary hover:bg-red-50 text-center"
  >
    <img
      :src="product?.imageSrc"
      alt="image"
      class="object-fit max-w-full rounded-md mx-auto"
    />
    <Rating :rating="product.stars" :max-rating="5" />
    <div class="my-2">{{ product.name }}</div>
    <div class="text-primary">
      <div v-if="product.discount">
        <span class="line-through text-gray-400"
          >MYR {{ product.price.toFixed(2) }}</span
        >
        <span class="">
          MYR {{ (product.price * (1 - product.discount)).toFixed(2) }}
        </span>
      </div>
      <div v-else>
        <span>MYR {{ product.price.toFixed(2) }}</span>
      </div>
    </div>
    <div class="flex flex-col">
      <button
        class="btn btn-outline rounded-none my-4 hover:bg-primary"
        @click="handleAddProduct(product)"
      >
        Buy Now
      </button>
      <NuxtLink :href="`/products/${product.id}`">Details</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/store/auth";
import { useCartStore } from "~~/store/cart";
import { CartItem } from "~~/types/cart.type";
import { Product } from "~~/types/product.type";

interface Props {
  product: Product;
}

const { addProduct } = useCartStore();
const { user } = useAuthStore();
const { $toast } = useToast();

function handleAddProduct(product: Product) {
  if (!user.isAuthenticated) {
    $toast.warning("Please login to add product");
    return;
  }
  const item: CartItem = { ...product, quantity: 1 };
  addProduct(item)
    .then((data) => {
      if (data) {
        $toast.info("product added to cart");
      }
    })
    .catch((error) => {
      $toast.error("Error adding product. ${error}");
    });
}

const props = defineProps<Props>();
</script>
