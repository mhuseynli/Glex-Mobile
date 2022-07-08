export function orders(state) {
  return state.cart;
}

export function categories(state) {
  return state.categories;
}

export function brands(state) {
  return state.brands;
}

export function commission(state) {
  return state.commission;
}

export function cartCount(state) {
  return state.cart_count;
}

export function singleOrderTotal(state) {
  return (index) => {
    return state.cart[index].total;
  };
}

// : Total price calculator

export function totalPrice(state) {
  let total = 0;

  state.cart.forEach((p) => {
    total += parseFloat(p.total);
  });

  return !isNaN(parseFloat(total)) ? Math.round(total * 100) / 100 : "";
}
