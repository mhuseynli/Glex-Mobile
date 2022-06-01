const resource = "api/addresses";
const resource_region = "api/region";

export default $axios => ({
  async all() {
    try {
      const data = await $axios({
        method: "GET",
        url: resource
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async cityregion() {
    try {
      const data = await $axios({
        method: "GET",
        url: resource_region
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async create(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource,
        data: payload
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async edit(payload) {
    try {
      const data = await $axios({
        method: "PUT",
        url: `${resource}/${payload.id}`,
        data: payload
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async delete(id) {
    try {
      const data = await $axios({
        method: "DELETE",
        url: `${resource}/${id}`
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  }
});
