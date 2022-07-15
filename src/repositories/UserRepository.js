import { Http } from "@capacitor-community/http";
import { options } from "boot/http-capacitor";

const resource = "userdata";

export default {
  async data() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
};
