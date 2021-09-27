<template>
  <div>
    <div class="breadcrumb-main">
      <i
        :class="showSide ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        @click="changeSideBar"
      ></i>
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
      <Settings />
    </div>
    <div class="tag-main">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        size="mini"
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { Settings } from "../../components";
import { useStore } from "vuex";
export default defineComponent({
  name: "tags",
  components: {
    Settings,
  },
  setup() {
    const setData = reactive({
      showSide: true,
      dynamicTags: ["标签一", "标签二", "标签三"],
    });
    const store = useStore();
    const handleClose = (tag) => {
      console.log(tag);
    };
    const changeSideBar = () => {
      store.state.setting.showSidebar = !store.state.setting.showSidebar;
      setData.showSide = store.state.setting.showSidebar;
      console.log(store.state.setting);
    };
    return {
      ...toRefs(setData),
      handleClose,
      changeSideBar,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag-main {
  height: 30px;
  padding-left: 10px;
  padding-top: 5px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.1);
  .el-tag {
    margin-left: 15px;
  }
}

.breadcrumb-main {
  position: relative;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.3);
  .el-breadcrumb {
    float: left;
    .el-breadcrumb__item {
      line-height: 50px;
    }
  }
  i {
    float: left;
    height: 100%;
    line-height: 50px;
    font-size: 26px;
    margin: 0 20px;
    color: #515151;
  }
}
</style>
