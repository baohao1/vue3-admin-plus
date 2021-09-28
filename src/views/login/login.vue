<template>
  <div class="login-box">
    <div class="login-pic"></div>
    <el-form ref="form" class="login-form" :model="formData" label-width="80px">
      <el-form-item label="用户名">
        <el-input ref="UserNumberRef" v-model="formData.userNumber"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          ref="PassWordRef"
          show-password
          v-model="formData.passWord"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submit-btn" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
// import router from "@/router";
import { useStore } from "vuex";
import { setToken } from "@/utils/auto";
// import routeMenu from "@/api/menu";
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const formData = reactive({
      userNumber: "",
      passWord: "",
    });

    const methods = reactive({
      onSubmit: () => {
        store.dispatch("user/LoginByUsername", formData).then((res) => {
          if (res.retState === "1") {
            setToken(res.token);
            store.state.user.token = res.token;
            ElMessage.success("登录成功");
            // router.addRoute(route: routeMenu[0]): () => void;
            router.push("/");
          }
        });
      },
    });
    return {
      formData,
      ...toRefs(methods),
    };
  },
});
</script>

<style lang="scss" scoped>
.login-pic {
  width: 520px;
  margin: 0 auto;
  height: 100px;
}
.login-form {
  position: relative;
  width: 420px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
.submit-btn {
  width: 200px;
}
</style>
