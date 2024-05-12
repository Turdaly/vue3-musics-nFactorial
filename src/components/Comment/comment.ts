import axios from "axios"
import { ref } from 'vue';
import type { CommentArray, Comment } from "@/components/Comment/types/types"
import { useAccountStore } from '@/stores/AccoutStore';
import { albomTitle } from '@/components/Albom/albom';
export const url = 'https://50c5b6adc91b4d21.mokky.dev/comments'

// Store
const accountStore = useAccountStore()

// Requests
export const fetchComment = async () => {
  try{
    const response: CommentArray = await axios.get(`${url}`)
    return Array.isArray(response.data) ? response.data : [];
  } catch(err){
    console.log(err)
  }
}
// ----------------didn't finish ------------------------------
export const postComment = async () => {
  try {
    getNow()
    await axios.post(`${url}`, {
      username: accountStore.account.username,
      albom_title: albomTitle.value,
      content: value.value,
      datetime: timestamp.value,
    })
    // Дополнительные действия
    const data = await fetchComment()
    if(data) {
      comments.value = data
    }
    currentComment.value = comments.value
    setCurrentComment()
  }catch(err){
    console.log(err)
  }
}

// Comment
// Сайт алғаш главный беттен ашылған кезде запрос жасап барлық комментарийлерді алып алады
export const comments = ref<Comment[]>([]);
export const currentComment = ref<Comment[]>([])

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

export const setCurrentComment = () => {
  currentComment.value = comments.value.filter(comment => comment.albom_title === albomTitle.value)
}
// Time
const timestamp = ref<string>('')
const getNow = () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  const time = today.toLocaleTimeString();
  const dateTime = date +' '+ time;
  timestamp.value = dateTime;
}