import defaultSetting from "@/settings";
const state = {
  top: "123",
  count: 1,
  logoUrl: defaultSetting.logoUrl,
  title: defaultSetting.title,
  showSidebar: defaultSetting.showSidebar,
  showNavigation: defaultSetting.showNavigation,
};

const mutations = {
  increment(state: any) {
    // 变更状态
    state.count++;
  },
};

const actions = {};

const setting = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default setting;
