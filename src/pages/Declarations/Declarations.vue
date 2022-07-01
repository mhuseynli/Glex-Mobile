<template>
  <div class="q-pa-md">
    <DeclarationsList
      :declarations="declarations"
      :is-loading="declarationsLoading"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DeclarationsList from "components/Declarations/DeclarationsList";

export default {
  name: "Declarations",
  components: { DeclarationsList },
  data() {
    return {
      declarations: null,
      declarationsLoading: false,
    };
  },

  async created() {
    this.setPageTitle("Bəyannamələrim ");
    await this.getDeclarations();
  },

  methods: {
    ...mapActions("shared", ["setPageTitle"]),

    async getDeclarations() {
      this.declarationsLoading = true;

      const res = await this.$repositories.get("declarations").declarations();

      if (res.status === 200) {
        const { pre_declarations } = res.data.data;

        this.declarations = pre_declarations;

        this.declarationsLoading = false;
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
