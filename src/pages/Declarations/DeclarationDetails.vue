<template>
  <div class="q-pa-md">
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

    </q-card>
    <ButtonFooter text="Düzəliş et" icon="edit-white" />
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
      required: true,
    },
  },

  created() {
    this.setPageTitle("Bəyannamənin detalları");
    this.setButtonFooter(true);
  },

  destroyed() {
    this.setButtonFooter(false);
  },

  methods: {
    ...mapActions("shared", ["setPageTitle", "setButtonFooter"]),
  },
};
</script>

<style scoped></style>
