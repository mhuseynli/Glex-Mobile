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
          <q-btn @click="copyTrackingId(parcel.trn_number)" round flat>
            <q-icon>
              <svg
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
            </q-icon>
          </q-btn>
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

      <q-card-actions class="q-px-lg q-pt-none q-pb-lg">
        <q-btn
          @click="showParcelDetails(parcel)"
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
import { copyToClipboard } from "quasar";
import { Clipboard } from "@capacitor/clipboard";

export default {
  name: "ParcelsList",

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

  methods: {
    async copyTrackingId(id) {
      await Clipboard.write({
        string: id,
      });

      this.$q.notify({
        message: "Tracking ID kopyalandı",
        color: "positive",
      });
    },

    showParcelDetails(parcel) {
      this.$router.push({
        name: "parcel-details",
        params: {
          id: parcel.id,
          parcel: parcel,
        },
      });
    },
  },
};
</script>

<style scoped></style>
