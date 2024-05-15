<template>
  <a-layout-content
    :style="{
      background: '#fff',
      padding: '24px',
      margin: 0,
      minHeight: '580px',
    }"
    :class="{
      'grid grid-cols-4 gap-10': navbarItem === NavbarItem.ALBUMS,
    }"
  >
    <AlbomItem
      v-if="navbarItem === NavbarItem.ALBOMITEM && music"
      :music="music"
      @show-audio="showModal"
      class="mb-28"
    />

    <Table v-if="navbarItem === NavbarItem.TRICS">
      <TrackList
        v-for="data in searchResponse"
        :key="data.id"
        :data="data"
        @show-audio="showModal"
      />
    </Table>
    <AlbumList
      v-if="navbarItem === NavbarItem.ALBUMS"
      v-for="data in searchResponse"
      :key="data.id"
      :data="data"
      @send-music="setMusic"
    />
  </a-layout-content>
</template>

<script setup lang="ts">
import TrackList from "@/components/TrackList.vue";
import AlbomItem from "@/components/Albom/AlbomItem.vue";
import AlbumList from "@/components/Albom/AlbumList.vue";
import Table from "@/components/Table.vue";

import { storeToRefs } from "pinia";
import { NavbarItem } from "@/types/navbar";
import { useSearchStore } from "@/stores/search";
import { useMusicStore } from "@/stores/music";
import { useAudioStore } from "@/stores/audio";

const { searchResponse } = storeToRefs(useSearchStore())
const { music, navbarItem } = storeToRefs(useMusicStore())
const { setMusic } = useMusicStore()
const { showModal } = useAudioStore()
</script>
