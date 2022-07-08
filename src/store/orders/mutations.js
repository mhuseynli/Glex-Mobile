import { CartItem } from "src/store/orders/state";

export function ADD_NEW_ORDER(state) {
  state.cart.push(new CartItem());
}

export function UPDATE_PROPERTY(state, payload) {
  if (
    payload.property === "price" ||
    payload.property === "cargo_price" ||
    payload.property === "count"
  ) {
    if (!isNaN(parseFloat(payload.value))) {
      state.cart[payload.index][payload.property] = parseFloat(payload.value);
    } else {
      state.cart[payload.index][payload.property] = 0;
    }
  } else {
    state.cart[payload.index][payload.property] = payload.value;
  }

  let sum =
    parseFloat(state.cart[payload.index].count) *
      parseFloat(state.cart[payload.index].price) +
    parseFloat(state.cart[payload.index].cargo_price);

  let total = Math.round((sum + sum * (state.commission / 100)) * 100) / 100;

  state.cart[payload.index].total = total;
}

export function REMOVE_ORDER(state, payload) {
  state.cart.splice(payload, 1);
}

export function RESET_CART(state) {
  state.cart = [new CartItem()];
}

export function SET_CART_COUNT(state, payload) {
  state.cart_count = payload;
}

export function FILL_OPTIONS(state, payload) {
  state.categories = payload.categories;
  state.brands = payload.brands;
  state.commission = payload.comission.percent;

  state.brands.push({
    id: 0,
    name: "Digər",
  });
}
