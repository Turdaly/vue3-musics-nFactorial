<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-typography-paragraph class="flex justify-center text-base mt-3">Онлайн песни</a-typography-paragraph>
        <a-menu-item  v-for="item in navbarItems" :key="item.title" @click="renderMusic(item.title)">
          {{ item.title }}
        </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useMusicStore } from '@/stores/music';
import type { NavbarItems } from '@/types/navbar';
import { NavbarItem } from '@/types/navbar';


const navbarItems: NavbarItems[] = [
  {title: NavbarItem.TRICS, eng: 'tracks'},
  {title: NavbarItem.ALBUMS, eng: 'alboms'},
  {title: NavbarItem.NEWS, eng: 'news'},
  {title: NavbarItem.GENRES, eng: 'genre'},
  {title: NavbarItem.ARTISTS, eng: 'artists'},
]
const renderMusic = (title: NavbarItem) => {
  useMusicStore().changeMusic(title)
}
</script>

<style scoped>

</style>