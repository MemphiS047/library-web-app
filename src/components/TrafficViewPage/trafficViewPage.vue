<template>
  <div>
    <div class="trafficViewPage">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="child">
              <h1 class="trafficViewTitle">Campus</h1>
              <div class="column">
                <div id="campus">
                  <h5>Kavacik North Campus</h5>
                </div>
                <div id="campus">
                  <h5>Kavacik South Campus</h5>
                </div>
                <div id="campus">
                  <h5>Halic Campus</h5>
                </div>
              </div>
            </div>
            <div class="child">
              <h1 class="trafficViewTitle">Library Crowdness</h1>
              <div class="column2">
                <div id="appProgressBar">
                  <div class="progress">
                    <div
                      class="progress__fill_lib1"
                      v-bind:style="{
                        width: computedWith1,
                        background: barColor1,
                      }"
                    ></div>
                  </div>
                </div>
                <div id="appProgressBar">
                  <div class="progress">
                    <div
                      class="progress__fill_lib2"
                      v-bind:style="{
                        width: computedWith2,
                        background: barColor2,
                      }"
                    ></div>
                  </div>
                </div>
                <div id="appProgressBar">
                  <div class="progress">
                    <div
                      class="progress__fill_lib3"
                      v-bind:style="{
                        width: computedWith3,
                        background: barColor3,
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="child">
              <h1 class="trafficViewTitle">Computer Availability</h1>
              <div class="column">
                <div id="computerNumber">
                  <img
                    class="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg"
                    alt="computerIcon"
                  />
                  <label> {{ comp1 }}</label>
                </div>
                <div id="computerNumber">
                  <img
                    class="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg"
                    alt="computerIcon"
                  />
                  <label> {{ comp2 }}</label>
                </div>
                <div id="computerNumber">
                  <img
                    class="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg"
                    alt="computerIcon"
                  />
                  <label> {{ comp3 }}</label>
                </div>
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
      barColor1: "",
      barColor2: "",
      barColor3: "",
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
    changeBarColor1: function () {
      this.calculateStyleChange();
      return this.barColor1;
    },
    changeBarColor2: function () {
      this.calculateStyleChange();
      return this.barColor2;
    },
    changeBarColor3: function () {
      this.calculateStyleChange();
      return this.barColor3;
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
    changeColor1() {
      if (this.lib1_traffic > 0 && this.lib1_traffic < 30) {
        this.barColor1 = "#33cc33";
      } else if (this.lib1_traffic > 31 && this.lib1_traffic < 70) {
        this.barColor1 = "#ffcc00";
      } else {
        this.barColor1 = "#990000";
      }
    },
    changeColor2() {
      if (this.lib2_traffic > 0 && this.lib2_traffic < 30) {
        this.barColor2 = "#33cc33";
      } else if (this.lib2_traffic > 31 && this.lib2_traffic < 70) {
        this.barColor2 = "#ffcc00";
      } else {
        this.barColor2 = "#990000";
      }
    },
    changeColor3() {
      if (this.lib3_traffic > 0 && this.lib3_traffic < 30) {
        this.barColor3 = "#33cc33";
      } else if (this.lib3_traffic > 31 && this.lib3_traffic < 70) {
        this.barColor3 = "#ffcc00";
      } else {
        this.barColor3 = "#990000";
      }
    },
  },
  mounted: function () {
    console.log("DENEME");
    axios.get("http://192.168.0.24:5000/api/traffic").then((response) => {
      console.log(response.data);
      this.lib1_traffic = response.data["lib1_traffic"];
      this.lib2_traffic = response.data["lib2_traffic"];
      this.lib3_traffic = response.data["lib3_traffic"];
      this.changeWidth1(this.lib1_traffic);
      this.changeWidth2(this.lib2_traffic);
      this.changeWidth3(this.lib3_traffic);
      this.changeColor1();
      this.changeColor2();
      this.changeColor3();
    });
    axios.get("http://192.168.0.24:5000/api/trafficComp").then((response) => {
      console.log(response.data);
      this.comp1 = response.data["comp1_available"];
      this.comp2 = response.data["comp2_available"];
      this.comp3 = response.data["comp3_available"];
    });
  },
};
</script>

<style scoped>
#appProgressBar {
  margin-top: 65px;
}
#computerNumber {
  margin-top: 70px;
  text-align: center;
}
#campus {
  margin-top: 70px;
  color: #0d1e63;
  text-align: center;
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
  margin-bottom: 50px;
  /* position: fixed; */
  text-align: center;
  padding: auto;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
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
.col {
  display: flex;
}
.child {
  flex: 1;
  padding: auto;
  margin: auto;
  justify-content: space-evenly;
}
.row {
  margin-top: 20px;
  /* background-color: #0d1e6 */
}
.image {
  height: 25px;
}
.column2 {
  /*   justify-content: center;
  text-align: center; */
  margin-left: 35px;
}
</style>
