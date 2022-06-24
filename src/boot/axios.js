import axiosBase from "axios";
import { Platform } from 'quasar'

const axios = axiosBase.create({
  //   baseURL: "http://cdp.az"
});

axios.defaults.headers.common = {
  client: `${Platform.is.platform} / ${Platform.is.name}`,
};

export { axios };
