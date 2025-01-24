<script setup>
import Card from "../components/Card.vue";
import imagePath from "@/assets/cover.jpeg";
import { ref } from "vue";
const imgSize = ref("imgSize");
</script>

<template>
  <div>
    <img :src="imagePath" alt="描述文本" :class="imgSize" />
    <Card class="card" />
  </div>
</template>

<!-- <style scoped>
.imgSize {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  object-position: top;
}
.card {
  position: absolute;
  left: 18%;
  top: 55%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.85);
  box-sizing: border-box;
  padding: 1.8rem;
  max-width: 30%;
  border-radius: 16px;
  border: none;
  min-width: 350px;
  max-height: 80%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .card {
    max-width: 60%;
    padding: 1.2rem;
    left: 20%;
    top: 50%;
    transform: translateY(-50%, -50%);
  }
}
</style> -->
<style scoped>
.imgSize {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 100% top; /* 初始將人像靠右顯示 */
}

@media (max-width: 768px) {
  .imgSize {
    object-position: 80% top; /* 在小螢幕時微調，顯示更多右側內容 */
  }
}

.card {
  position: absolute;
  left: 18%;
  top: 55%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.85);
  box-sizing: border-box;
  padding: 1.8rem;
  max-width: 30%;
  border-radius: 16px;
  border: none;
  min-width: 350px;
  max-height: 80%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
