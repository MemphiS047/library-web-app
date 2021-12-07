<template>
  <div class="resourceDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <span class="resourceTitle">Room A</span>
          </div>
          <div class="row">
            <span class="resourceAuthor">10:00 - 11:00</span>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button id="retrunButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilepageItemSection",
};
</script>

<style>
.resourceSectionFlex {
  margin-top: 5px;
}
#retrunButton {
  width: 107px;
  height: 50px;
  background-color: #630d0d !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
.resourceDiv {
  width: 100%;
  height: 100px;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.resourceAuthor {
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
}

.resourceTitle {
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
}
span {
  /* Anouncements & News */

  width: 400px;
  height: 33px;
  left: 31px;
  top: 33px;

  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 33px;

  /* identical to box height */

  color: #000000;
}
</style>
