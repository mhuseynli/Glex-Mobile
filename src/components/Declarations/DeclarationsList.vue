<template>
  <div v-if="!isLoading">
    <q-card
      v-for="declaration in declarations"
      :key="declaration.id"
      class="product-card q-mb-md"
      flat
    >
      <q-card-section class="flex items-center justify-between q-px-lg">
        <div class="parcel-tracking">
          <span> {{ declaration.trn_number_system }} </span>
          <span> {{ declaration.trn_number }} </span>
        </div>
        <div>
          <q-btn
            @click="copyTrackingId(declaration.trn_number)"
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
            <p class="field-val flex items-center">
              <q-icon
                size="16px"
                class="q-mr-sm"
                :name="`img:icons/${declaration.image}`"
              />
              <span class="long-text">
                {{ declaration.shop }}
              </span>
            </p>
          </div>
          <div class="col-6">
            <p class="field-desc">Kateqoriya</p>
            <p class="field-val">{{ declaration.category_name }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Çəki</p>
            <p class="field-val">{{ declaration.weight }}</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Qiyməti</p>
            <p class="field-val">{{ declaration.price }} TL</p>
          </div>
          <div class="col-6">
            <p class="field-desc">Status</p>
            <p class="field-val">
              <q-badge
                :color="
                  getStatus(
                    declaration.noInvoice,
                    declaration.stockCustomsView,
                    declaration.noCustomsInvoice
                  ).color
                "
                :text-color="
                  getStatus(
                    declaration.noInvoice,
                    declaration.stockCustomsView,
                    declaration.noCustomsInvoice
                  ).textColor
                "
                :label="
                  getStatus(
                    declaration.noInvoice,
                    declaration.stockCustomsView,
                    declaration.noCustomsInvoice
                  ).status
                "
                class="q-pa-sm"
              />
            </p>
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="q-px-lg q-pt-none q-pb-lg">
        <q-btn
          @click="showDeclarationDetails(declaration)"
          outline
          no-caps
          class="btn btn-simple items-center q-py-xs col-grow"
        >
          <q-icon size="16px" class="q-mr-sm" name="img:icons/file-text.svg" />
          Ətraflı bax
        </q-btn>
        <q-btn
          v-if="
            declaration.noInvoice === 1 &&
            declaration.stockCustomsView === 0 &&
            declaration.noCustomsInvoice === 1
          "
          :to="{ name: 'update-declaration', params: { id: declaration.id } }"
          outline
          no-caps
          class="btn btn-simple items-center q-py-xs col-grow"
        >
          <q-icon size="16px" class="q-mr-sm" name="img:icons/edit.svg" />
          Düzəliş et
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
  name: "DeclarationsList",

  props: {
    declarations: {
      type: Array,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    getStatus() {
      return (noInvoice, stockCustomsView, noCustomsInvoice) => {
        if (
          noInvoice === 1 &&
          stockCustomsView === 0 &&
          noCustomsInvoice === 1
        ) {
          // * Declaration awaits
          return {
            color: "red-2",
            textColor: "negative",
            status: "Bəyan gözləyir",
          };
        } else if (
          noInvoice === 0 &&
          stockCustomsView === 0 &&
          noCustomsInvoice === 1
        ) {
          // * Declaration awaits customs confirmation
          return {
            color: "orange-2",
            textColor: "primary",
            status: "DGK təsdiq gözləyir",
          };
        } else if (
          noInvoice === 0 &&
          stockCustomsView === 1 &&
          noCustomsInvoice === 0
        ) {
          // * Declaration confirmed
          return {
            color: "green-2",
            textColor: "positive",
            status: "Təsdiqlənib",
          };
        }
      };
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

    showDeclarationDetails(declaration) {
      this.$router.push({
        name: "declaration-details",
        params: {
          id: declaration.id,
          declaration: declaration,
        },
      });
    },
  },
};
</script>

<style scoped></style>
