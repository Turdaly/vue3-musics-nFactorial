import { defineStore } from 'pinia'
import { computed, ref, watch, } from 'vue'
import type { Account } from "@/types/account"

export const useAccountStore = defineStore('accountStore', () => {
  const account = ref<Account>({})

  const isAccountEmpty = computed(() => {
    return Object.keys(account.value).length === 0
  })

  const setAccount = (data: object) => {
    account.value = data
  }

  const accountInLocalStorage = localStorage.getItem('account')
  if(accountInLocalStorage){
    account.value = JSON.parse(accountInLocalStorage)._value
  }
  watch(() => account, (state) => {
    console.log(account.value)
    localStorage.setItem("account", JSON.stringify(state))
  }, {deep: true})
  return {
    account,
    setAccount,
    isAccountEmpty,
    watch,
  }
})