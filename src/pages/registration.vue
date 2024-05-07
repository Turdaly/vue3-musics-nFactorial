<template>
  <div class="">
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-5xl font-bold ml-14 mb-4">Зарегистрируйтесь</h1>
      <h1 class="text-5xl font-bold ml-14 mb-4">Создайте</h1>
      <h1 class="text-5xl font-bold ml-14 mb-4">логин и пороль</h1>
        <!-- <AuthGoogle /> -->
      <p>У вас уже есть аккаунт? <router-link :to="{ name: 'login'}"><span class="text-purple-600 font-bold">Войти</span></router-link></p>
      <RegistrationField/>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegistrationField from '@/components/Login/RegistrationField.vue';
</script>

<style scoped>

</style>