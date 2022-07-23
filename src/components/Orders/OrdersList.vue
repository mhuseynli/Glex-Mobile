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
          <q-icon size="16px" class="q-mr-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33341 1.33334H4.00008C3.64646 1.33334 3.30732 1.47381 3.05727 1.72386C2.80722 1.97391 2.66675 2.31305 2.66675 2.66667V13.3333C2.66675 13.687 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V5.33334L9.33341 1.33334Z"
                stroke="#585C5E"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.33325 1.33334V5.33334H13.3333"
                stroke="#585C5E"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6666 8.66666H5.33325"
                stroke="#585C5E"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6666 11.3333H5.33325"
                stroke="#585C5E"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66658 6H5.99992H5.33325"
                stroke="#585C5E"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </q-icon>
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
