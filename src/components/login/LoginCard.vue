<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import logo from '../../assets/logo-locaweb.svg';
import LargeButton from '../root/LargeButton.vue';
import InputComponent from '../root/InputComponent.vue';
import { usePlanStore } from '../../stores/plan-store';
import { useHttpStore } from '../../stores/http-store';


const planStore = usePlanStore();
const httpStore = useHttpStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const buttonText = ref('fazer login');
const errorMessage = ref('Usuário ou senha inválidos, verifique os dados');

const navigateToRegistration = async () => {
  const selectedPlan = planStore.selectedPlan;
  const route = selectedPlan ? { name: 'registro', params: { planId: selectedPlan } } : '/planos';

  try {
    await router.push(route);
  }
  catch (error) {
    console.error(error);
  }
};

const login = async () => {
  try {
    await httpStore.login(username.value, password.value);
    await router.push('/painel');
  }
  catch (error) {
    errorMessage.value = error;
    console.error('vue', error);
  }
};

</script>

<template>
  <div class="flex justify-center">
    <img
      class="w-48 items-center pb-6"
      :src="logo"
      alt="Logo da empresa Locaweb">
  </div>

  <div class="w-full p-6 m-auto bg-white rounded shadow-lg shadow-purple lg:max-w-md">
    <h4>Entre na sua conta</h4>
    <p>Para acessar sua conta, informe seu e-mail e senha</p>

    <form
      class="mt-6"
      @submit.prevent="login">
      <InputComponent
        v-model="username"
        class="w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        label-class="text-gray-700 text-sm font-bold mb-2"
        name="email"
        label="Email"
        type="email"
        placeholder="Seu e-mail" />

      <div class="mt-4">
        <InputComponent
          v-model="password"
          class="w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          label-class="text-gray-700 text-sm font-bold mb-2"
          name="password"
          label="Senha"
          type="password"
          placeholder="Sua senha" />

        <router-link to="/painel">
          <a class="text-xs text-gray-600 hover:underline">Esqueci minha senha</a>
        </router-link>

        <div class="mt-6">
          <LargeButton
            @click="login"
            :button-text="buttonText" />
          <p
            v-if="httpStore.getError"
            class="text-red-500">
            {{ httpStore.getError }}
          </p>
        </div>
      </div>
    </form>
  </div>
  <p class="mt-8 text-lg font-light text-center text-gray-700">
    Ainda não tem conta?
    <a
      @click="navigateToRegistration"
      class="font-medium text-[#F30168] underline hover:cursor-pointer">Cadastre-se</a>
  </p>
</template>
