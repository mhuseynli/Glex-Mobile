const resource_recover = "api/recover_account";
const resource_resendcode = "api/resend_sms";
const resource_checkcode = "api/sms_code_check";
const resource_update_password = "api/set_recovery";

export default $axios => ({
  async recoverAccount(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_recover,
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
        data: {
          r_token: payload.r_token,
          sms_code: payload.sms_code
        }
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async updatePassword(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_update_password,
        data: {
          r_token: payload.r_token,
          password: payload.password,
          passwordCheck: payload.passwordCheck
        }
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
