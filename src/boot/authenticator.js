import { LocalStorage } from "quasar";

export default ({ app, router, store }) => {
  if (LocalStorage.has("token")) {
    store.dispatch("user/setUserData", LocalStorage.getItem("token"));
  }
};
