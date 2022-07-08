<template>
  <section id="new-order" class="q-pa-md">
    <NewOrderCard
      v-for="(order, index) in orders"
      :key="index"
      :order-no="index + 1"
      class="q-mb-md"
    />

    <q-btn
      :to="{ name: 'new-order' }"
      @click="addNewOrder"
      unelevated
      outline
      color="primary"
      no-caps
      class="rounded-borders full-width q-mb-lg bg-white"
    >
      Yeni məhsul əlavə et
      <q-icon size="20px" class="q-ml-sm" name="img:icons/plus-primary.svg" />
    </q-btn>
  </section>
</template>

<script>
import NewOrderCard from "components/Orders/NewOrderCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewOrder",
  components: { NewOrderCard },

  computed: {
    ...mapGetters("orders", ["orders", "singleOrderTotal", "totalPrice"]),
    // ...mapGetters("user", [
    //   "hasAddress",
    //   "registrationCompleted",
    //   "defaultBranch",
    // ]),
  },

  async created() {
    this.setPageTitle("Mənim üçün sifariş et");
    await this.fillOptions();
  },

  methods: {
    ...mapActions("shared", ["setPageTitle"]),
    ...mapActions("orders", [
      "addNewOrder",
      "fillOptions",
      "resetCart",
      "setCartCount",
    ]),
  },
};
</script>

<style scoped></style>
