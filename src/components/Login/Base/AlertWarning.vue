<template>
 <transition name="alert">
    <a-space direction="vertical">
      <a-alert
        v-if="showAlertWarning"
        message="Error Warning"
        description="Указанные данные есть в базе данных, придумайте другой логин"
        type="warning"
        closable
        class="fixed top-0 -translate-x-1/2 pb-14 w-2/6"
        @close="onCloseWarning"
      />
    </a-space>
  </transition>
</template>

<script setup lang="ts">
import { showAlertWarning, onCloseWarning } from '../loginConst';


</script>

<style scoped>
.alert-leave-to,
.alert-enter-from {
  opacity: 0;

}

.alert-leave-from,
.alert-enter-to {
  opacity: 1;
}

.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}
</style>