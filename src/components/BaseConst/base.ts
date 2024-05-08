import axios from "axios";

export const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com'
export const currentUrl = window.location.pathname

export const fetchArtist = async () => {
  try {
    const response = await axios.get('https://api.music.apple.com/v1/me/library/artists/');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}