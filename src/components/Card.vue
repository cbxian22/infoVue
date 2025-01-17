<script setup>
import { NCard } from "naive-ui";
import { ref } from "vue";
import imagePath from "@/assets/card.png";
const imgSet = ref("imgSet");
</script>

<template>
  <n-card>
    <div class="cen">
      <img :src="imagePath" alt="我的頭貼" :class="imgSet" class="cen" />
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
.card {
  box-shadow: 0px 2px 10px rgb(61, 61, 102, 0.5);
}
.cen {
  text-align: center;
}
.imgSet {
  width: 100px;
  border-radius: 50%;
}
</style>
