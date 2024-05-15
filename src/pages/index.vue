<template>
  <a-layout>
    <Navbar />
    <a-layout>
      <Sidebar @change-music="changeMusic" />
      <a-layout style="padding: 0 24px 24px">
        <Breadcrumb />
        <Content />
      </a-layout>
    </a-layout>
    <AudioPlayer  v-if="showAudio && audio" :audio="audio"/>
  </a-layout>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { Modal } from "ant-design-vue";
// Component
import Sidebar from "@/layout/Sidebar.vue";
import Navbar from "@/layout/Navbar.vue";
import Breadcrumb from "@/layout/Breadcrumb.vue";
import Content from "@/layout/Content.vue"
import AudioPlayer from "@/components/AudioPlayer.vue";

// Store
import { useAccountStore } from "@/stores/AccoutStore";
import { useSearchStore } from "@/stores/search";
import { useMusicStore } from "@/stores/music";
import { useAudioStore } from "@/stores/audio";
import { storeToRefs } from "pinia";
const accountStore = useAccountStore();
const { fetchMusic } = useSearchStore()
const { changeMusic } = useMusicStore()
const { audio, showAudio } = storeToRefs(useAudioStore())

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
