<template>
  <main>
    <navbar />
    <secondarynavbar />
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10">
          <router-view></router-view>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
import navbar from "./components/navbar.vue";
import secondarynavbar from "./components/secondarynavbar.vue";
export default {
  name: "App",
  components: {
    navbar,
    secondarynavbar
  },
};
</script>

<style></style>
