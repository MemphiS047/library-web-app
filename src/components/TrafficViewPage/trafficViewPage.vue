<template>
  <div>
    <div class="trafficViewPage">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">
              <span class="trafficViewTitle">Library Crowdness</span>
              <div id="appProgressBar">
                <label>Kavacik North Campus</label>
                <div class="progress">
                  <div
                    class="progress__fill_lib1"
                    v-bind:style="{ width: computedWith1 }"
                  ></div>
                  <span class="progress__text">{{ lib1_traffic }}%</span>
                </div>
              </div>
              <div id="appProgressBar">
                <label>Kavacik South Campus</label>
                <div class="progress">
                  <div
                    class="progress__fill_lib2"
                    v-bind:style="{ width: computedWith2 }"
                  ></div>
                  <span class="progress__text">{{ lib2_traffic }}%</span>
                </div>
              </div>
              <div id="appProgressBar">
                <label>Halic Campus</label>
                <div class="progress">
                  <div
                    class="progress__fill_lib3"
                    v-bind:style="{ width: computedWith3 }"
                  ></div>
                  <span class="progress__text">{{ lib3_traffic }}%</span>
                </div>
              </div>
              <span class="trafficViewTitle">Computer Availability</span>
              <div id="appProgressBar">
                <label>Kavacik North Campus</label>
                <br>
                <label> Available computers : {{ comp1 }}</label>
              </div>
              <div id="appProgressBar">
                <label>Kavacik South Campus</label>
                <br>
                <label>Available computers : {{ comp2 }}</label>
              </div>
              <div id="appProgressBar">
                <label>Halic Campus</label>
                <br>
                <label>Available computers : {{ comp3 }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lib1_traffic: 0,
      lib2_traffic: 0,
      lib3_traffic: 0,
      width1: "50%",
      width2: "50%",
      width3: "50%",
      comp1: 0,
      comp2: 0,
      comp3: 0,
    };
  },
  computed: {
    computedWith1: function () {
      return this.width1;
    },
    computedWith2: function () {
      return this.width2;
    },
    computedWith3: function () {
      return this.width3;
    },
  },
  methods: {
    changeWidth1(random_number) {
      this.width1 = `${random_number}%`;
    },
    changeWidth2(random_number) {
      this.width2 = `${random_number}%`;
    },
    changeWidth3(random_number) {
      this.width3 = `${random_number}%`;
    },
  },
  mounted: function () {
    console.log("DENEME");
    axios.get("http://127.0.0.1:5000/api/traffic").then((response) => {
      console.log(response.data);
      this.lib1_traffic = response.data["lib1_traffic"];
      this.lib2_traffic = response.data["lib2_traffic"];
      this.lib3_traffic = response.data["lib3_traffic"];
      this.changeWidth1(this.lib1_traffic);
      this.changeWidth2(this.lib2_traffic);
      this.changeWidth3(this.lib3_traffic);
    });
    axios.get("http://127.0.0.1:5000/api/trafficComp").then((response) => {
      console.log(response.data);
      this.comp1 = response.data["comp1_available"];
      this.comp2 = response.data["comp2_available"];
      this.comp3 = response.data["comp3_available"];
    });
  },
};
</script>

<style>
#appProgressBar {
  margin-top: 50px;
}
.trafficViewPage {
  width: 100%;
  height: 100%;
  padding: 20px !important;
  margin-top: 120px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.trafficViewTitle {
  margin-top: 20px;
  width: auto !important;
  height: 27px;
  top: 39px;
  padding: auto;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 27px;
  color: #000000;
}
.progress {
  position: relative;
  width: 210px;
  height: 30px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;
  border: solid black;
  border-width: 1px;
}

.progress__fill_lib1 {
  /* width: 0%; */
  height: 100%;
  background: #009579;
  transition: all 0.2s;
}
.progress__fill_lib2 {
  /* width: 0%; */
  height: 100%;
  background: #009579;
  transition: all 0.2s;
}
.progress__fill_lib3 {
  /* width: 0%; */
  height: 100%;
  background: #009579;
  transition: all 0.2s;
}

.progress__text {
  position: absolute;
  top: 70%;
  right: 5px;
  transform: translateY(-50%);
  font: bold 14px "Quicksand", sans-serif;
  color: #ffffff;
}
</style>
