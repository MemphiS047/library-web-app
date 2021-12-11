<template>
  <div>
    <navbar />
    <secondarynavbar />

    <!-- OPEN POSITIONS LIST -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10 profilePageCol">
          <div class="profilePageTitles">
            <span>Open Positions</span>
          </div>
          <div class="row">
            <positionsPageSectionVue />
          </div>
          <div class="row">
            <positionsPageSectionVue />
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./../navbar.vue";
import secondarynavbar from "./../secondarynavbar.vue";
import positionsPageSectionVue from "./positionsPageSection.vue";
export default {
  name: "positionsPage",
  components: {
    navbar,
    secondarynavbar,
    positionsPageSectionVue,
  },
};
</script>

<style>
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

.profilePageTitles {
  margin-top: 150px;
}

.profilePageCol {
  width: 100% !important;
}
</style>
