import axios from 'axios'

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Option } from '@/types/option'

export const useOptionStore = defineStore('options', () => {
  const url_name = ref<string>("search")
  const options: Option = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/`,
    headers: {
      'X-RapidAPI-Key': '7b347da72dmsha047ae5e1a35c7ap1715a4jsneedd69536737',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  const addParamsToOptions = (str: string) => {
    options.params = {
      q: str
    }
  }

  const fetchRequest = async (url?: string) => {
    options.url += url_name.value
    const response = await axios.request(options);
    console.log(options)
    return response.data
  }
  return { addParamsToOptions, fetchRequest }
})
