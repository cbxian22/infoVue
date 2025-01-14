<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NMenu } from "naive-ui";

const router = useRouter();

const menuOptions = ref([
  { label: "首頁", key: "/" },
  { label: "關於我", key: "/about" },
  { label: "作品集", key: "/portfolio" },
  { label: "聯絡", key: "/contact" },
]);

const handleMenuClick = (key) => {
  router.push(key);
};
</script>

<template>
  <div class="navbar">
    <n-menu
      :options="menuOptions"
      mode="horizontal"
      @update:value="handleMenuClick"
    />
  </div>
</template>

<style scoped>
.navbar {
  background: #f5f5f5;
  padding: 1rem;
}
</style>
