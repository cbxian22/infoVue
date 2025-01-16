<script setup>
import { NConfigProvider, NMessageProvider, NSpin } from "naive-ui";
import Navbar from "./components/Navbar.vue";
import { computed, onMounted, ref, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const navbarStyle = computed(() => {
  if (route.name === "home") {
    return {
      position: "absolute",
      // top: "0",
      // left: "0",
      // right: "0",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    };
  } else {
    return {
      position: "relative",
      backgroundColor: "transparent",
    };
  }
});

const loading = ref(true);

onMounted(() => {
  loading.value = true;
  nextTick(() => {
    loading.value = false;
  });
});

router.beforeEach(() => {
  loading.value = true;
});

router.afterEach(() => {
  nextTick(() => {
    loading.value = false;
  });
});
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <div>
        <div v-if="loading">
          <n-spin class="cen" size="large" description="loading..." />
        </div>
        <div v-else>
          <Navbar :style="navbarStyle" />
          <router-view />
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.cen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
