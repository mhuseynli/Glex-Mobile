export function LOG_USER_IN(state, payload) {
  state.token = payload.____token;
}

export function SET_USER_DATA(state, payload) {
  state.name = payload.userData.name;
  state.surname = payload.userData.surname;
  state.customer_code = payload.userData.accountId;
  state.balance = payload.userData.balance;
  state.balance_tr = payload.userData.balance_tr;
  state.monthly_limit = payload.thirtyDayStats.total;
  state.registrationCompleted = payload.userData.data_completed;
  state.hasAddress = payload.addressIndicate;
  state.defaultBranch = payload.userData.branch_id_default;
}
