<script setup>
import { ref, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NMenu } from "naive-ui";

const router = useRouter();
const route = useRoute();
const activeKey = ref(route.path); // 設定當前活躍的路徑
const options = ref([
  { label: "Home", key: "/" },
  { label: "About", key: "/about" },
  { label: "Projects", key: "/portfolio" },
  { label: "Contact", key: "/contact" },
]);

const handleMenuClick = (key) => {
  router.push(key);
  activeKey.value = key;
};

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
//export * from './styles';  >
//export { menuDark } from './menu/styles';  >
//export type { MenuTheme, MenuThemeVars } from './light';  >

const menuThemeOverrides = {
  itemTextColor: "#3D3D66",
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
    :value="activeKey"
    :style="style"
    :options="options"
    mode="horizontal"
    @update:value="handleMenuClick"
    :theme-overrides="menuThemeOverrides"
    responsive
  />
</template>

<style>
.n-menu {
  box-shadow: 0px 2px 20px rgb(61, 61, 102, 0.2);
  z-index: 10;
}
.v-overflow {
  justify-content: center;
}

/*  以下是發現怎麼更改預設，以此註解 */
.n-menu-item-content-header {
  --n-item-text-color-hover-horizontal: #007fbf;
  --n-item-text-color-active-hover-horizontal: #007fbf;
}
.n-menu.n-menu--horizontal
  .n-menu-item-content.n-menu-item-content--selected
  .n-menu-item-content-header {
  color: #007fbf;
}
</style>
