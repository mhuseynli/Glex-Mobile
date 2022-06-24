export default function () {
  return {
    // * Personal info
    name: null,
    surname: null,
    customer_code: null,

    // * Statistics
    monthly_limit: null,
    balance: null,
    balance_tr: null,

    // * Auth Token
    token: null,

    // * Fined parcel count
    fined_parcel_count: 0,

    // * Registration completed
    registrationCompleted: null,

    // * User has an address
    hasAddress: null,

    // * Default branch selected for user
    defaultBranch: null,
  };
}
