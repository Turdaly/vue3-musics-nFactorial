import { defineStore } from "pinia";
import { ref } from "vue";
import type { SearchResponseT } from "@/types/music";
export const useAudioStore = defineStore('audioStore', () => {
  const audio = ref<SearchResponseT>();
  const showAudio = ref<boolean>(false);
  const showModal = (data: SearchResponseT) => {
    audio.value = data;
    showAudio.value = true;
  };

  return {
    audio,
    showAudio,
    showModal
  }
})