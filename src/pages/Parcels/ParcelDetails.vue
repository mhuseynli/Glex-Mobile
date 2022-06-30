<template>
  <div class="q-pa-md">
    <q-card class="details-card">
      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> İzləmə nömrəsi </span>
        <span class="field-val">
          {{ parcel.trn_number_system }} <br />
          {{ parcel.trn_number }}
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Mağazanın adı </span>
        <span class="field-val">
          {{ parcel.shop }}
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Məhsulun kateqoriyası </span>
        <span class="field-val">
          {{ parcel.category_name }}
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Sayı </span>
        <span class="field-val"> {{ parcel.count }} ədəd </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Çəki </span>
        <span class="field-val"> {{ parcel.weight }} kq </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Məhsulun qiyməti </span>
        <span class="field-val"> {{ parcel.price }} TL </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Çatdırılma haqqı </span>
        <span class="field-val">
          {{ parcel.cargo_price }}$ ( {{ parcel.convert_cargo_price }} AZN )
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Ödəniş statusu </span>
        <span class="field-val">
          <q-badge
            v-if="parcel.isPayment === 0"
            color="red-2"
            text-color="negative"
            label="Ödənilməyib"
            class="q-pa-sm"
          />
        </span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ParcelDetails",

  props: {
    parcel: {
      type: Object,
      required: true,
    },
  },

  async created() {
    this.setPageTitle("Bağlamanın detalları");
  },

  methods: {
    ...mapActions("shared", ["setPageTitle"]),
  },
};
</script>

<style scoped></style>
