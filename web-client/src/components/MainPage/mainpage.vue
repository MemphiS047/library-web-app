<template>
  <div>
    <div>
      <searchsection />
      <mainpageAnnouncements />
    </div>
  </div>
</template>
<script>
import searchsection from "./searchsection.vue";
import mainpageAnnouncements from "./mainpageAnnouncements.vue";

export default {
  name: "mainpage",
  components: {
    searchsection,
    mainpageAnnouncements,
  },
};
</script>

<style>
html {
  background-color: #f0f0f0 !important;
}
</style>
