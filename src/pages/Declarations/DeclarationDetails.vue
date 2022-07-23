<template>
  <div v-if="declaration" class="q-pa-md">
    <q-card class="details-card">
      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> İzləmə nömrəsi </span>
        <span class="field-val">
          {{ declaration.trn_number_system }} <br />
          {{ declaration.trn_number }}
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Ölkə / Mağaza </span>
        <span class="field-val flex items-center">
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
          {{ declaration.shop }}
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Məhsulun kateqoriyası </span>
        <span class="field-val">
          {{ declaration.category_name }}
        </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Sayı </span>
        <span class="field-val"> {{ declaration.count }} ədəd </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> İnvoys qiyməti </span>
        <span class="field-val"> {{ declaration.price }} TL </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Çatdırılma haqqı </span>
        <span class="field-val"> {{ declaration.cargo_price }} AZN </span>
      </q-card-section>

      <q-separator />

      <q-card-section class="flex justify-between items-center">
        <span class="field-desc"> Status </span>
        <span class="field-val">
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
        </span>
      </q-card-section>
    </q-card>
    <ButtonFooter
      v-if="
        declaration.noInvoice === 1 &&
        declaration.stockCustomsView === 0 &&
        declaration.noCustomsInvoice === 1
      "
      text="Düzəliş et"
      icon="edit-white"
      @onButtonClick="openUpdateDeclaration(declaration.id)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ButtonFooter from "components/ButtonFooter";

export default {
  name: "DeclarationDetails",
  components: { ButtonFooter },
  props: {
    declaration: {
      type: Object,
      default: null,
    },
  },

  created() {
    this.setPageTitle("Bəyannamənin detalları");

    if (!this.declaration) {
      this.$router.push({ name: "declarations" });
    }
  },

  mounted() {
    this.setButtonFooter(true);
  },

  destroyed() {
    this.setButtonFooter(false);
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
    ...mapActions("shared", ["setPageTitle", "setButtonFooter"]),

    openUpdateDeclaration(id) {
      this.$router.push({
        name: "update-declaration",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped></style>
