<template>
    <tbody class="bg-white">
      <tr class="hover:bg-gray-50 active:bg-gray-100" :class="{'bg-gray-100': data.id === audioId}"
      @click="$emit('showAudio', data), highlightRow(data.id)">
        <td class="px-4 py-4 flex">
          <img :src="data.album.cover_small" alt="img album" class="size-10">
          <div class="ml-6 content-center">{{ data.title }}</div>
        </td>
        <td class="px-4 py-4">{{ data.artist.name }}</td>
        <td class="px-4 py-4">{{ data.album.title }}</td>
        <td class="px-4 py-4">{{ time }}</td>
        <td class="px-4 py-4">{{ data.rank }}</td>
      </tr>
    </tbody>
</template>
<script lang="ts" setup>
import type { SearchResponseT } from '@/types/music';
import { ref } from 'vue';


const props = defineProps<{
  data: SearchResponseT
}>()

// Time
const getSecond = () => {
  return (props.data.duration % 60).toString().length === 1 ? '0' + (props.data.duration % 60).toString() : props.data.duration % 60;
}
const time = `${Math.floor(props.data.duration / 60)}:${getSecond()}`

// HilightRow
const audioId = ref<number>()
const highlightRow = (id: number) => {
  audioId.value = id
}
</script>