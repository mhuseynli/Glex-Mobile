const resource_register = "api/qeydiyyat";
const resource_checkcode = "api/sms_code_check";
const resource_resendcode = "api/resend_sms";

export default $axios => ({
  async register(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_register,
        data: payload
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async checkVerificationCode(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_checkcode,
        data: payload
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async resendVerificationCode(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_resendcode,
        data: payload
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  }
});
