<template>
  <q-header class="bg-white page-header">
    <div class="row justify-between items-center">
      <q-btn @click="$router.go(-1)" round color="black" size="md" dense flat icon="keyboard_backspace" />

      <h2 class="page-header__title">{{ pageTitle }}</h2>

      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6654 21.4368H8.6437C7.82995 21.4368 7.13639 20.8421 6.99992 20.0295L4.06983 2.57185C4.00354 2.17899 3.80244 1.82252 3.50203 1.56541C3.20162 1.30829 2.82125 1.16707 2.42809 1.16669H1.33325"
          stroke="#585C5E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.38587 16.3685H19.7968C20.5402 16.3684 21.2621 16.1165 21.848 15.6528C22.4339 15.189 22.8501 14.5401 23.0304 13.8091L24.6416 7.27675C24.6725 7.15207 24.6748 7.02191 24.6485 6.89617C24.6222 6.77043 24.568 6.65243 24.4899 6.55116C24.4118 6.44989 24.312 6.36803 24.1979 6.31181C24.0839 6.25559 23.9587 6.2265 23.8319 6.22675H4.68506"
          stroke="#585C5E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <ellipse
          cx="17.5826"
          cy="25.2847"
          rx="1.52768"
          ry="1.54868"
          fill="#585C5E"
        />
        <ellipse
          cx="9.43491"
          cy="25.2847"
          rx="1.52768"
          ry="1.54868"
          fill="#585C5E"
        />
      </svg>
    </div>
  </q-header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "InnerPageHeader",

  computed: {
    ...mapGetters("shared", ["pageTitle"]),
  },
};
</script>

<style scoped></style>
