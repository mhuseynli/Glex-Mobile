<template>
  <q-page class="q-pa-md">
    <div class="user-details">
      <h2 class="primary-detail-title">Murad Huseynli</h2>
      <p class="secondary-detail-title">Müştəri kodu: GX00123</p>
    </div>

    <UserStatistics />
    <PageLinks class="q-mt-xl" />
  </q-page>
</template>

<script>
import UserStatistics from "components/Home/UserStatistics";
import PageLinks from "components/Home/PageLinks";

export default {
  name: "HomePage",
  components: {
    UserStatistics,
    PageLinks,
  },
};
</script>
