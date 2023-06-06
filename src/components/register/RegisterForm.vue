<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import PlansInfo from '../plans/PlansInfo.vue';
import LargeButton from '../root/LargeButton.vue';
import InputComponent from '../root/InputComponent.vue';

import { useHttpStore } from '../../stores/http-store';

const route= useRoute();
const router = useRouter();
const httpStore = useHttpStore();

const selectedPlan = ref(null);
const name = ref('');
const phone = ref('');
const username = ref('');
const password = ref('');

const buttonText = ref('Criar conta');

onMounted(() => {
  selectedPlan.value = route.params.planId;
});

const register = async (event) => {
  event.preventDefault();

  try {
    const userData = {
      name: {
        firstname: name.value,
      },
      username: username.value,
      password: password.value,
      phone: phone.value
    };

    await httpStore.create(userData);
    await router.push('/painel');
  }
  catch (error) {
    console.error('vue', error);
  }
};
</script>

<template>
  <div class="flex justify-center my-6">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 md:space-x-4 md:my-6">
      <form
        class="w-full md:w-[800px] md:mx-4 bg-white shadow-md rounded-lg p-4">
        <div class="mb-4">
          <h2>Dados pessoais</h2>
          <p>Informe seus dados pessoais para acesso à sua conta</p>
          <InputComponent
            :value="name"
            @input="name = $event"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            label-class="text-gray-700 text-sm font-bold mb-2"
            name="name"
            label="Nome completo"
            type="text"
            placeholder="Informe seu nome completo" />
        </div>
        <div class="mb-4">
          <InputComponent
            :value="phone"
            @input="phone = $event"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            label-class="text-gray-700 text-sm font-bold mb-2"
            label="Celular"
            type="phone"
            name="phone"
            placeholder="(99) 99999-0000" />
        </div>
        <div class="mb-4">
          <InputComponent
            v-model="username"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            label-class="text-gray-700 text-sm font-bold mb-2"
            name="email"
            label="E-mail"
            type="text"
            placeholder="Informe seu e-mail" />
        </div>
        <div class="mb-4">
          <InputComponent
            v-model="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            label-class="text-gray-700 text-sm font-bold mb-2"
            name="password"
            label="Senha"
            type="password"
            placeholder="********" />
        </div>
        <div class="mb-4">
          <InputComponent
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            label-class="text-gray-700 text-sm font-bold mb-2"
            name="confirm-password"
            label="Confirme sua senha"
            type="password"
            placeholder="********" />
        </div>
        <hr class="my-6">
        <h1>Dados do seu site</h1>
        <div class="mb-4">
          <InputComponent
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            label-class="text-gray-700 text-sm font-bold mb-2"
            name="website"
            label="Nome do seu site"
            type="text"
            placeholder="Meu site" />
        </div>
        <LargeButton
          @click="register"
          :button-text="buttonText" />
      </form>

      <PlansInfo :plan="selectedPlan" />
    </div>
  </div>
</template>