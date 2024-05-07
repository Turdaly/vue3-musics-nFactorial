<template>
  <AlertError />
  <AlertWarning />
  <AlertSuccess />
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"

    class="w-2/5 mr-48 mt-10"
  >
    <div class="ml-52 w-full">
      <p class="mb-2 text-base">
        <slot name="text-input-username">Логин</slot>
      </p>
      <a-form-item
      name="username"
      :rules="[{ required: true, message: 'Пожалуйста, введите свой логин!' }]"
      >
      <a-input v-model:value.trim="formState.username" />
      </a-form-item>
      <p class="mb-2 text-base">
        <slot name="text-input-password">Пароль</slot>
      </p>
      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]"
      >
        <a-input-password v-model:value.trim="formState.password" />
      </a-form-item>
      <slot name="add-input-field"></slot>
    </div>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button class="w-full ml-1 pb-10 pt-2 text-lg bg-sky-200 hover:bg-sky-300 transition-colors"
      html-type="submit"
      @click="chooseButtonAction">
        <slot name="button-text">Войти</slot>
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import AlertError from "@/components/Login/Base/AlertError.vue"
import AlertWarning from "@/components/Login/Base/AlertWarning.vue"
import AlertSuccess from "@/components/Login/Base/AlertSuccess.vue"
// const
import { formState, registerAccount, routeLogin } from "@/components/Login/loginConst"
type TButtonAction = 'routeLogin' | 'registerAccount'

const props = defineProps<{
  buttonAction: TButtonAction
}>()

const chooseButtonAction = async () => {
  if(props.buttonAction === 'routeLogin') {
    await routeLogin()
  }
  else if (props.buttonAction === 'registerAccount') {
    await registerAccount()
  }
}
</script>
