<script setup>
import { ref, reactive } from "vue";
import { NCard, NForm, NFormItem, NInput, NButton } from "naive-ui";
const form = reactive({
  name: "",
  email: "",
  message: "",
});
const submitForm = () => {
  console.log("提交表單", form);
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<template>
  <div>
    <n-card title="聯絡我" bordered>
      <n-form :model="form" label-width="80">
        <n-form-item label="姓名" required>
          <n-input v-model="form.name" placeholder="請輸入您的姓名" />
        </n-form-item>
        <n-form-item label="Email" required>
          <n-input v-model="form.email" placeholder="請輸入您的 Email" />
        </n-form-item>
        <n-form-item label="訊息" required>
          <n-input
            type="textarea"
            v-model="form.message"
            placeholder="請輸入您的訊息"
          />
        </n-form-item>
        <n-form-item>
          <n-button @click="submitForm" type="primary">提交</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped></style>
