<template>
  <q-footer class="q-px-md q-py-lg button-footer">
    <q-btn color="primary" class="full-width rounded-borders" no-caps unelevated>
      {{ text }}
      <q-icon v-if="icon" size="24px" class="q-ml-sm" :name="`img:icons/${icon}.svg`" />
    </q-btn>
  </q-footer>
</template>

<script>
export default {
  name: "ButtonFooter",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped></style>
