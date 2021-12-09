<template>
  <div class="resourceDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <span class="openPositionTitle">Library Manager</span>
          </div>
          <div class="row">
            <div class="qualificationsDiv">
              <h5>Qualifications</h5>
              <hr>
              <ul class="list-group">
                <li class="list-group-item border-0">Profile: Student</li>
                <li class="list-group-item border-0">
                  Student Number: 64170013
                </li>
                <li class="list-group-item border-0">Name: Yigit</li>
                <li class="list-group-item border-0">
                  Username: yigithakverdi
                </li>
                <li class="list-group-item border-0">
                  Email: yigit.hakverdi@std.medipol.edu.tr
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <!-- <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button id="retrunButton">Return</button>
          </div> -->
          <div class="row">
            <span class="openPositionTitle">Library Manager</span>
          </div>
          <div class="row">
            row 4
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
h5 {
  font-weight: 400;
  padding: 0px !important;
}
.qualificationsDiv{
    margin-top: 40px;
    padding: 0px;
}
.qualificationsSpan {
  padding: 0px;
}
.list-group-item {
  background-color: transparent !important;
  font-family: "Manjari";
  padding: 0px 0px 0px 0px;
}
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
  height: 100%;
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

.openPositionTitle {
  margin-top: 20px;
  width: 419px;
  height: 27px;
  top: 39px;
  padding: 0px 0px 0px 0px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 27px;
  color: #000000;
}
</style>
