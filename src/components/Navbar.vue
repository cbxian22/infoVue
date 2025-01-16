<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { NMenu } from "naive-ui";

const router = useRouter();
const options = ref([
  { label: "Home", key: "/" },
  { label: "About", key: "/about" },
  { label: "Projects", key: "/portfolio" },
  { label: "Contact", key: "/contact" },
]);

const handleMenuClick = (key) => {
  router.push(key);
};

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
//export * from './styles';  >
//export { menuDark } from './menu/styles';  >
//export type { MenuTheme, MenuThemeVars } from './light';  >

const menuThemeOverrides = {
  // itemTextColor: "blue",
  itemHeight: "4rem",
};
defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <n-menu
    :style="style"
    :options="options"
    mode="horizontal"
    @update:value="handleMenuClick"
    default-value="/"
    :theme-overrides="menuThemeOverrides"
    responsive
  />
</template>

<style></style>
