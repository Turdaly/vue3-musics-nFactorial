<script setup lang="ts">
import type { CredentialResponse } from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  console.log("Access Token", response);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>