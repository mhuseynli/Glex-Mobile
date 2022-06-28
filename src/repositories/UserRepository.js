import { axios } from "src/boot/axios";

const resource = "/api/userdata";

export default {
  async data() {
    try {
      const data = await axios({
        method: "GET",
        url: resource,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
};
