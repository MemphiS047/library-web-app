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
              <hr />
              <ul class="list-group">
                <li class="list-group-item border-0">At least 5 years of experience as a librarian</li>
                <li class="list-group-item border-0">
                  Having a History Degree or Studying History (Optional)
                </li>
                <li class="list-group-item border-0">Foreign Language : French and Latin Preferred</li>
                <li class="list-group-item border-0">
                  Good social and communication skills
                </li>
                <li class="list-group-item border-0">
                  Excelent leadership
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
            <div class="d-flex justify-content-end">
              <span class="openPositionLocationTitle">North Campus</span>
            </div>
          </div>
          <div class="row openPositionButtonCol">
            <div
              class="d-flex flex-column-reverse align-items-end bd-hghlight openPositionButtonSection"
            >
              <button id="applyButton">Apply</button>
            </div>
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
.openPositionButtonCol{
  height: 200px;
}
.openPositionButtonSection{
  height: 100%;
}
#applyButton {
  width: 107px;
  height: 50px;
  background-color: #0d1e63 !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.openPositionLocationTitle {
  width: 200px;
}
h5 {
  font-weight: 400;
  padding: 0px !important;
}
.qualificationsDiv {
  margin-top: 35px !important;
  padding: 0px;
}
.qualificationsSpan {
  padding: 0px;
}
.list-group-item {
  background-color: transparent !important;
  font-family: "Manjari";
  padding: 0px 0px 0px 0px !important;
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
