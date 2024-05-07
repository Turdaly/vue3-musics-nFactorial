import { reactive, ref, watch } from 'vue';
import type { Account, FormState, AccountArray } from "@/types/login"

import axios from 'axios';
import router from '@/router'
import { useAccountStore } from '@/stores/AccoutStore';

// Store
const accountStore = useAccountStore()

// common
export const API_URL = 'https://50c5b6adc91b4d21.mokky.dev'
export const formState = reactive<FormState>({
  username: '',
  password: '',
});
// login
export const hasAccount = ref<boolean>(false)

// ButtonActions
export const buttonActionLogin = 'routeLogin'
export const buttonActionRegistration = 'registerAccount'

// Alert
export const showAlertError = ref<boolean>(false)
export const showAlertWarning = ref<boolean>(false)
export const showAlertSuccess = ref<boolean>(false)
export const onCloseError = () => {
  showAlertError.value = false
};
export const onCloseWarning = () => {
  showAlertWarning.value = false
};
export const onCloseSuccess = () => {
  showAlertSuccess.value = false
};
export const onCloseAllAlert = () => {
  showAlertError.value = false
  showAlertWarning.value = false
  showAlertSuccess.value = false
};


// Methods
export const registerAccount = async () => {
  try {
    await checkAccountRegistration()
    if(formState.username && formState.password){
      if(!hasAccount.value){
        const response = await axios.post(`${API_URL}/accounts`, {
          username: formState.username,
          password: formState.password
        })
        showAlertSuccess.value = true
        console.log("data",response.data)
        if(response.data) {
          showAlertWarning.value = false
          router.push({ name: 'login'})
        }
      }
      else {
        showAlertWarning.value = true
      }
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
        hasAccount.value = true

      }
    });
  } catch(err){
    console.log(err)
  }
}

export const routeLogin = async () => {
  await checkAccount()
  if(hasAccount.value === true) {
    accountStore.setAccount(formState)

    router.push({name: 'home'})
  } else {
    showAlertError.value = true
  }
  hasAccount.value = false
}

const checkAccountRegistration = async () => {
  try {
    let sum = 0
    const response: AccountArray = await axios.get(`${API_URL}/accounts`)
    response.data.forEach(element => {
      sum += 1
      if(formState.username === element.username){
        sum -= 1
        hasAccount.value = true
      }
    });
    sum === response.data.length ? hasAccount.value = false : null
  } catch(err){
    console.log(err)
  }
}

watch(hasAccount, () => {
  console.log(hasAccount.value)
})