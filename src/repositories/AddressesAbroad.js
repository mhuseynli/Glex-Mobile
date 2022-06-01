const resource = "api/delivery_addresses";

export default $axios => ({
  async all() {
    try {
      const data = await $axios({
        method: "POST",
        url: resource
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  }
});
