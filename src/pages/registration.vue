<template>
  <div class="">
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-5xl font-bold ml-14 mb-4">Зарегистрируйтесь</h1>
      <h1 class="text-5xl font-bold ml-14 mb-4">Создайте</h1>
      <h1 class="text-5xl font-bold ml-14 mb-4">логин и пороль</h1>
        <!-- <AuthGoogle /> -->
      <p>У вас уже есть аккаунт? <router-link :to="{ name: 'login'}"><span class="text-sky-500 font-bold" @click="onCloseAllAlert">Войти</span></router-link></p>
      <RegistrationField/>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegistrationField from '@/components/Login/RegistrationField.vue';
import { onCloseAllAlert } from "@/components/Login/loginConst"
</script>

<style scoped>

</style>