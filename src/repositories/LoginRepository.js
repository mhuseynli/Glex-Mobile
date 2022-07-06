const resource_login = "/api/login";
const resource_logout = "/api/logout";

export default (axios) => ({
  async login(payload) {
    try {
      const data = await axios({
        method: "POST",
        url: resource_login,
        data: {
          email: payload.email,
          password: payload.password,
        },
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
