import Repository from "src/repositories/RepositoryFactory";
const OrdersRepository = Repository.get("orders");

export function addNewOrder({ commit }) {
  commit("ADD_NEW_ORDER");
}

export function updateProperty({ commit }, payload) {
  commit("UPDATE_PROPERTY", payload);
}

export function resetCart({ commit }) {
  commit("RESET_CART");
}

export async function setCartCount({ commit }) {
  const res = await OrdersRepository.count();

  if (res.status === 200) {
    commit("SET_CART_COUNT", res.data.data.cart_count);
  }
}

export async function fillOptions({ commit }) {
  const res = await OrdersRepository.options();

  if (res.status === 200) {
    commit("FILL_OPTIONS", res.data.data);
  }
}
