<template>
  <div class="sideWrap">
    <div class="sidebar-logo">
      <span v-if="isCollapse">{{ title }}</span>
      <img v-else :src="logo" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :uniqueOpened="true"
        :default-active="menu[0].menusub[0].id"
        class="el-menu-vertical-demo"
        :collapse="!isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-sub-menu v-for="item in menu" :key="item" :index="item.id">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="treitem in item.menusub"
            :key="treitem"
            :index="treitem.id"
            >{{ treitem.title }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import routerMenu from "@/api/menu";
export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();

    const setData = reactive({
      menu: routerMenu,
      isCollapse: computed(() => {
        console.log("1111", route);
        return store.state.setting.showSidebar;
      }),
      title: store.state.setting.title,
      logo: store.state.setting.logoUrl,
    });

    const methods = reactive({});
    return {
      ...toRefs(setData),
      ...toRefs(methods),
    };
  },
});
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.el-menu {
  border: none;
}

.el-scrollbar {
  background-color: #545c64;
}

.sidebar-logo {
  width: auto;
  height: 50px;
  font-size: 22px;
  font-weight: 600;
  line-height: 50px;
  white-space: nowrap;
  padding: 20px 0 30px 10px;
  background-color: #545c64;
  color: #ffffff;
  span {
    padding-left: 10px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
