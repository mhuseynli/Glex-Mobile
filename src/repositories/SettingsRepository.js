const resource = "api/settings";

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

  async save(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource,
        data: {
          fatherName: payload.fatherName,
          fin: payload.fin,
          current_password: payload.current_password,
          editpassword: payload.new_password,
          editConfirm_password: payload.new_password_repeat,
          id_serial: payload.serial_prefix,
          id_number: payload.serial_number,
          birthday: payload.birthday,
          citizen: payload.citizen
        }
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  }
});
