<template>
  <div v-if="!isLoading">
    <q-card
      v-for="order in orders"
      :key="order.id"
      class="product-card q-mb-md"
      flat
    >
      <q-card-section class="flex column q-px-lg product-card__head">
        <span class="field-desc"> Cəmi məbləğ </span>
        <span class="field-val"> {{ order.price }} </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="product-card__data q-pa-lg">
        <div class="row">
          <div class="col-6">
            <p class="field-desc">ID nömrə</p>
            <p class="field-val">{{ order.id }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Məhsulun linki</p>
            <p class="field-val long-text">{{ order.link }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Sayı</p>
            <p class="field-val">{{ order.count }} ədəd</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Daxili kargo</p>
            <p class="field-val">{{ order.internal_cargo }} TL</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Qiyməti</p>
            <p class="field-val">{{ order.price }} TL</p>
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="q-px-lg q-pt-none q-pb-lg">
        <q-btn
          outline
          no-caps
          class="btn btn-simple full-width items-center q-py-xs"
        >
          <q-icon size="16px" class="q-mr-sm" name="img:icons/file-text.svg" />
          Ətraflı bax
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div v-else>
    <q-skeleton height="350px" width="100%" type="rect" class="q-mb-md" />
    <q-skeleton height="350px" width="100%" type="rect" />
  </div>
</template>

<script>
export default {
  name: "OrdersList",

  props: {
    orders: {
      type: Array,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
