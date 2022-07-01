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
          <q-btn
            @click="copyTrackingId(parcel.trn_number)"
            round
            flat
            icon="img:icons/copy.svg"
          />
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
import { copyToClipboard } from "quasar";

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
