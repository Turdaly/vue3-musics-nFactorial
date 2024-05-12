<template>
  <a-layout>
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
    <a-layout>
      <Sidebar @change-music="changeMusic" />
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>Musics</a-breadcrumb-item>
          <a-breadcrumb-item>{{ title }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '580px',
          }"
          :class="{
            'grid grid-cols-4 gap-10': navbarItems === NavbarItems.ALBUMS,
          }"
        >
          <AlbomItem
            v-if="navbarItems === NavbarItems.ALBOMITEM && music"
            :music="music"
            @show-audio="showModal"
            class="mb-28"
          />

          <Table v-if="navbarItems === NavbarItems.TRICS">
            <TrackList
              v-for="data in searchResponse"
              :key="data.id"
              :data="data"
              @show-audio="showModal"
            />
          </Table>
          <AlbumList
            v-if="navbarItems === NavbarItems.ALBUMS"
            v-for="data in searchResponse"
            :key="data.id"
            :data="data"
            @send-music="setMusic"
          />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <AudioPlayer  v-if="showAudio && audio" :audio="audio"/>
  </a-layout>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { Modal } from "ant-design-vue";
// Component
import TrackList from "@/components/TrackList.vue";
import AlbomItem from "@/components/Albom/AlbomItem.vue";
import AlbumList from "@/components/Albom/AlbumList.vue";
import Table from "@/components/Table.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";
import Sidebar from "@/layout/Sidebar.vue";

// types
import type { SearchResponseT } from "@/types/music";
import { NavbarItems } from "@/types/navbar";

import { API_URL } from "@/components/BaseConst/base";

// Store
import { useAccountStore } from "@/stores/AccoutStore";

const accountStore = useAccountStore();

// Logout

const logout = () => {
  localStorage.clear();
  location.reload();
};

const options = {
  method: "GET",
  url: `${API_URL}/search`,
  params: { q: "" },
  headers: {
    "X-RapidAPI-Key": "7b347da72dmsha047ae5e1a35c7ap1715a4jsneedd69536737",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

// Search
const search = ref<string>("Eminem");
const searchResponse = ref<Array<SearchResponseT>>([]);
const title = ref("");

const fetchMusic = async () => {
  try {
    options.params.q = search.value;
    title.value = search.value.charAt(0).toUpperCase() + search.value.slice(1);
    const response = (await axios.request(options)).data;
    searchResponse.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

// AlbomItem
const music = ref<SearchResponseT>();

const setMusic = (data: SearchResponseT) => {
  music.value = data;
  navbarItems.value = NavbarItems.ALBOMITEM;
};

// AudioPlayer
const audio = ref<SearchResponseT>();
const showAudio = ref<boolean>(false);
const showModal = (data: SearchResponseT) => {
  audio.value = data;
  showAudio.value = true;
};

// Sidebar
const navbarItems = ref<NavbarItems>(NavbarItems.TRICS);
const changeMusic = async (title: NavbarItems) => {
  navbarItems.value = title;
  await fetchMusic();
};

const showInfo = () => {
  if (accountStore.isAccountEmpty) {
    info();
  }
};

const info = () => {
  Modal.info({
    title: "Напоминание",
    content:
      "Пожалуйста, обратите внимание, что некоторые функции, такие как оценивание и оставление комментариев, могут быть недоступны, поскольку вы не авторизованы в своем аккаунте. Однако вы все равно можете искать и слушать музыку на нашем сайте. Для полноценного использования всех возможностей, пожалуйста, авторизуйтесь. [Login: admin]  [Password: 123]",
  });
};

// Other
onMounted(async () => {
  showInfo();
  await fetchMusic();
});
</script>
<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.ant-input-group-addon {
  background-color: yellow !important;
}
</style>
