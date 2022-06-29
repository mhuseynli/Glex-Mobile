<template>
  <q-header class="bg-primary flex items-center menu-header">
    <svg
      class="q-mr-md"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.1954 56H14.7586C6.62069 56 0 49.3793 0 41.1954V14.7586C0 6.62069 6.62069 0 14.7586 0H41.1954C49.3793 0 55.954 6.62069 55.954 14.7586V41.1954C56 49.3793 49.3793 56 41.1954 56Z"
        fill="#24282A"
      />
      <path
        d="M42.9885 28.2759H26.4368L16.5518 13.4253H33.0115L42.9885 28.2759Z"
        fill="#F16025"
      />
      <path
        d="M16.8738 42.5288L33.1956 42.4828L42.9887 28.2759H26.437L16.8738 42.5288Z"
        fill="#F68722"
      />
    </svg>

    <div class="user-details">
      <h2 v-if="userDetails.name" class="primary-detail-title title-white">
        {{ userDetails.name + " " + userDetails.surname }}
      </h2>
      <p
        v-if="userDetails.customer_code"
        class="secondary-detail-title title-white"
      >
        Müştəri kodu: {{ userDetails.customer_code }}
      </p>
    </div>
  </q-header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MenuHeader",

  computed: {
    ...mapGetters("user", ["userDetails"]),
  },
};
</script>

<style scoped></style>
