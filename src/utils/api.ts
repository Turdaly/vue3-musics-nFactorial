import axios from "axios";
import type { Ref } from "vue";

export const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com'
const options = {
  method: "GET",
  url: `${API_URL}/search`,
  params: { q: "" },
  headers: {
    "X-RapidAPI-Key": "7b347da72dmsha047ae5e1a35c7ap1715a4jsneedd69536737",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
export async function useSearch(search: string){
    try {
      options.params.q = search;
      const response = (await axios.request(options)).data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
}