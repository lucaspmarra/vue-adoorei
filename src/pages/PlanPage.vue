<script setup>
import { ref, defineExpose } from 'vue';
import PlansInfo from '../components/plans/PlansInfo.vue';


const selectedPlan = ref(null);

defineExpose({
  selectedPlan
});
</script>

<template>
  <main class="w-full p-6 items-center m-auto lg:max-w-max">
    <section class="text-center my-6">
      <h1 class="text-3xl font-bold">
        Você está muito próximo de mudar a forma de
        <span class="text-[#F30168] text-3xl font-bold underline">hospedar seu site</span>
      </h1>
      <p>Escolha o seu plano</p>
    </section>
    
    <section>
      <PlansInfo :selected-plan="selectedPlan" />
    </section>
  </main>
</template>
