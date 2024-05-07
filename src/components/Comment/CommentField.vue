<template>
  <a-list
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.username"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </template>
  </a-list>
  <a-comment v-if="!accountStore.isAccountEmpty">
    <template #avatar>
      <a-avatar src="https://joeschmoe.io/api/v1/random" :alt="accountStore.account.username" />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea v-model:value="value" :rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          Add Comment
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>
<script lang="ts" setup>
import { handleSubmit, submitting, value, comments } from "@/components/Comment/comment"
import { useAccountStore } from "@/stores/AccoutStore"
const accountStore = useAccountStore()


</script>

