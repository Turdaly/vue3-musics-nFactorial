<template>
  <AudioPlayer class="fixed bottom-0 left-0 w-full " :option="{
       src: `${audio.preview}`,
       title: `${audio.title}`,
       coverImage: `${audio.album.cover}`,
  }"/>
</template>

<script setup lang="ts">
// @ts-ignore
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import type { SearchResponseT } from '@/types/music';
defineProps<{
  audio: SearchResponseT
}>()
</script>

<style scoped>

</style>