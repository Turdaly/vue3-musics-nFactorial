<template>
  <FormField :buttonAction="buttonActionRegistration">
    <template #button-text>
      Зарегистрироваться
    </template>
  </FormField>
</template>
<script lang="ts" setup>
import FormField from './Base/FormField.vue';

// const
import { buttonActionRegistration } from "@/components/Login/loginConst"

</script>

