import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist", // 指定构建输出目录
  },
});

// 當你在瀏覽器輸入 /about 或 /contact 時，伺服器會以為你在請求一個檔案，
// 比如 /about.html 或 /contact.html。但這些檔案其實不存在，所以會出現 404 錯誤。
// 加入 vercel.json 的目的是告訴伺服器：
// 「不管用戶請求什麼路徑，通通回傳 index.html。」
// 這樣，瀏覽器就會載入你的主頁，然後由 Vue Router 負責處理路徑（例如 /about 或 /contact），顯示正確的畫面。
// 換句話說，vercel.json 是在幫助伺服器「別迷路，把所有路徑交給前端處理！」

// 故創建vercel.json
