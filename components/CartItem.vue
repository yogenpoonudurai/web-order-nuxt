<template>
  <div class="card card-side border-b px-10">
    <figure>
      <img :src="item.imageSrc" alt="" class="w-10" />
    </figure>
    <div class="card-body flex flex-row justify-between">
      <div class="card-title">{{ item.name }}</div>
      <div>{{ item.quantity }}</div>
      <div>{{ (item.price * item.quantity).toFixed(2) }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CartItem } from "~~/types/cart.type";

interface Props {
  item: CartItem;
}

const props = defineProps<Props>();
</script>
