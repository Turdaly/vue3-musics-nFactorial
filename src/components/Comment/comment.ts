import relativeTime from 'dayjs/plugin/relativeTime';
import axios from "axios"
import dayjs from 'dayjs';
import { ref } from 'vue';
import type { CommentArray, Comment } from "@/components/Comment/types/types"
import { useAccountStore } from '@/stores/AccoutStore';
import { albomTitle } from '@/components/Albom/albom';
export const url = 'https://50c5b6adc91b4d21.mokky.dev/comments'

// Store
const accountStore = useAccountStore()

// Requests
export const fetchComment = async (): Promise<Comment[]> => {
  try{
    const response: CommentArray = await axios.get(`${url}`)
    console.log("comment response.data:",response.data)
    return Array.isArray(response.data) ? response.data : [];
  } catch(err){
    console.log(err)
  }
}
dayjs.extend(relativeTime);
// ----------------didn't finish ------------------------------
export const postComment = async () => {
  try {
    await axios.post(`${url}`, {
      username: accountStore.account.username,
      albom_title: albomTitle._value,
      content: value.value,
      datetime: 'a few seconds ago',
    })
    comments.value = await fetchComment()
  }catch(err){
    console.log(err)
  }
}

// Comment
export const comments = ref<Comment[]>(await fetchComment());
export const submitting = ref<boolean>(false);
export const value = ref<string>(''); // Комментарий Ползьователя
export const handleSubmit = async () => {
  if (!value.value) {
    return;
  }
  submitting.value = true;
  setTimeout( async () => {
    await postComment()
    submitting.value = false;
    value.value = '';
  }, 1000);
};
