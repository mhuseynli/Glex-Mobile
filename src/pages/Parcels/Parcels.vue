<template>
  <div class="q-pa-md">
    <div v-if="!headingsLoading" class="product-status">
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

    <div class="flex q-mb-md q-gutter-sm no-wrap" v-else>
      <q-skeleton height="100px" width="116px" type="rect" />
      <q-skeleton height="100px" width="116px" type="rect" />
      <q-skeleton height="100px" width="116px" type="rect" />
    </div>

    <ParcelsList :parcels="parcels" :isLoading="parcelsLoading" />
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
    ParcelsList,
  },

  data() {
    return {
      headings: null,
      headingsLoading: false,
      activeStatusId: null,
      parcels: null,
      parcelsLoading: false,
    };
  },

  async created() {
    this.setPageTitle("Bağlamalarım");
    await this.getHeaders();
    await this.getByStatusId(4);
  },

  methods: {
    ...mapActions("shared", ["setPageTitle"]),

    async getHeaders() {
      this.headingsLoading = true;
      const res = await this.$repositories.get("declarations").headings();

      if (res.status === 200) {
        this.headings = res.data.data.declaration_headers;
        this.headingsLoading = false;
      } else {
        this.$q.notify({
          message: "Xəta baş verdi.",
          color: "red",
        });
      }
    },

    async getByStatusId(id) {
      if (id !== this.activeStatusId) {
        this.parcelsLoading = true;
        const res = await this.$repositories
          .get("declarations")
          .getByStatusId(id);

        const { declarations } = res.data.data;

        if (res.status === 200) {
          this.parcelsLoading = false;
          this.activeStatusId = id;

          this.parcels = declarations;
          this.parcels.forEach((i) => {
            i.checked = false;
          });
        }
      }
    },
  },
};
</script>

<style scoped></style>
