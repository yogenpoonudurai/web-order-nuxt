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
    <button class="btn btn-outline rounded-none my-4 hover:bg-primary">
      Buy Now
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: {
    imageSrc: string;
    stars: number;
    name: string;
    price: number;
    discount?: number;
  };
}

const props = defineProps<Props>();
</script>
