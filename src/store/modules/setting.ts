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
    // εζ΄ηΆζ
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
