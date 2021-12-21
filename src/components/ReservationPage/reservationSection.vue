<template>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle"
              >10:00 am &#8594; 12:00 am</h5
            >
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button id="reserveButton">Reserve</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservationSection",
};
</script>

<style>
.resourceSectionFlex {
  margin-top: 5px;
}
#reserveButton {
  width: 107px;
  height: 50px;
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;
  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
.reservationSectionDiv {
  width: 100%;
  height: 100px;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.reservationSectionTitle {
  margin-top: 20px;
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
}
</style>
