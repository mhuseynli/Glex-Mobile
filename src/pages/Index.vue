<template>
  <q-page class="q-pa-md">
    <div class="user-details">
      <h2 v-if="userDetails.name" class="primary-detail-title">
        {{ userDetails.name + " " + userDetails.surname }}
      </h2>
      <q-skeleton v-else height="22px" width="150px" type="rect" class="q-mb-sm" />
      <p v-if="userDetails.customer_code" class="secondary-detail-title">
        Müştəri kodu: {{ userDetails.customer_code }}
      </p>

      <q-skeleton v-else height="18px" width="190px" type="rect" />
    </div>

    <UserStatistics />
    <PageLinks class="q-mt-xl" />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import UserStatistics from "components/Home/UserStatistics";
import PageLinks from "components/Home/PageLinks";

export default {
  name: "HomePage",
  components: {
    UserStatistics,
    PageLinks,
  },

  computed: {
    ...mapGetters("user", ["userDetails"]),
  },
};
</script>
