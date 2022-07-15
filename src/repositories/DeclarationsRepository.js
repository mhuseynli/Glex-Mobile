// ! Parcel
const resource_parcels = "/declarations";
const resource_headings = "/declarations/headers";
const resource_pay_parcels = "/declarations/pay_orders";

// ! Declaration
const resource_declarations = "/declaration";
const resource_categories = "/declaration_categories";
const resource_branches = "/branch";

// ! Insurance
const resource_insurance = "/insurance";

// ! Fined Parcels
const resource_fined = "/fined_parcels";

export default (Http, options) => ({
  // # COMMON

  async branches() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_branches}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  // # PARCELS

  async headings() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_headings}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async getByStatusId(id) {
    try {
      const data = await Http.request({
        method: "POST",
        url: `${options.url}/${resource_parcels}`,
        data: {
          status_id: id,
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

  async paginate(id, page) {
    try {
      const data = await Http.request({
        method: "POST",
        url: `${resource_parcels}?page=${page}`,
        data: {
          status_id: id,
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

  // # DECLARATIONS

  async declarations() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_declarations}`,
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
        url: `${options.url}/${resource_pay_parcels}`,
        data: {
          orders: payload,
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

  async getDeclaration(id) {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_declarations}/${id}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async saveDeclaration(payload) {
    try {
      const data = await Http.request({
        method: "PUT",
        url: `${options.url}/${resource_declarations}`,
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

  async getCategories() {
    try {
      const data = await Http.request({
        method: "GET",
        url: `${options.url}/${resource_categories}`,
        headers: options.headers,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  // async edit(id) {
  //   try {
  //     const data = await Http({
  //       method: "GET",
  //       url: resource_declarations
  //     });

  //     return data;
  //   } catch (error) {
  //     if (error.response) {
  //       return error.response;
  //     }
  //   }
  // }

  // # INSURANCE

  async insuranceTypes() {
    try {
      const data = await Http({
        method: "GET",
        url: `${options.url}/${resource_insurance}/types`,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async createInsurance(payload) {
    try {
      const data = await Http({
        method: "POST",
        url: `${options.url}/${resource_insurance}`,
        data: payload,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  // # FINED PARCELS

  async finedParcels() {
    try {
      const data = await Http({
        method: "GET",
        url: `${options.url}/${resource_fined}`,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async finedParcelCount() {
    try {
      const data = await Http({
        method: "GET",
        url: `${options.url}/${resource_fined}/count`,
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async payFined(payload) {
    try {
      const data = await Http({
        method: "POST",
        url: `${options.url}/${resource_fined}/pay_fined`,
        data: {
          orders: payload,
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
