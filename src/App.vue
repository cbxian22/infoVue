<script setup>
console.log("App component is loaded");
import { NConfigProvider, NMessageProvider } from "naive-ui";
import Navbar from "./components/Navbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const navbarStyle = computed(() => {
  if (route.name === "home") {
    return {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    };
  } else {
    return {
      position: "relative",
      backgroundColor: "transparent",
    };
  }
});
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <div>
        <Navbar :style="navbarStyle" />
        <router-view />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
