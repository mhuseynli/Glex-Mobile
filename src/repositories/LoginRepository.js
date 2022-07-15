const resource_login = "/login";
const resource_logout = "/logout";

export default (http, options) => ({
  async login(payload) {
    try {
      const data = await http.request({
        method: "POST",
        url: `${options.url}/${resource_login}`,
        data: {
          email: payload.email,
          password: payload.password,
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

  async logout(payload) {
    try {
      const data = await axios({
        method: "POST",
        url: resource_logout,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
});
