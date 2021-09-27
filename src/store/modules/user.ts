import { getToken, removeToken } from "@/utils/auto";

const state = {
  token: getToken() || "",
};

const mutations = {};

const actions = {
  LoginByUsername({ commit }: any, userInfo: any) {
    const userName = userInfo.userNumber.trim();
    const com = commit;
    console.log(com);
    return new Promise<unknown>((resolve) => {
      if (userName == "admin") {
        const res = {
          retState: "1",
          retData: "登录成功",
          token: "1231231231231",
        };
        resolve(res);
      } else {
        const res = {
          retState: "2",
          retData: "用户名不正确",
        };
        resolve(res);
      }
    });
  },

  OutLogin({ commit }: any, user: any) {
    console.log(commit, user);
    return new Promise<unknown>((resolve) => {
      const res = {
        retState: "1",
        retData: "成功退出登录",
      };
      state.token = "";
      removeToken();
      resolve(res);
    });
  },
};

const setting = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default setting;
