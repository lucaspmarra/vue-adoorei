<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';


</script>

<template>
  <NavbarComponent />
  <div class="flex flex-col min-h-screen overflow-hidden">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>