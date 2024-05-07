<template>
  <div class="">
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-6xl font-bold ">Войти</h1>
      <!-- <AuthGoogle /> -->
      <p>У вас еще нет аккаунта? <router-link :to="{ name: 'registration'}"><span class="text-purple-600 font-bold">Регистрация</span></router-link></p>
      <LoginField/>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginField from '@/components/Login/LoginField.vue';
import AuthGoogle from '@/components/AuthGoogle.vue';
</script>

<style scoped>

</style>