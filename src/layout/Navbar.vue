<template>
  <nav
    class="bg-stone-100 px-4 py-2 flex items-center justify-between border"
  >
    <div class="flex-grow flex justify-center">
      <a-input-search
        v-model:value.trim="search"
        placeholder="input search text"
        class="w-2/5 mt flex"
        @search="fetchMusic"
      />
    </div>
    <div class="flex" v-if="!accountStore.isAccountEmpty">
      <button
        @click="logout"
        class="bg-stone-100 hover:bg-stone-200 transition-colors text-sm font-bold border border-current px-6 py-2 rounded-lg pt-1 mr-4"
      >
        Выход
      </button>
      <img
        src="../assets/avatar3.png"
        alt="Avatar"
        class="w-8 h-8 rounded-full mr-1 mt-1"
      />
      <p class="text-base mr-10 mt-1">{{ accountStore.account.username }}</p>
    </div>
    <div class="flex" v-if="accountStore.isAccountEmpty">
      <router-link :to="{ name: 'login' }">
        <button
          class="bg-stone-100 hover:bg-stone-200 transition-colors text-sm font-bold border border-current px-6 py-2 rounded-lg pt-1 mr-4"
        >
          Вход
        </button>
      </router-link>
      <router-link :to="{ name: 'registration' }">
        <button
          class="bg-sky-200 hover:bg-sky-300 transition-colors text-sm font-bold px-6 py-2 rounded-lg pt-1"
        >
          Регистрация
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/AccoutStore';
import { useSearchStore } from "@/stores/search"
import { storeToRefs } from 'pinia';
const accountStore = useAccountStore()
const { search } = storeToRefs(useSearchStore())
const { fetchMusic } = useSearchStore()
const logout = () => {
  localStorage.clear();
  location.reload();
};

</script>

<style scoped>

</style>