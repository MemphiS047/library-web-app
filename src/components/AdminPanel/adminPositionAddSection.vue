<template>
  <div class="adminAddBookDiv">
    <div class="container">
      <div class="row">
        <form @submit.prevent="submitForm" method="get" class="h-80">
          <div class="col">
            <div class="row">
              <span class="openPositionTitle">Add New Position</span>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Job Title</h5>
                <input
                  v-model="jobTitle"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Job Description</h5>
                <input
                  v-model="jobDescription"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Payment</h5>
                <input
                  v-model="payment"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Job Type</h5>
                <input
                  v-model="jobType"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div
                class="d-flex flex-column-reverse align-items-end bd-hghlight openPositionButtonSection"
              >
                <button
                  type="submit"
                  id="applyButton"
                  class="defaultBtn"
                  @click="apply"
                >
                  Submit
                </button>
                <label class="returnMessageStyle">{{ returnMessage }}</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "adminPositionAddSection",
  data() {
    return {
      jobTitle: "",
      jobDescription: "",
      payment: "",
      jobType: "",
      returnMessage: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://127.0.0.1:5000/api/managepositions", {
          job_title: this.jobTitle,
          Job_description: this.jobDescription,
          payment: this.payment,
          job_type: this.jobType,
        })
        .then((res) => {
          this.returnMessage = res.data["message"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.adminPanelInput {
  text-indent: 15px;
  width: 200px !important;
  height: 50px;
  top: 60px;
  border: 1px solid #000000 !important;
  box-sizing: border-box !important;
  border-radius: 10px !important;
}

.defaultBtn {
  width: 107px;
  height: 50px;
  background-color: white !important;
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

h5 {
  font-weight: 400;
  padding: 0px !important;
}
.qualificationsDiv {
  margin-top: 35px !important;
  padding: 0px;
}

.adminAddBookDiv {
  width: 100%;
  height: 100%;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}

.openPositionTitle {
  margin-top: 20px;
  width: auto !important;
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
