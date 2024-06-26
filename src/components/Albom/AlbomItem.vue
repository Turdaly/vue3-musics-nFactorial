<template>
  <div class="container">
    <div class="up__side flex">
      <img
        :src="music.album.cover_medium"
        alt="picture artist"
        class="size-72"
      />
      <div class="up__side-info ml-8 flex flex-col justify-center">
        <RateVue v-if="!accountStore.isAccountEmpty"/>
        <h1 class="text-5xl mt-5">{{ music.album.title }}</h1>
        <div class="flex">
          <img
            :src="music.artist.picture_small"
            class="rounded-full size-7"
            alt=""
          />
          <p class="text-base ml-2">{{ music.artist.name }}</p>
        </div>
        <p class="text-lg text-gray-500">
          {{ allInfoAlbum?.tracks.data?.length }} треков |
          {{ getTracksTime() }} | {{ allInfoAlbum?.release_date }} |
          {{ allInfoAlbum?.fans }} поклонников
        </p>
        <a href="#comment">
          <p class="text-sky-400 pt-4">Добавлять комментарии</p>
        </a>
      </div>
    </div>
    <AlbomTableHeader class="mt-16">
      <tbody class="bg-white">
        <tr
          v-for="track in allInfoAlbum?.tracks.data"
          class="hover:bg-gray-50 active:bg-sky-200 transition-colors"
          :class="{ 'bg-sky-100': track.id === audioId }"
          @click="$emit('showAudio', track), highlightRow(track.id)"
        >
          <td class="px-4 py-4 flex">
            <img
              :src="music.album.cover_small"
              alt="img album"
              class="size-10"
            />
            <div class="ml-6 content-center">{{ track.title }}</div>
          </td>
          <td class="px-4 py-4">{{ track.duration }}</td>
          <td class="px-4 py-4">{{ track.rank }}</td>
        </tr>
      </tbody>
    </AlbomTableHeader>
    <div id="comment">
      <CommentField />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchResponseT, AllInfoAlbum } from "@/types/music";
import axios from "axios";
import { onMounted, ref } from "vue";

import AlbomTableHeader from "@/components/Albom/AlbomTableHeader.vue";
import CommentField from "@/components/Comment/CommentField.vue";
import RateVue from "@/components/Rate.vue";
import { API_URL } from "@/utils/api";
import { albomTitle } from "@/components/Albom/albom";

import { useAccountStore } from "@/stores/AccoutStore";
// Store
const accountStore = useAccountStore()
// ref
const allInfoAlbum = ref<AllInfoAlbum>();

// props
const props = defineProps<{
  music: SearchResponseT;
}>();

albomTitle.value = props.music.album.title;
// HighlightRow
const audioId = ref<number>();
const highlightRow = (id: number) => {
  audioId.value = id;
};

// Time
const getTracksTime = () => {
  let sum = 0;
  allInfoAlbum.value?.tracks.data.forEach((item) => {
    sum += item.duration;
  });
  let hour = Math.floor(sum / 3600);
  let secund = sum - hour * 3600;
  return `${hour} ч ${Math.floor(secund % 60)} мин.`;
};

// Request
const options = {
  method: "GET",
  url: `${API_URL}/album/`,
  headers: {
    "X-RapidAPI-Key": "7b347da72dmsha047ae5e1a35c7ap1715a4jsneedd69536737",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const fetchAlbum = async () => {
  try {
    options.url += props.music.album.id;
    const response = await axios.request(options);
    allInfoAlbum.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchAlbum();
});
</script>

<style scoped></style>
