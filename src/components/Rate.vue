<template>
  <a-rate v-model:value="value" allow-half class=""/>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const value = ref<number>(2.5);
</script>