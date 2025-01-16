<script setup>
import { NCard } from "naive-ui";
import { ref } from "vue";
import imagePath from "@/assets/card.png";
const imgSize = ref("imgSize");
</script>

<template>
  <n-card>
    <div class="cen">
      <img :src="imagePath" alt="描述文本" :class="imgSize" class="cen" />
    </div>
    <h2 class="cen">
      Hey, I’m Xian,<br />
      a motivated programming learner.
    </h2>
    <p>
      I’m interested in expressing the things I love through web development.
      <br />
      <br />
      Apart from programming, I enjoy freediving, playing badminton, and
      photography. If you’re a coffee lover, feel free to contact me — I’d be
      happy to brew a cup of pour-over coffee and share it with you.
    </p>
  </n-card>
</template>

<style scoped>
.cen {
  text-align: center;
}
.imgSize {
  width: 100px !important;
  height: auto;
  border-radius: 50%;
}
.n-card {
  max-width: 350px;
}
</style>
