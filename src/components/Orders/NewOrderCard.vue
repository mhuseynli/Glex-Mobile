<template>
  <q-card class="order-card bg-white q-py-sm q-px-xs">
    <q-card-section class="order-card__head">
      <h2>Məhsul #1</h2>
      <q-btn
        color="accent"
        text-color="grey"
        icon="close"
        size="sm"
        round
        unelevated
      />
    </q-card-section>

    <q-card-section>
      <q-form>
        <q-input
          class="q-mb-sm"
          type="text"
          outlined
          label="Məhsulun linki"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        >
          <template v-slot:append>
            <q-icon size="20px" name="img:icons/link.svg" />
          </template>
        </q-input>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "NewOrderCard",
};
</script>

<style scoped></style>
