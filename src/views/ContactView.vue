<script setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";
import { NForm, NFormItem, NInput, NButton, NCard, NSpin } from "naive-ui";
import axios from "axios";

const loading = ref(false);
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
    name: [
      {
        required: true,
        message: "請輸入姓名",
        trigger: "submit",
      },
      {
        validator: (rule, value) => {
          if (!value) return true; // 如果為空交給 required 檢查
          if (value.trim().length < 2) {
            return new Error("姓名至少需要2個字");
          }
          return true;
        },
        trigger: "blur",
      },
    ],
    email: [
      {
        required: true,
        message: "請輸入Email",
        trigger: "submit",
      },
      {
        validator: (rule, value) => {
          if (!value) return true;
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            return new Error("請輸入有效的 Email");
          }
          return true;
        },
        trigger: "blur",
      },
    ],
    message: [
      {
        required: true,
        message: "請輸入訊息",
        trigger: "submit",
      },
      {
        validator: (rule, value) => {
          if (!value) return true;
          if (value.trim().length < 10) {
            return new Error("訊息至少需要10個字");
          }
          return true;
        },
        trigger: "blur",
      },
    ],
  },
};

const handleValidateClick = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      // 啟動圓圈圈
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
          };
        })
        .catch((error) => {
          message.error("提交失敗，請再試一次");
          console.error(error);
        })
        .finally(() => {
          loading.value = false;
        });
    } else {
      console.log(errors);
      message.error("表單有誤，請檢查輸入內容");
    }
  });
};
</script>

<template>
  <div class="box">
    <n-card title="聯絡我" bordered>
      <n-spin
        description="Please wait, information is being uploaded..."
        :show="loading"
      >
        <n-form
          ref="formRef"
          :label-width="80"
          :model="formValue"
          :rules="rules"
        >
          <n-form-item label="姓名" path="user.name">
            <n-input
              v-model:value="formValue.user.name"
              placeholder="請輸入姓名"
            />
          </n-form-item>
          <n-form-item label="Email" path="user.email">
            <n-input
              v-model:value="formValue.user.email"
              placeholder="請輸入Gmail、yahoo信箱網址"
            />
          </n-form-item>
          <n-form-item label="訊息" path="user.message">
            <n-input
              type="textarea"
              v-model:value="formValue.user.message"
              placeholder="請輸入留言內容"
            />
          </n-form-item>
          <n-form-item>
            <n-button attr-type="button" @click.prevent="handleValidateClick">
              提交
            </n-button>
          </n-form-item>
        </n-form>
      </n-spin>
    </n-card>
  </div>
</template>

<style scoped>
/* 禁止水平與垂直滾動 */
html,
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100%; /* 確保滿屏 */
}

/* 表單容器 */
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 高度為視窗高度 */
  width: 100%; /* 寬度為視窗寬度 */
  padding: 10px; /* 避免貼邊 */
  box-sizing: border-box; /* 計算寬度包含 padding */
}

/* Naive UI 卡片樣式調整 */
::v-deep(.n-card--bordered) {
  border-radius: 10px !important;
  box-shadow: 0px 2px 4px rgb(61, 61, 102, 0.2);
  width: 100%; /* 確保卡片自適應容器 */
  max-width: 600px; /* 最大寬度控制 */
}

::v-deep(.n-card-header__main) {
  text-align: center;
}

/* 表單標籤樣式 */
::v-deep(.n-form-item-label__text) {
  border-left: 8px solid #abd6f5;
  padding-left: 5px;
}

::v-deep(.n-form-item-label__asterisk) {
  display: none;
}

/* 輸入框樣式 */
.n-input {
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgb(61, 61, 102, 0.2);
  border: none;
}

/* 表單提交按鈕樣式 */
.n-button {
  padding: 25px;
  background: #93ccf5;
  border-radius: 5px;
}
</style>
