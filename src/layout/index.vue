<template>
  <div class="app-wrapper">
    <!-- <div class="drawer-bg"></div> -->
    <SideBar
      class="sidebar-container"
      :style="isCollapse ? 'width:230px' : 'width:70px'"
    />
    <div
      class="main-container"
      :style="isCollapse ? 'margin-left:230px' : 'margin-left:70px;'"
    >
      <div>
        <NavigationBar v-if="showNavigation" />
        <TagsView class="tag-container" />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { AppMain, NavigationBar, SideBar, TagsView } from "./components";
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Layout",
  components: {
    AppMain,
    NavigationBar,
    SideBar,
    TagsView,
  },
  setup() {
    const store = useStore();
    const setData = reactive({
      isCollapse: computed(() => {
        return store.state.setting.showSidebar;
      }),
      showNavigation: store.state.setting.showNavigation,
    });

    return {
      ...toRefs(setData),
    };
  },
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: 230px;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #ffffff !important;
}
</style>
