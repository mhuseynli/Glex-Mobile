class CartItem {
  constructor() {
    this.link = "";
    this.category = null;
    this.store = null;
    this.other_brand = "";
    this.size = "";
    this.color = "";
    this.count = 1;
    this.price = 0;
    this.cargo_price = 0;
    this.note = "";
    this.total = 0;
    this.is_liquid = false;
  }
}

export default function () {
  return {
    cart: [new CartItem()],

    categories: [],
    brands: [],
    commission: 0,
    cart_count: 0,
  };
}
