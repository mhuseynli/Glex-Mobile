export function userDetails(state) {
  return {
    name: state.name,
    surname: state.surname,
    customer_code: state.customer_code,
  };
}

export function userStatistics(state) {
  return {
    balance: state.balance,
    balance_tr: state.balance_tr,
    monthly_limit: state.monthly_limit,
  };
}
