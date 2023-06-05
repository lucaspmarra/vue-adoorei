<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PlansInfo from '../plans/PlansInfo.vue';

const route = useRoute();

const selectedPlan = ref(null);

onMounted(() => {
  selectedPlan.value = route.params.planId;
});
</script>

<template>
  <div class="flex justify-center my-6">
    <div class="flex space-x-4">
      <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="name">Name</label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe">
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email">Email</label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com">
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password">Password</label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********">
        </div>

        <button
          class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit">
          Register
        </button>
      </form>
      <PlansInfo :plan="selectedPlan" />
    </div>
  </div>
</template>