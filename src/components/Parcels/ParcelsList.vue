<template>
  <div v-if="!isLoading">
    <q-card
      v-for="parcel in parcels"
      :key="parcel.id"
      class="product-card q-mb-md"
      flat
    >
      <q-card-section class="flex items-center justify-between q-px-lg">
        <div class="parcel-tracking">
          <span> {{ parcel.trn_number_system }} </span>
          <span> {{ parcel.trn_number }} </span>
        </div>
        <div>
          <svg
            @click="copyTrackingId(parcel.trn_number)"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
              stroke="#585C5E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0392 2 13.5305 2 13V4.00003C2 3.4696 2.21071 2.96089 2.58579 2.58582C2.96086 2.21074 3.46957 2.00003 4 2.00003H13C13.5304 2.00003 14.0391 2.21074 14.4142 2.58582C14.7893 2.96089 15 3.4696 15 4.00003V5.00003"
              stroke="#585C5E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="product-card__data q-pa-lg">
        <div class="row">
          <div class="col-6">
            <p class="field-desc">Ölkə / Mağaza</p>
            <p class="field-val">{{ parcel.shop }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Kateqoriya</p>
            <p class="field-val">{{ parcel.category_name }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Çəki</p>
            <p class="field-val">{{ parcel.weight }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Qiyməti</p>
            <p class="field-val">{{ parcel.price }} TL</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Daşınma xərci</p>
            <p class="field-val">
              {{ parcel.cargo_price }}$ ({{ parcel.convert_cargo_price }})
            </p>
          </div>
        </div>
      </q-card-section>

      <!--    <q-card-actions vertical>-->
      <!--      <q-btn flat>Action 1</q-btn>-->
      <!--      <q-btn flat>Action 2</q-btn>-->
      <!--    </q-card-actions>-->
    </q-card>
  </div>
  <div v-else>
    <q-skeleton height="350px" width="100%" type="rect" class="q-mb-md" />
    <q-skeleton height="350px" width="100%" type="rect" />
  </div>
</template>

<script>
import { copyToClipboard } from "quasar";

export default {
  props: {
    parcels: {
      type: Array,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  name: "ParcelsList",

  methods: {
    copyTrackingId(id) {
      copyToClipboard(id)
        .then(() => {
          this.$q.notify({
            message: "Tracking ID kopyalandı",
            color: "positive",
          });
        })
        .catch(() => {
          this.$q.notify({
            message: "Xəta baş verdi.",
            color: "red",
          });
        });
    },
  },
};
</script>

<style scoped></style>
