import { ref } from "vue";
import { defineStore } from "pinia";
import { NavbarItem } from "@/types/navbar";
import type { SearchResponseT } from "@/types/music";
import { useSearchStore } from "./search";
export const useMusicStore = defineStore('musicStore', () => {
  const music = ref<SearchResponseT>();
  const navbarItem = ref<NavbarItem>(NavbarItem.TRICS);
  const changeMusic = async (title: NavbarItem) => {
    navbarItem.value = title;
    useSearchStore().fetchMusic()
  };
  const setMusic = (data: SearchResponseT) => {
    music.value = data;
    navbarItem.value = NavbarItem.ALBOMITEM;
  };

  return {
    music,
    navbarItem,
    changeMusic,
    setMusic
  }
})