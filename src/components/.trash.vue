<template>

    <div
v-for="user in getUsers"
:key="user.id">
      {{ user.id }} - {{ user.name.firstname }} {{ user.name.lastname }}
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useHttpStore } from '../stores/http-store';

const store = useHttpStore();

const getUsers = computed(()=>{
  return store.getUsers;
});

onMounted(()=>{
  store.fetchUsers();
});
</script>

<style lang="scss" scoped>

</style>