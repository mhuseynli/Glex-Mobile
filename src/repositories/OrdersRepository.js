const resource = "api/orders";
const resource_cart = "api/cart";
const resource_count = "api/cart_count";

export default axios => ({
  async all() {
    try {
      const data = await axios({
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

  async show(id) {
    try {
      const data = await axios({
        method: "GET",
        url: `${resource}/${id}`
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
      const data = await axios({
        method: "PUT",
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

  async options() {
    try {
      const data = await axios({
        method: "GET",
        url: `${resource}/create`
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
      const data = await axios({
        method: "POST",
        url: resource,
        data: {
          cart: type == "cart" ? 1 : 2,
          orders: orders
        }
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
      const data = await axios({
        method: "POST",
        url: `${resource}/pay`,
        data: {
          orderId: payload
        }
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
      const data = await axios({
        method: "DELETE",
        url: resource,
        data: {
          orders: [payload]
        }
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
      const data = await axios({
        method: "GET",
        url: resource_cart
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
      const data = await axios({
        method: "GET",
        url: resource_count
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  }
});
