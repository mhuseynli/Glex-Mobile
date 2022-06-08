import { axios } from "src/boot/axios";

const resource = "/api/page";
const resource_contact = "/api/contact";
const resource_about = "/api/haqqimizda";
const resource_faq = "/api/faq";
const resource_services = "/api/servisler";
const resource_shops = "/api/magazalar";

export default {
  async about() {
    return await axios.get(`${resource_about}`);
  },

  async faq() {
    return await axios.get(`${resource_faq}`);
  },

  async services() {
    return await axios.get(`${resource_services}`);
  },

  async shops() {
    return await axios.get(`${resource_shops}`);
  },

  async privacy() {
    return await axios.get(`${resource}/gizlilik-siyaseti`);
  },

  async agreement() {
    return await axios.get(`${resource}/istifadeci-razilasmasi`);
  },

  async forbiddenProducts() {
    return await axios.get(`${resource}/qadagan-olunmus-mehsullar`);
  },

  async contact(payload) {
    try {
      const data = await axios({
        method: "POST",
        url: resource_contact,
        data: {
          full_name: payload.full_name,
          email: payload.email,
          subject: payload.subject,
          text: payload.text,
        },
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
};
