<template>
  <div class="flex justify-center">
    <i
      :key="star"
      v-for="(star, index) in maxRating"
      class="text-yellow-500"
      :class="star <= rating ? 'ri-star-s-fill' : 'ri-star-s-line'"
    ></i>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ rating: number; maxRating: number }>();
</script>
