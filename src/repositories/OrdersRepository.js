const resource = "orders";
const resource_cart = "cart";
const resource_count = "cart_count";

export default (Http, options) => ({
  async all() {
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

  async show(id) {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource}/${id}`,
        headers: options.headers,
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
      const data = await Http.request({
        method: "PUT",
        url: `${options.url}/${resource}`,
        data: payload,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async options() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource}/create`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async create(type, orders) {
    try {
      const data = await Http.request({
        method: "POST",
        url: `${options.url}/${resource}`,
        data: {
          cart: type == "cart" ? 1 : 2,
          orders: orders,
        },
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async payment(payload) {
    try {
      const data = await Http.request({
        method: "POST",
        url: `${options.url}/${resource}/pay`,
        data: {
          orderId: payload,
        },
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async delete(payload) {
    try {
      const data = await Http.request({
        method: "DELETE",
        url: `${options.url}/${resource}`,
        data: {
          orders: [payload],
        },
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async cart() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_cart}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async count() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_count}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
});
