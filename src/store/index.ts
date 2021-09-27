import { createStore } from "vuex";
import getters from "./getters";
import setting from "./modules/setting";
import user from "./modules/user";

const store = createStore({
  getters,
  modules: {
    setting,
    user,
  },
});

export default store;
export function useStore() {
  return store;
}
