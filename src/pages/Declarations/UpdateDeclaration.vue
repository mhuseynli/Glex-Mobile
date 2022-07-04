<template>
  <section id="declaration-form" class="q-pa-md">
    <q-form class="bg-white rounded-borders q-pa-md" @submit.prevent>
      <q-input
        type="text"
        v-model="trn_number"
        outlined
        label="İzləmə nömrəsi (Tracking ID)"
        :rules="[(val) => !!val || 'Bu sahə doldurulmalıdır']"
      />

      <q-select
        outlined
        v-model="selectedCategory"
        :options="['1', '2']"
        label="Məhsulun kateqoriyası"
      />
    </q-form>

    <ButtonFooter text="Göndər" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import ButtonFooter from "components/ButtonFooter";

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
      note: null,
      selectedCategory: [],
      selectedBranch: null,
      categories: [],
      branches: [],
      errors: {},
      isLoading: false,
    };
  },

  async created() {
    this.setPageTitle("Bəyan et");
    this.setButtonFooter(true);
    // await this.onGetBranches();
    // await this.onGetCategories();
    await this.onGetDeclaration();
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
        this.note = declaration.note;
        this.store = declaration.shop;

        // this.selected_branch = this.branches.find(
        //   (b) => b.id === declaration.branch_id_default
        // );

        // declaration.category_id.forEach((c) => {
        //   this.selected_category.push(this.categories.find((k) => k.id == c));
        // });
      } else {
        this.$q.notify({
          message: "Xəta baş verdi.",
          color: "red",
        });
      }
    },
  },
};
</script>

<style scoped></style>
