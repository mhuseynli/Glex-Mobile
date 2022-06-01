// ! Parcel
const resource_parcels = "api/declarations";
const resource_headings = "api/declarations/headers";
const resource_pay_parcels = "api/declarations/pay_orders";

// ! Declaration
const resource_declarations = "api/declaration";
const resource_categories = "api/declaration_categories";
const resource_branches = "api/branch";

// ! Insurance
const resource_insurance = "api/insurance";

// ! Fined Parcels
const resource_fined = "api/fined_parcels";

export default ($axios) => {
  return {
    // # COMMON

    async branches() {
      try {
        const data = await $axios({
          method: "GET",
          url: resource_branches,
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
        const data = await $axios({
          method: "GET",
          url: resource_headings,
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
        const data = await $axios({
          method: "POST",
          url: resource_parcels,
          data: {
            status_id: id,
          },
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
        const data = await $axios({
          method: "POST",
          url: `${resource_parcels}?page=${page}`,
          data: {
            status_id: id,
          },
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
        const data = await $axios({
          method: "GET",
          url: resource_declarations,
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
        const data = await $axios({
          method: "POST",
          url: resource_pay_parcels,
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

    async getDeclaration(id) {
      try {
        const data = await $axios({
          method: "GET",
          url: `${resource_declarations}/${id}`,
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
        const data = await $axios({
          method: "PUT",
          url: `${resource_declarations}`,
          data: payload,
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
        const data = await $axios({
          method: "GET",
          url: `${resource_categories}`,
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
    //     const data = await $axios({
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
        const data = await $axios({
          method: "GET",
          url: `${resource_insurance}/types`,
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
        const data = await $axios({
          method: "POST",
          url: resource_insurance,
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
        const data = await $axios({
          method: "GET",
          url: resource_fined,
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
        const data = await $axios({
          method: "GET",
          url: `${resource_fined}/count`,
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
        const data = await $axios({
          method: "POST",
          url: `${resource_fined}/pay_fined`,
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
  };
};
