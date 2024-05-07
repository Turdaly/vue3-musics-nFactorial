<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-typography-paragraph class="flex justify-center text-base mt-3">Онлайн песни</a-typography-paragraph>
        <a-menu-item  v-for="item in navbarItems" :key="item.title" @click="$emit('changeMusic', item.title)">
          {{ item.title }}
        </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">

const navbarItems = [
  {title: 'Треки', eng: 'tracks'},
  {title: 'Альбомы', eng: 'alboms'},
  {title: 'Новинки', eng: 'news'},
  {title: 'Жанры', eng: 'genre'},
  {title: 'Исполнители', eng: 'artists'},
]
</script>

<style scoped>

</style>