<template>
  <div class="container reservationDiv">
    <div class="row">
      <div class="d-flex justify-content-center calendarFlexBox">
        <div class="calendarWidthDiv">
          <v-calendar is-expanded :columns="2" />
        </div>
      </div>
    </div>
    <h5 class="CalendarAvailableTitle">Available for Mon, 23 July 2021</h5>
    <div class="row">
      <reservationSection />
    </div>
    <div class="row">
      <reservationSection />
    </div>
    <div class="row">
      <reservationSection />
    </div>
  </div>
</template>

<script>
import reservationSection from "./reservationSection.vue";
export default {
  name: "reservationMainPage",
  components: {
    reservationSection,
  },
};
</script>

<style>
.CalendarAvailableTitle {
  margin-top: 20px;
  font-size: 20px;
  color: rgb(129, 129, 129);
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
}
.calendarFlexBox {
  padding: 0px;
  margin-top: 100px;
}
.calendarWidthDiv {
  width: 900px !important;
}
.reservationDiv {
  width: 900px;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 35px;
}
</style>
