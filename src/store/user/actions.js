import { LocalStorage } from "quasar";
import { axios } from "src/boot/axios";

import Repository from "src/repositories/RepositoryFactory";
const UserRepository = Repository.get("user");

export function logUserIn({ commit, dispatch }, payload) {
  LocalStorage.set("token", payload.____token);
  commit("LOG_USER_IN", payload);
  this.$router.push("/");

  dispatch("setUserData", LocalStorage.getItem("token"));
}

export async function setUserData({ commit }, payload) {
  axios.defaults.headers.common["token"] = payload;
  const res = await UserRepository.data();

  if (res.status === 200) {
    commit("SET_USER_DATA", res.data.data);
  } else if (res.status === 403) {
    LocalStorage.clear();
    await this.$router.push("/auth/login");
    location.reload();
  }
}
