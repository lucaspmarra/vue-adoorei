<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

import plans from './plans.json';
import { CheckIcon } from '@heroicons/vue/24/outline';
import { usePlanStore } from '../../stores/plan-store';
import SmallButton from '../root/SmallButton.vue';


const planStore = usePlanStore();
const router = useRouter();

const selectedPlan = ref(null);
const buttonText = ref('escolher esse plano');

const storedSelectedPlan = planStore.selectedPlan;
if (storedSelectedPlan) {
  selectedPlan.value = storedSelectedPlan;
}


const filteredPlans = computed(() => {
  if (selectedPlan.value) {
    return plans.filter((plan) => plan.id === selectedPlan.value);
  }
  else {
    return plans;
  }
});

const navigateToRegister = async (planId) => {
  try {
    await router.push({ name: 'registro', params: { planId } });
  }
  catch (error) {
    console.error(error);
  }
};

const selectPlan = async (plan) => {
  selectedPlan.value = plan.id;
  try {
    await navigateToRegister(plan.id);
  }
  catch (error) {
    console.error(error);
  }
};


const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `<span class="font-thin text-lg">R$</span>${price.toFixed(2)}<span class="font-thin text-lg">/mês</span>`;
  }
  else if (typeof price === 'string') {
    return price;
  }
  else {
    return 'Invalid price';
  }
};

watch(selectedPlan, (newValue) => {
  planStore.setSelectedPlan(newValue);
});
</script>

<template>
  <section class="flex justify-center">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 md:space-x-4 ">
      <div
        v-for="plan in filteredPlans"
        :key="plan.id"
        class="w-full md:w-[300px] bg-white shadow-md rounded-lg p-4 mt-4">
        <article class="text-center my-6">
          <p class="text-[#666666] text-2xl font-bold">
            {{ plan["name"] }}
          </p>
        </article>

        <article class="text-center h-[100px]">
          <p class="text-[#F30168] text-3xl font-bold capitalize">
            <span v-html="formatPrice(plan.price)" />
          </p>
          <p class="text-xs">
            {{ plan["billing"] }}
          </p>
          <p class="text-xs">
            {{ plan["setup"] }}
          </p>
        </article>

        <hr class="py-1">

        <article class="h-[50px]">
          <p class="text-gray-600">
            {{ plan["use-case"] }}
          </p>
        </article>

        <hr class="py-1">

        <article class="mt-6">
          <SmallButton
            @click="selectPlan(plan)"
            :button-text="buttonText" />
        </article>


        <article class="h-[35px] mt-6">
          <p class="text-[#666666] text-lg font-bold first-letter:capitalize">
            {{ plan["location"] }}
          </p>
        </article>

        <article class="mt-6">
          <div
            v-for="desc in plan.description"
            :key="desc.title">
            <ul
              v-for="item in desc.items"
              :key="item.id"
              class="text-sm first-letter:capitalize ">
              <li>
                <p class="first-letter:capitalize">
                  <CheckIcon class="min-w-5 h-5 mr-2" />{{ item["text"] }}
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article class="h-[40px] mt-6">
          <p class="text-[#666666] text-lg font-bold first-letter:capitalize">
            {{ plan["support"] }}
          </p>
        </article>

        <article class="mt-6">
          <div
            v-for="app in plan.apps"
            :key="app.id">
            <p class="text-[#666666] text-lg font-bold first-letter:capitalize">
              {{ app.title }}
            </p>
            <ul>
              <li
                v-for="item in app.items"
                :key="item.id"
                class="text-sm first-letter:capitalize">
                {{ item["text"] }}
              </li>
            </ul>
          </div>
        </article>

        <div
          v-if="plan.migrations"
          class="mt-6">
          <article
            v-for="migration in plan.migrations"
            :key="migration.title">
            <p class="text-[#666666] text-lg font-bold first-letter:capitalize">
              {{ migration.title }}
            </p>
            <ul>
              <li
                v-for="item in migration.items"
                :key="item.id"
                class="first-letter:capitalize text-sm">
                {{ item["text"] }}
              </li>
            </ul>
          </article>
        </div>

        <article class="mt-6">
          <div
            v-for="extra in plan.extras"
            :key="extra.title">
            <p class="text-[#666666] text-lg font-bold first-letter:capitalize">
              {{ extra["title"] }}
            </p>
            <ul>
              <li
                v-for="item in extra.items"
                :key="item.id"
                class="first-letter:capitalize text-sm">
                {{ item["text"] }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
