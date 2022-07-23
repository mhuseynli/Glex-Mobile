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
          <q-btn @click="copyTrackingId(declaration.trn_number)" round flat>
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
            <p class="field-val flex items-center">
              <q-icon size="16px" class="q-mr-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 4C18 1.79086 16.2091 0 14 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4Z"
                    fill="#E30A17"
                  />
                  <path
                    d="M7.2002 4.5C8.80163 4.5 10.2077 5.33653 11.0052 6.59644C10.3461 5.86193 9.38961 5.4 8.3252 5.4C6.33698 5.4 4.7252 7.01179 4.7252 9C4.7252 10.9882 6.33698 12.6 8.3252 12.6C9.38961 12.6 10.3461 12.1381 11.0052 11.4037C10.2077 12.6634 8.80163 13.5 7.2002 13.5C4.7149 13.5 2.7002 11.4853 2.7002 9C2.7002 6.51471 4.7149 4.5 7.2002 4.5ZM10.7627 9L14.833 10.3225L12.3174 6.86014V11.1399L14.833 7.67745L10.7627 9Z"
                    fill="white"
                  />
                </svg>
              </q-icon>
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
import { Clipboard } from "@capacitor/clipboard";

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
    async copyTrackingId(id) {
      await Clipboard.write({
        string: id,
      });

      this.$q.notify({
        message: "Tracking ID kopyalandı",
        color: "positive",
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
