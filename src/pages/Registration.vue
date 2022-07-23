<template>
  <section id="registration">
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
        Qeydiyyat
      </h1>

      <q-form class="full-width">
        <q-input
          class="q-mb-md"
          type="text"
          v-model="name"
          outlined
          label="Ad"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        />
        <q-input
          class="q-mb-md"
          type="text"
          v-model="surname"
          outlined
          label="Soyad"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
        />
        <q-input
          class="q-mb-md"
          type="email"
          v-model="email"
          outlined
          label="Email"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır', isValidEmail]"
        />
        <q-input
          outlined
          color="secondary"
          class="q-mb-lg"
          v-model="phone"
          label="Mobil nömrə"
          fill-mask
          mask="+994 (##) ### - ## - ##"
          hint="Nömrənin dəqiq olduğuna əmin olun, təsdiqləmə nömrə üzərindən aparılacaq"
          :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
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
        <q-input
          class="q-mb-xs"
          v-model="password_repeat"
          outlined
          :type="isPwd_repeat ? 'password' : 'text'"
          label="Şifrə"
          :rules="[
            (val) => !!val || 'Bu sahə doldurulmalıdır',
            (val) =>
              val === password || 'Şifrə və şifrə təkrarı eyni olmalıdır',
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd_repeat ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd_repeat = !isPwd_repeat"
            />
          </template>
        </q-input>

        <div class="row items-center q-mb-md">
          <q-checkbox size="lg" v-model="agree_terms" color="green-14" />
          <div>
            <span @click="terms_dialog = true" class="text-info link-info"
              >İstifadəçi şərtləri
            </span>
            ilə razıyam
          </div>
        </div>

        <q-btn
          type="submit"
          unelevated
          no-caps
          class="q-mb-md"
          color="primary full-width rounded-borders"
          label="Qeydiyyatı bitir"
        />

        <div class="text-center full-width q-mb-xl">
          <router-link :to="{ name: 'login' }">
            Hesabınız var? Daxil olun
          </router-link>
        </div>
      </q-form>
    </div>

    <q-dialog v-model="terms_dialog" position="bottom">
      <q-card class="full-width terms-dialog">
        <q-card-section class="q-pa-none q-mb-md">
          <h2 class="secondary-title">İstifadəçi şərtləri</h2>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <p class="content">
            1.İstifadəçi Razılaşmasının predmeti. 1.1. “RAYTECH MMC” Şirkəti
            (bundan sonra – “İcraçı”) İcraçının Dünyanın müxtəlif ölkələrində
            yerləşən anbarlarından hazırkı İstifadəçi Razılaşmasının (bundan
            sonra – “Razılaşma”) şərtlərinə uyğun olaraq www.glex.az saytında
            qeydiyyatdan keçən yetkinlik yaşına çatmış fiziki və hüquqi şəxs
            (bundan sonra - “Müştəri”) üçün malların (bundan sonra mal və ya
            bağlama) çatdırılması üzrə xidmətləri (bundan sonra - “Xidmətlər”)
            həyata keçirir. 1.2. “www.glex.az” üzərindən qeydiyyat ödənişsizdir
            və sərbəstdir. Qeydiyyat www.glex.az saytında həyata keçirilir.
            Səhifə üzərində qeydiyyatdan keçməklə Müştəri hazırkı Razılaşmanın
            və onun bütün əlavələrinin qəbul edilməsini bildirir. 1.İstifadəçi
            Razılaşmasının predmeti. 1.1. “RAYTECH MMC” Şirkəti (bundan sonra –
            “İcraçı”) İcraçının Dünyanın müxtəlif ölkələrində yerləşən
            anbarlarından hazırkı İstifadəçi Razılaşmasının (bundan sonra –
            “Razılaşma”) şərtlərinə uyğun olaraq www.glex.az saytında
            qeydiyyatdan keçən yetkinlik yaşına çatmış fiziki və hüquqi şəxs
            (bundan sonra - “Müştəri”) üçün malların (bundan sonra mal və ya
            bağlama) çatdırılması üzrə xidmətləri (bundan sonra - “Xidmətlər”)
            həyata keçirir. 1.2. “www.glex.az” üzərindən qeydiyyat ödənişsizdir
            və sərbəstdir. Qeydiyyat www.glex.az saytında həyata keçirilir.
            Səhifə üzərində qeydiyyatdan keçməklə Müştəri hazırkı Razılaşmanın
            və onun bütün əlavələrinin qəbul edilməsini bildirir. 1.İstifadəçi
            Razılaşmasının predmeti. 1.1. “RAYTECH MMC” Şirkəti (bundan sonra –
            “İcraçı”) İcraçının Dünyanın müxtəlif ölkələrində yerləşən
            anbarlarından hazırkı İstifadəçi Razılaşmasının (bundan sonra –
            “Razılaşma”) şərtlərinə uyğun olaraq www.glex.az saytında
            qeydiyyatdan keçən yetkinlik yaşına çatmış fiziki və hüquqi şəxs
            (bundan sonra - “Müştəri”) üçün malların (bundan sonra mal və ya
            bağlama) çatdırılması üzrə xidmətləri (bundan sonra - “Xidmətlər”)
            həyata keçirir. 1.2. “www.glex.az” üzərindən qeydiyyat ödənişsizdir
            və sərbəstdir. Qeydiyyat www.glex.az saytında həyata keçirilir.
            Səhifə üzərində qeydiyyatdan keçməklə Müştəri hazırkı Razılaşmanın
            və onun bütün əlavələrinin qəbul edilməsini bildirir.
          </p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
export default {
  name: "Registration",

  data() {
    return {
      name: null,
      surname: null,
      phone: null,
      email: null,
      password: null,
      password_repeat: null,
      isPwd: true,
      isPwd_repeat: true,

      agree_terms: false,
      terms_dialog: false,
    };
  },
  // async created() {
  //   const res = await this.$repositories.get("common").about();
  //   console.log(res);
  // },
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return (
        emailPattern.test(this.email) || "Email düzgün formatda daxil olunmayıb"
      );
    },
  },
};
</script>

<style scoped></style>
