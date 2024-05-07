import { reactive, ref } from 'vue';
import type { FormState } from "@/types/login"

import axios from 'axios';
import router from '@/router'

import type { AccountArray } from "@/types/login"

// common
export const API_URL = 'https://50c5b6adc91b4d21.mokky.dev'
export const formState = reactive<FormState>({
  username: '',
  password: '',
});

// login
export const isRightAccount = ref<boolean>(false)
export const showAlert = ref<boolean>(false)
export const currentAccountName = ref<string>('')

// ButtonActions
export const buttonActionLogin = 'checkAccount'
export const buttonActionRegistration = 'registerAccount'

// alert

// Methods
export const registerAccount = async () => {
  try {
    if(formState.username && formState.password){
      const response = await axios.post(`${API_URL}/accounts`, {

        username: formState.username,
        password: formState.password
      })
      response.data ? router.push({ name: 'login'}) : null
    }
  } catch(err){
    console.log(err)
  }
}

export const checkAccount = async () => {
  try {
    const response: AccountArray = await axios.get(`${API_URL}/accounts`)
    response.data.forEach(element => {
      if(formState.username === element.username && formState.password === element.password){
        console.log(formState)
        isRightAccount.value = true
        currentAccountName.value = element.username
      }
    });
    isRightAccount.value === true ? router.push({name: 'home'}) : showAlert.value = true
  } catch(err){
    console.log(err)
  }
}

// Alert
export const onClose = () => {
  showAlert.value = false
};