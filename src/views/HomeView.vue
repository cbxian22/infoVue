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

<style scoped>
.imgSize {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  object-position: top;
}
.card {
  position: absolute;
  left: 33%;
  top: 15%;
  transform: translate(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  padding: 1.8rem;
  max-width: 30%;
  border-radius: 16px;
  min-width: 350px;
  max-height: 80%;
  overflow: hidden;
}
@media (max-width: 768px) {
  .card {
    max-width: 60%;
    padding: 1.2rem;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
  }
}
</style>
