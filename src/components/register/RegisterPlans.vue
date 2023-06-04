<script setup>
import plans from './plans.json';
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
        class="bg-white shadow-md rounded-lg p-4">
        <p>{{ plan.id }}</p>
        <p>{{ plan.name }}</p>
        <p>{{ plan.price }}</p>
        <p>{{ plan.billing }}</p>
      </div>
    </div>
  </section>
</template>
