<script setup>
import logo from '../../assets/logo-locaweb.svg';
import LogoutButton from './LogoutButton.vue';
</script>

<template>
  <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-sm shadow-[#F30168]">
    <div
      class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between p-4">
        <router-link to="/">
          <img
            class="w-28 items-center"
            :src="logo"
            alt="Logo da empresa Locaweb">
        </router-link>
      </div>
      <LogoutButton />
    </div>
  </div>
</template>
