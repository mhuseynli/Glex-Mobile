const resource = "api/attorneys";

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

  async create(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource,
        data: payload,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async update(payload) {
    try {
      const data = await $axios({
        method: "PUT",
        url: resource,
        data: payload,
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
        url: resource,
        data: {
          id: id,
        },
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
});
