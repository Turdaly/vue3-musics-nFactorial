import { defineStore } from "pinia";
import { ref } from "vue";
import { useSearch } from "@/utils/api";
import type { SearchResponseT } from "@/types/music";

export const useSearchStore = defineStore('searchStore', () => {
  const title = ref("");
  const search = ref<string>("Eminem");
  const searchResponse = ref<Array<SearchResponseT>>([]);
  const fetchMusic = async () => {
    searchResponse.value = await useSearch(search.value)
    console.log(searchResponse.value)
    title.value = search.value.charAt(0).toUpperCase() + search.value.slice(1);
  }

  return {
    title,
    search,
    searchResponse,
    fetchMusic
  }
})