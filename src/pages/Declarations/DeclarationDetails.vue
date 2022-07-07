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
          <q-icon
            size="16px"
            class="q-mr-sm"
            :name="`img:icons/${declaration.image}`"
          />
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
