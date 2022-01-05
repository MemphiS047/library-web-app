<template>
  <div>
    <div class="adminPageTitle">
      <span>Admin Panel</span>
    </div>
    <adminAddBook />
    <positionAddSection />
    <adminStatusSection />
  </div>
</template>

<script>
import adminAddBook from "./adminAddBook.vue";
import adminStatusSection from "./adminStatusSection.vue";
import positionAddSection from "./positionAddSection.vue";
export default {
  name: "positionsPage",
  components: {
    adminAddBook,
    adminStatusSection,
    positionAddSection
  },
  data() {
    return {
      queryResult: [],
    };
  },
};
</script>

<style>
.adminPageTitle {
  margin-top: 120px !important;
}
</style>
