<template>
  <section id="new-order" class="q-pa-md">
    <NewOrderCard />
  </section>
</template>

<script>
import NewOrderCard from "components/Orders/NewOrderCard";
export default {
  name: "NewOrder",
  components: { NewOrderCard },
};
</script>

<style scoped></style>
