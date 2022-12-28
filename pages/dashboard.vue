<template>
  <div>
    <NuxtLayout name="dashboard">
      <template #header> Some header template content. </template>
      Welcome to Dashboard
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
  middleware: "auth",
});
</script>
