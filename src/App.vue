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

const loading = ref(true);
// 在首次加载时显示加载动画
onMounted(() => {
  loading.value = true;
  nextTick(() => {
    loading.value = false; // 页面加载完成后停止加载动画
  });
});

// 在每次路由切换时显示加载动画
router.beforeEach(() => {
  loading.value = true;
});

router.afterEach(() => {
  nextTick(() => {
    loading.value = false; // 路由切换完成后停止加载动画
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
