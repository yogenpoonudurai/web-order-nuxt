<template>
  <div class="w-full shadow-md">
    <img :src="imageSrc" alt="image" class="object-fit max-w-full rounded-md" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["imageSrc"]);
</script>
