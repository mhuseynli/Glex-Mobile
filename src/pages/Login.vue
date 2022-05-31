<template>
  <section id="login">
    <div class="row justify-center">
      <svg
        class="logo-section"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.0805 64H16.867C7.5665 64 0 56.4335 0 47.0805V16.867C0 7.5665 7.5665 0 16.867 0H47.0805C56.4335 0 63.9475 7.5665 63.9475 16.867V47.0805C64 56.4335 56.4335 64 47.0805 64Z"
          fill="#24282A"
        />
        <path
          d="M49.1297 32.3153H30.2135L18.9163 15.3432H37.7274L49.1297 32.3153Z"
          fill="#F16025"
        />
        <path
          d="M19.2843 48.6043L37.9378 48.5518L49.1299 32.3153H30.2137L19.2843 48.6043Z"
          fill="#F68722"
        />
      </svg>
      <text-h1 class="main-title text-center text-dark">
        Xoş gəlmişsiniz! <br />
        Hesabınıza daxil olun vəya qeydiyyatdan keçin
      </text-h1>

      <q-form class="q-gutter-md w-full">
        <q-input outlined v-model="text" label="Outlined" />
      </q-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped></style>
