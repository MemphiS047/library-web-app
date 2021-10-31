<template>
  <div>
    <navbar />
    <secondarynavbar />
    <!-- MAIN PAGE SEARCH SECTION -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10">
          <searchsection />
        </div>
        <div class="col-3"></div>
      </div>
    </div>
    
    <!-- MAIN PAGE CONTENT -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10">
          Deneme
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
import secondarynavbar from "./secondarynavbar.vue";
import searchsection from "./searchsection.vue";
export default {
  name: "mainpage",
  components: {
    navbar,
    secondarynavbar,
    searchsection,
  },
};
</script>

<style>
html {
  background-color: #f0f0f0 !important;
}
</style>
