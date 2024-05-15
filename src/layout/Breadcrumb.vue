<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>Musics</a-breadcrumb-item>
    <a-breadcrumb-item>{{ title }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

const { title } = storeToRefs(useSearchStore())
</script>

