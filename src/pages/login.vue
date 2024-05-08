<template>
  <div class="">
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-6xl font-bold">Войти</h1>
      <!-- <AuthGoogle /> -->
      <p class="mb-1">
        У вас еще нет аккаунта?
        <router-link :to="{ name: 'registration' }">
          <span class="text-sky-500 font-bold" @click="onCloseAllAlert"
            >Регистрация</span
          >
        </router-link>
      </p>
      <p>
        Можно посветить сайт без аккаута
        <router-link :to="{ name: 'home' }">
          <span class="text-sky-500 font-bold" @click="onCloseAllAlert"
            >Главная страница</span
          >
        </router-link>
      </p>
      <LoginField />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginField from "@/components/Login/LoginField.vue";
import { onCloseAllAlert } from "@/components/Login/loginConst";
import { fetchArtist } from "@/components/BaseConst/base";

fetchArtist();
</script>

<style scoped></style>
