<template>
  <q-card class="order-card bg-white q-py-sm q-px-xs">
    <q-card-section class="order-card__head">
      <h2>Məhsul #{{ orderNo }}</h2>
      <q-btn
        @click="onRemoveOrder"
        v-if="cart.length > 1"
        color="accent"
        text-color="grey"
        icon="close"
        size="sm"
        round
        unelevated
      />
    </q-card-section>

    <q-card-section>
      <q-form>
        <q-input
          class="q-mb-sm"
          type="text"
          outlined
          label="Məhsulun linki"
          :value="cart[orderNo - 1].link"
          @input="onUpdate('link', $event)"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        >
          <template v-slot:append>
            <q-icon size="20px" name="img:icons/link.svg" />
          </template>
        </q-input>

        <q-select
          class="q-mb-sm"
          outlined
          option-label="category_name"
          v-model="category"
          :options="categories"
          label="Məhsulun kateqoriyası"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        />

        <q-select
          class="q-mb-sm"
          outlined
          :options="brands"
          option-label="name"
          v-model="store"
          label="Mağazanı seçin"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        />

        <q-input
          class="q-mb-sm"
          type="text"
          outlined
          :value="cart[orderNo - 1].size"
          @input="onUpdate('size', $event)"
          label="Məhsulun ölçüsü (S, M, L, XL)"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        />

        <q-input
          class="q-mb-sm"
          type="text"
          outlined
          :value="cart[orderNo - 1].color"
          @input="onUpdate('color', $event)"
          label="Məhsulun rəngi"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        />

        <div class="row q-col-gutter-sm">
          <div class="col-6">
            <q-input
              class="q-mb-sm"
              type="number"
              v-model="count"
              outlined
              label="Məhsul sayı"
              :rules="[
                (val) => !!val || 'Bu sahə doldurulmalıdır',
                (val) => val >= 0 || 'Say sıfırdan böyük olmalıdır',
              ]"
            />
          </div>
          <div class="col-6">
            <q-input
              class="q-mb-sm"
              type="number"
              outlined
              label="Qiymət"
              v-model="price"
              :rules="[
                (val) => !!val || 'Bu sahə doldurulmalıdır',
                (val) => val > 0 || 'Say sıfırdan böyük olmalıdır',
              ]"
            >
              <template v-slot:append>
                <q-icon size="20px" name="img:icons/lira.svg" />
              </template>
            </q-input>
          </div>
        </div>

        <q-input
          class="q-mb-sm"
          type="number"
          outlined
          label="Türkiyə daxili karqo"
          v-model="cargo_price"
          :rules="[
            (val) => !!val || 'Bu sahə doldurulmalıdır',
            (val) => val > 0 || 'Say sıfırdan böyük olmalıdır',
          ]"
        >
          <template v-slot:append>
            <q-icon size="20px" name="img:icons/lira.svg" />
          </template>
        </q-input>

        <q-input
          type="textarea"
          :value="cart[orderNo - 1].note"
          @input="onUpdate('note', $event)"
          outlined
          label="Əlavə qeyd"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "NewOrderCard",

  props: {
    orderNo: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ...mapState("orders", ["cart"]),
    ...mapGetters("orders", [
      "singleOrderTotal",
      "categories",
      "brands",
      "commission",
    ]),

    count: {
      get() {
        return this.cart[this.orderNo - 1].count;
      },
      set(value) {
        this.updateProperty({
          index: this.orderNo - 1,
          property: "count",
          value: value,
        });
      },
    },
    price: {
      get() {
        return this.cart[this.orderNo - 1].price;
      },
      set(value) {
        this.updateProperty({
          index: this.orderNo - 1,
          property: "price",
          value: value,
        });
      },
    },
    cargo_price: {
      get() {
        return this.cart[this.orderNo - 1].cargo_price;
      },
      set(value) {
        this.updateProperty({
          index: this.orderNo - 1,
          property: "cargo_price",
          value: value,
        });
      },
    },
    category: {
      get() {
        return this.cart[this.orderNo - 1].category;
      },
      set(value) {
        this.updateProperty({
          index: this.orderNo - 1,
          property: "category",
          value: value,
        });
      },
    },
    store: {
      get() {
        return this.cart[this.orderNo - 1].store;
      },
      set(value) {
        this.updateProperty({
          index: this.orderNo - 1,
          property: "store",
          value: value,
        });
      },
    },
    is_liquid: {
      get() {
        return this.cart[this.orderNo - 1].is_liquid;
      },
      set(value) {
        this.updateProperty({
          index: this.orderNo - 1,
          property: "is_liquid",
          value: value,
        });
      },
    },
  },
  methods: {
    ...mapMutations("orders", ["REMOVE_ORDER"]),
    ...mapActions("orders", ["updateProperty"]),

    onUpdate(property, e) {
      this.updateProperty({
        index: this.orderNo - 1,
        property: property,
        value: e,
      });
    },

    onRemoveOrder() {
      this.REMOVE_ORDER(this.orderNo - 1);
    },
  },
};
</script>

<style scoped></style>
