<script setup>
import { ref } from "vue";
import { NCard, NGrid, NGi } from "naive-ui";

const projects = ref([
  { id: 1, title: "專案一", description: "專案一的描述" },
  { id: 2, title: "專案二", description: "專案二的描述" },
  { id: 3, title: "專案三", description: "專案三的描述" },
  { id: 4, title: "專案四", description: "專案四的描述" },
]);
</script>

<template>
  <div>
    <n-card title="我的作品集" bordered>
      <n-grid x-gap="10" :y-gap="10" :cols="2">
        <n-gi class="green" v-for="project in projects" :key="project.id">
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </n-gi>
      </n-grid>
    </n-card>
  </div>

  <!-- <n-grid x-gap="12" :cols="4">
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
  </n-grid> -->
</template>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
