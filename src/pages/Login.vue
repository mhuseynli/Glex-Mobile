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
      <h1 class="main-title text-center text-dark q-mb-xl full-width">
        Xoş gəlmişsiniz! <br />
        Hesabınıza daxil olun və ya qeydiyyatdan keçin
      </h1>

      <q-form @submit.prevent="onLogin" class="full-width">
        <q-input
          class="q-mb-md"
          type="email"
          v-model="email"
          outlined
          label="Email"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır', isValidEmail]"
        />
        <q-input
          class="q-mb-lg"
          v-model="password"
          outlined
          :type="isPwd ? 'password' : 'text'"
          label="Şifrə"
          :rules="[
            (val) => !!val || 'Bu sahə doldurulmalıdır',
            (val) => val.length >= 6 || 'Şifrə ən az 6 simvol olmalıdır',
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn
          type="submit"
          unelevated
          no-caps
          class="q-mb-md"
          color="primary full-width"
          label="Daxil ol"
        />

        <div class="text-center full-width q-mb-xl">
          <router-link to="/password-recovery">
            Şifrəni unutmusunuz?
          </router-link>
        </div>

        <q-btn
          :to="{ name: 'registration' }"
          unelevated
          outline
          no-caps
          color="primary full-width"
          label="Qeydiyyat"
        />
      </q-form>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
      isPwd: true,
    };
  },
  methods: {
    ...mapActions("user", ["logUserIn"]),

    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return (
        emailPattern.test(this.email) || "Email düzgün formatda daxil olunmayıb"
      );
    },

    async onLogin() {
      const res = await this.$repositories.get("login").login({
        email: this.email,
        password: this.password,
      });

      if (res.status === 200) {
        this.logUserIn(res.data.data);
        // this.loginForm.isLoading = false;
      }

      // else if (res.data.errors) {
      //   this.loginForm.errors = res.data.errors;
      //   this.loginForm.isLoading = false;
      // } else {
      //   this.loginForm.errors.generic = res.data.data.message;
      //   this.loginForm.isLoading = false;
      // }
    },
  },
};
</script>

<style scoped></style>
