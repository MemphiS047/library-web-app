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
button:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset !important;
}
.returnMessageStyle {
  color: #28a745;
  font-weight: bold;
  font-size: 17px;
}
</style>
