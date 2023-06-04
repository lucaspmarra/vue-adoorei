<script setup>
import plans from './plans.json';

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
/* 
 "id": 1,
        "name": "hospedagem 1",
        "price": "grátis",
        "billing": "você não paga nada para usar",
        "setup": "sem taxa de setup",
        "use-case": "ideal para quem está começando",
        "location": "seu site em servidores nos estados unidos",
        "description": [
            "servidores em nossos data centers americanos",
            "asp, asp.net 2.0/3.0/3.5/4.0/4.5/4.5.1/4.5.2 (medium trust) ou php 5.3, 5.4, 5.5, 5.6 e 7.0",
            "1 usuários de ftp apra upload ou download",
            "1 contas de e-mails",
            "1 subdomínio gratuito"
        ],
        "support": "suporte 24 horas, 7 dias por semana grátis",
        "apps": [
            "wordpress",
            "drupal",
            "entre outros..."
        ],
        "migration": null,
        "extra": [
            "webmail roundcube",
            "antispam",
            "painel de gerencimento de dns",
            "painel de controle web",
            "configurações de php personalizáveis",
            "certificado ssl grátis",
            "transferência ilimitada"
        ] */
</script>

<template>
  <section class="flex justify-center">
    <div class="flex space-x-4">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="w-[300px] bg-white shadow-md rounded-lg p-4">
        <article class="text-center">
          <p class="text-[#666666] text-2xl font-bold">
            {{ plan["name"] }}
          </p>
        </article>

        <article class="text-center">
          <p class="text-[#F30168] text-3xl font-bold capitalize">
            <span v-html="formatPrice(plan.price)" />
          </p>
          <p>{{ plan["billing"] }}</p>
          <p>{{ plan["setup"] }}</p>
        </article>

        <hr class="my-6">

        <p class="text-gray-600">
          {{ plan["use-case"] }}
        </p>

        <hr class="my-6">

        <div class="mt-6">
          <router-link to="/painel">
            <button
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#F30168] rounded-md hover:bg-[#F30168]/80 focus:outline-none focus:bg-[#F30168]/80">
              escolher esse plano
            </button>
          </router-link>
        </div>

        <hr class="my-6">
        
        <article>
          <p>{{ plan["location"] }}</p>
        </article>

        <hr class="my-6">

        <article
          v-for="desc in plan.description"
          :key="desc.title">
          <ul>
            <li
              v-for="item in desc.items"
              :key="item.id">
              {{ item["text"] }}
            </li>
          </ul>
        </article>

        <hr class="my-6">

        <article>
          <p>{{ plan["support"] }}</p>
        </article>

        <hr class="my-6">

        <article
          v-for="app in plan.apps"
          :key="app.id">
          <p>{{ app["text"] }}</p>
        </article>

        <hr class="my-6">

        <article
          v-for="migration in plan.migrations"
          :key="migration.id">
          <p>{{ migration.title }}</p>
          <p>{{ migration.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
