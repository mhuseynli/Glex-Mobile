<template>
  <section id="orders" class="q-pa-md">
    <q-btn
      :to="{ name: 'new-order' }"
      unelevated
      color="primary"
      no-caps
      class="rounded-borders full-width q-mb-lg"
    >
      Yeni sifariş
      <q-icon size="20px" class="q-ml-sm">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 5.00003V19"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.5 12H19.5"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </q-icon>
    </q-btn>
    <OrdersList :orders="orders" :is-loading="ordersLoading" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import OrdersList from "components/Orders/OrdersList";

export default {
  name: "Orders",

  components: { OrdersList },

  data() {
    return {
      orders: null,
      ordersLoading: null,
    };
  },

  async created() {
    this.setPageTitle("Sifarişlərim");
    await this.onGetOrders();
  },

  methods: {
    ...mapActions("shared", ["setPageTitle"]),

    async onGetOrders() {
      this.ordersLoading = true;
      const res = await this.$repositories.get("orders").all();
      const { orders } = res.data.data;

      if (res.status === 200) {
        this.orders = orders;
        this.ordersLoading = false;
      } else {
        this.$q.notify({
          message: "Xəta baş verdi.",
          color: "red",
        });
      }
    },
  },
};
</script>

<style scoped></style>
