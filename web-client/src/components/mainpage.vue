<template>
  <div>
    <navbar />
    <secondarynavbar />
    <div class="container">
      <div class="row">
        <div class="col">
        </div>
        <div class="col-12">
          <searchsection />
        </div>
        <div class="col">
        </div>
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
