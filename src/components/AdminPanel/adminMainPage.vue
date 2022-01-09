<template>
  <div>
    <div class="adminPageTitle">
      <span>Admin Panel</span>
    </div>
    <adminAddBookForm />
    <adminPositionAddSection />
    <adminCheckStatusForm />
  </div>
</template>

<script>
import adminAddBookForm from "./adminAddBookForm.vue";
import adminCheckStatusForm from "./adminCheckStatusForm.vue";
import adminPositionAddSection from "./adminPositionAddSection.vue";
export default {
  name: "adminMainPage",
  components: {
    adminAddBookForm,
    adminCheckStatusForm,
    adminPositionAddSection
  },
};
</script>

<style>
.adminPageTitle {
  margin-top: 120px !important;
}
</style>
