const resource = "api/courier";

export default ($axios) => ({
  async all() {
    try {
      const data = await $axios({
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

  async newOrderData() {
    try {
      const data = await $axios({
        method: "GET",
        url: `${resource}/create`,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
});
