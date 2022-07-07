<template>
  <section id="declaration-form" class="q-pa-md">
    <q-form
      v-if="!isLoading"
      class="bg-white rounded-borders q-pa-md"
      @submit.prevent
    >
      <q-badge
        v-if="isLiquid"
        color="blue-2"
        text-color="blue"
        label="Bu məhsul mayedir"
        class="q-pa-sm q-mb-md"
      />

      <q-input
        class="q-mb-sm"
        type="text"
        v-model="trn_number"
        outlined
        label="İzləmə nömrəsi (Tracking ID)"
        :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
      />

      <q-select
        class="q-mb-sm"
        multiple
        outlined
        option-label="category_name"
        v-model="selectedCategory"
        :options="categories"
        label="Məhsulun kateqoriyası"
        :rules="[(val) => val.length > 0 || 'Bu sahə doldurulmalıdır']"
      />

      <q-input
        class="q-mb-sm"
        type="text"
        v-model="store"
        outlined
        label="Mağaza"
        :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
      />

      <q-input
        class="q-mb-sm"
        type="number"
        v-model="count"
        outlined
        label="Məhsul sayı"
        :rules="[
          (val) => !!val || 'Bu sahə doldurulmalıdır',
          (val) => val > 0 || 'Say sıfırdan böyük olmalıdır',
        ]"
      />

      <q-input
        class="q-mb-sm"
        type="number"
        v-model="invoicePrice"
        outlined
        label="İnvoys qiyməti"
        :rules="[
          (val) => !!val || 'Bu sahə doldurulmalıdır',
          (val) => val > 0 || 'Qiymət sıfırdan böyük olmalıdır',
        ]"
      />

      <q-select
        class="q-mb-sm"
        outlined
        disable
        option-label="name"
        v-model="selectedBranch"
        :options="branches"
        label="Götürəcəyiniz filial"
        :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
      />

      <q-input type="textarea" v-model="note" outlined label="Əlavə qeyd" />
    </q-form>

    <div class="bg-white rounded-borders q-pa-md" v-else>
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
      <q-skeleton class="q-mb-md rounded-borders" type="QInput" />
    </div>

    <ButtonFooter @onButtonClick="onSaveDeclaration" text="Göndər" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import ButtonFooter from "components/ButtonFooter";
import { QSpinnerOval } from "quasar";

export default {
  name: "UpdateDeclaration",
  components: { ButtonFooter },
  data() {
    return {
      id: null,
      trn_number: null,
      store: null,
      count: null,
      invoicePrice: null,
      // pickup_branch: null,
      isLiquid: null,
      note: null,
      selectedCategory: [],
      selectedBranch: null,
      categories: [],
      branches: [],
      errors: {},
      isLoading: true,
    };
  },

  async created() {
    this.setPageTitle("Bəyan et");

    await this.onGetBranches();
    await this.onGetCategories();
    await this.onGetDeclaration();
  },

  mounted() {
    this.setButtonFooter(true);
  },

  destroyed() {
    this.setButtonFooter(false);
  },

  methods: {
    ...mapActions("shared", ["setPageTitle", "setButtonFooter"]),

    async onGetDeclaration() {
      const res = await this.$repositories
        .get("declarations")
        .getDeclaration(this.$route.params.id);

      if (res.status === 200) {
        const { declaration } = res.data.data;

        this.id = declaration.id;
        this.trn_number = declaration.trn_number;
        this.count = declaration.count;
        this.invoicePrice = declaration.price;
        this.isLiquid = declaration.has_liquid !== 0;
        this.note = declaration.note_desc;
        this.store = declaration.shop;

        this.selectedBranch = this.branches.find(
          (b) => b.id === declaration.branch_id_default
        );

        declaration.category_id.forEach((c) => {
          this.selectedCategory.push(this.categories.find((k) => k.id == c));
        });

        this.isLoading = false;
      } else {
        this.$q.notify({
          message: res.data.data.message,
          color: "red",
        });
        await this.$router.push({
          name: "declarations",
        });
      }
    },

    async onGetCategories() {
      const res = await this.$repositories.get("declarations").getCategories();

      if (res.status === 200) {
        this.categories = res.data.data.declaration_category;
      }
    },

    async onGetBranches() {
      const res = await this.$repositories.get("declarations").branches();

      if (res.status === 200) {
        this.branches = res.data.data;
      }
    },

    async onSaveDeclaration() {
      this.$q.loading.show({
        spinner: QSpinnerOval,
        spinnerColor: "primary",
        spinnerSize: 60,
        backgroundColor: "black",
      });

      const res = await this.$repositories.get("declarations").saveDeclaration({
        trn_number: this.trn_number,
        shop: this.store,
        count: this.count,
        declarationBalanceTr: this.invoicePrice,
        note_desc: this.note,
        declaration_id: this.id,
        categories: this.selectedCategory.map((c) => c.id),
      });

      if (res.status === 200) {
        this.$q.loading.hide();
        this.$q.notify({
          message: res.data.data.message,
          color: "positive",
        });
        await this.$router.push({
          name: "declarations",
        });
      } else if (res.data.errors) {
        this.$q.loading.hide();
        this.$q.notify({
          message: "Zəhmət olmasa boşluqları doldurun",
          color: "red",
          position: "bottom",
        });
      } else {
        this.$q.notify({
          message: "Xəta baş verdi.",
          color: "red",
        });
        await this.$router.push({
          name: "declarations",
        });
      }
    },
  },
};
</script>

<style scoped></style>
