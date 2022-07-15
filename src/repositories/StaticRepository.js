const resource = "/api/page";
const resource_contact = "/api/contact";
const resource_about = "/haqqimizda";
const resource_faq = "/api/faq";
const resource_services = "/api/servisler";
const resource_shops = "/api/magazalar";

export default (Http, options) => ({
  async about() {
    return await Http.get({
      url: `${options.url}${resource_about}`,
      headers: options.headers,
    });
  },

  // todo All of the requests below must be same as above.

  // async faq() {
  //   return await Http.get(`${resource_faq}`);
  // },
  //
  // async services() {
  //   return await Http.get(`${resource_services}`);
  // },
  //
  // async shops() {
  //   return await Http.get(`${resource_shops}`);
  // },
  //
  // async privacy() {
  //   return await Http.get(`${resource}/gizlilik-siyaseti`);
  // },
  //
  // async agreement() {
  //   return await Http.get(`${resource}/istifadeci-razilasmasi`);
  // },
  //
  // async forbiddenProducts() {
  //   return await Http.get(`${resource}/qadagan-olunmus-mehsullar`);
  // },
  //
  // async contact(payload) {
  //   try {
  //     const data = await Http({
  //       method: "POST",
  //       url: resource_contact,
  //       data: {
  //         full_name: payload.full_name,
  //         email: payload.email,
  //         subject: payload.subject,
  //         text: payload.text,
  //       },
  //     });
  //
  //     return data;
  //   } catch (error) {
  //     if (error.response) {
  //       return error.response;
  //     }
  //   }
  // },
});
