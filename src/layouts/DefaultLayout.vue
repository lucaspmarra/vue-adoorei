<script setup>
import RootNavbar from '../components/root/RootNavbar.vue';
</script>

<template>
  <RootNavbar />
  <div class="flex flex-col overflow-hidden">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
