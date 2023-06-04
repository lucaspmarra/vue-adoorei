<script setup>
import logo from '../../assets/logo-locaweb.svg';
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
    <p>Para acessar sua conta informe sua conta e senha</p>
    <form class="mt-6">
      <div>
        <label
          for="email"
          class="block text-sm text-gray-800">Email</label>
        <input
          type="email"
          placeholder="Seu e-mail"
          class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
      </div>

      <div class="mt-4">
        <div>
          <label
            for="password"
            class="block text-sm text-gray-800">Senha</label>
          <input
            type="password"
            placeholder="Sua senha"
            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
        <router-link to="/painel">
          <a class="text-xs text-gray-600 hover:underline">Esqueci minha senha</a>
        </router-link>

        <div class="mt-6">
          <router-link to="/painel">
            <button
              class="w-full h-16 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#F30168] rounded-md hover:bg-[#F30168]/80 focus:outline-none focus:bg-[#F30168]/80">
              Fazer Login
            </button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
  <p class="mt-8 text-lg font-light text-center text-gray-700">
    Ainda não tem conta? <router-link to="/registro">
      <a class="font-medium text-[#F30168] underline">Cadastre-se</a>
    </router-link>
  </p>
</template>
