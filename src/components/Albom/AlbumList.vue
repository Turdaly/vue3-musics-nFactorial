<template>
  <a-card hoverable class="w-60" @click="$emit('sendMusic', data), saveAlbumTitle()">
    <template #cover>
      <img
        alt="image of album"
        :src="data.album.cover"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta :title="data.album.title" :description="disciption">
      <template #avatar>
        <a-avatar :src="data.artist.picture" />
      </template>
    </a-card-meta>
  </a-card>
</template>
<script lang="ts" setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import type { SearchResponseT } from '@/types/music';
import { ref } from 'vue';
import { albomTitle } from "@/components/Albom/albom";

const props = defineProps<{
  data: SearchResponseT
}>()
const disciption = ref<string>("")
disciption.value = `От ${props.data.artist.name}`

const saveAlbumTitle = () => {
  albomTitle.value = props.data.album.title
}
</script>