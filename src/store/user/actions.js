import { LocalStorage } from "quasar";

export function logUserIn({ commit }, payload) {
  LocalStorage.set("token", payload.____token);
  commit("LOG_USER_IN", payload);
  this.$router.push("/");
}

// export function setUserDetails({ commit }, payload) {
//   commit("SET_USER_DETAILS", payload);
// }
