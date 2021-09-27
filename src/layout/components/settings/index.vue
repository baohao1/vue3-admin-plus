<template>
  <div class="set-box">
    <el-dropdown trigger="click" @visible-change="changeVisi">
      <div>
        <el-avatar :src="avatarUrl" shape="square" :size="40"></el-avatar>
        <i :class="visible ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
      </div>
      <template #dropdown>
        <el-dropdown-item>个人</el-dropdown-item>
        <el-dropdown-item @click="outLogin">退出</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const setData = reactive({
      visible: false,
      avatarUrl: require("../../../assets/avatar.gif"),
    });
    const changeVisi = (value: boolean) => {
      setData.visible = value;
    };
    const methods = reactive({
      outLogin: () => {
        store.dispatch("user/OutLogin").then((res) => {
          console.log(res);
          ElMessage.success("退出登录");
          router.push("/login");
        });
      },
    });
    return {
      ...toRefs(setData),
      ...toRefs(methods),
      changeVisi,
    };
  },
});
</script>

<style lang="scss" scoped>
.set-box {
  float: right;
  width: 70px;
  padding-top: 5px;
  i {
    margin-left: 5px;
    color: #7d7d7d;
  }
}
</style>
