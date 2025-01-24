<script setup>
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { NCard, NCarousel, NIcon } from "naive-ui";
</script>
<template>
  <n-card title="關於我" bordered>
    <p>這是一個展示個人簡歷與興趣的頁面。</p>
  </n-card>
  <n-carousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    />
    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <n-icon><ArrowBack /></n-icon>
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <n-icon><ArrowForward /></n-icon>
        </button>
      </div>
    </template>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
</template>
<!-- 
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style> -->
<style scoped>
::v-deep(.n-card--bordered) {
  border-radius: 10px !important;
  box-shadow: 0px 2px 4px rgb(61, 61, 102, 0.2);
}

.box {
  transform: translateY(15%);
  height: 100%;
  width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .box {
    width: 100%; /* 小螢幕時寬度調整為100% */
    padding: 0 10px; /* 增加左右內間距避免貼邊 */
  }
}

::v-deep(.n-card-header__main) {
  text-align: center;
}
::v-deep(.n-form-item-label__text) {
  border-left: 8px solid #abd6f5;
  padding-left: 5px;
}
::v-deep(.n-form-item-label__asterisk) {
  display: none;
}
.n-input {
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgb(61, 61, 102, 0.2);
  border: none;
}
::v-deep(.n-form-item-blank) {
  justify-content: center;
}
.n-button {
  padding: 25px;
  background: #93ccf5;
  border-radius: 5px;
}
</style>
