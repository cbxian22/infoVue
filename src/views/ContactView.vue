<script setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";
import { NForm, NFormItem, NInput, NButton, NCard, NSpin } from "naive-ui";
import axios from "axios";

const formRef = ref(null);
const message = useMessage();

const formValue = ref({
  user: {
    name: "",
    email: "",
    message: "",
  },
});

const rules = {
  user: {
    name: {
      required: true,
      message: "請輸入姓名",
      trigger: "blur",
    },
    email: {
      required: true,
      message: "請輸入Email",
      trigger: ["input", "blur"],
    },
    message: {
      required: true,
      message: "請輸入訊息",
      trigger: ["input"],
    },
  },
};

const loading = ref(false);

const handleValidateClick = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      //
      loading.value = true;
      axios
        .post(
          "https://infoserver-v0eq.onrender.com/api/submit",
          formValue.value
        )
        .then((response) => {
          message.success("提交成功！");
          formValue.value = {
            user: {
              name: "",
              email: "",
              message: "",
            },
          }; // 手动清空表单内容
        })
        .catch((error) => {
          message.error("提交失敗，請再試一次");
          console.error(error);
        })
        .finally(() => {
          loading.value = false; // 请求完成后，停止加载
        });
    } else {
      console.log(errors);
      message.error("提交失敗，請再試一次");
    }
  });
};
</script>

<template>
  <div>
    <n-card title="聯絡我" bordered>
      <n-spin :show="loading">
        <n-form
          ref="formRef"
          :label-width="80"
          :model="formValue"
          :rules="rules"
        >
          <n-form-item label="姓名" path="user.name">
            <n-input
              v-model:value="formValue.user.name"
              placeholder="請輸入您的姓名"
            />
          </n-form-item>
          <n-form-item label="Email" path="user.email">
            <n-input
              v-model:value="formValue.user.email"
              placeholder="請輸入您的 Email"
            />
          </n-form-item>
          <n-form-item label="訊息" path="user.message">
            <n-input
              type="textarea"
              v-model:value="formValue.user.message"
              placeholder="請輸入您的訊息"
            />
          </n-form-item>
          <n-form-item>
            <n-button
              attr-type="button"
              :loading="loading"
              @click="handleValidateClick"
            >
              提交
            </n-button>
          </n-form-item>
        </n-form>
      </n-spin>
    </n-card>
  </div>
</template>

<style scoped></style>
