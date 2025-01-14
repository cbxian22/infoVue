<script setup>
import Navbar from "./components/Navbar.vue";
console.log("App component is loaded");
import { NConfigProvider } from "naive-ui";
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <div>
        <Navbar />
        <router-view />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
