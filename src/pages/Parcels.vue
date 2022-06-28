<template>
  <div class="q-pa-md">
    <div v-if="headings" class="product-status">
      <div
        v-for="heading in headings"
        :key="heading.id"
        class="product-status__item"
        :class="activeStatusId == heading.id ? 'active' : ''"
        @click="getByStatusId(heading.id)"
      >
        <HeadingIcons :slug="heading.slug" />
        <p class="status-title">{{ heading.name }}</p>
        <span
          class="status-count"
          :class="heading.order_count > 0 ? 'active' : ''"
        >
          {{ heading.order_count }}
        </span>
      </div>
    </div>

    <ParcelsList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeadingIcons from "components/Parcels/HeadingIcons";
import ParcelsList from "components/Parcels/ParcelsList";

export default {
  name: "Parcels",

  components: {
    HeadingIcons,
    ParcelsList
  },

  data() {
    return {
      headings: null,
      activeStatusId: null,
      declarations: null,
    };
  },

  async created() {
    await this.getHeaders();
    await this.getByStatusId(4);
    this.setPageTitle("Bağlamalarım");
  },

  methods: {
    ...mapActions("shared", ["setPageTitle"]),

    async getHeaders() {
      const res = await this.$repositories.get("declarations").headings();

      if (res.status === 200) {
        this.headings = res.data.data.declaration_headers;
      } else {
        this.$q.notify({
          message: "Xəta baş verdi.",
          color: "red",
        });
      }
    },

    async getByStatusId(id) {
      const res = await this.$repositories
        .get("declarations")
        .getByStatusId(id);

      const { declarations } = res.data.data;

      if (res.status === 200) {
        this.activeStatusId = id;

        this.declarations = declarations;
        this.declarations.forEach((i) => {
          i.checked = false;
        });
      }
    },
  },
};
</script>

<style scoped></style>
