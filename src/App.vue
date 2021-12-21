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
    secondarynavbar,
  },
};
</script>

<style>
.col-10 {
  width: 100% !important;
}
span {
  width: 400px;
  height: 33px;
  left: 31px;
  top: 33px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 33px;
  color: #000000;
}
</style>
