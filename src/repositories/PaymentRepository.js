const resource = "api/balance/increase";
const resource_increase_tl = "api/order/payment";
const resource_check = "api/order/payment/check";

export default $axios => ({
  async increaseUsdBalance(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource,
        data: {
          balance: payload.balance
        }
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async increaseTlBalanceRequest(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource,
        data: {
          balance: payload.balance,
          typeOp: payload.typeOp
        }
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async increaseTlBalance(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_increase_tl,
        data: {
          reference_id: payload.reference_id,
          name: payload.name,
          cardnumber: payload.cardnumber,
          cvv: payload.cvv,
          expirationDate: payload.expirationDate
        }
      });

      return data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async checkPaymentStatus(payload) {
    try {
      const data = await $axios({
        method: "POST",
        url: resource_check,
        data: {
          reference_payment: payload
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
