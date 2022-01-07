<template>
  <div>
    <div class="profilePageTitles">
      <span>Open Positions</span>
    </div>
    <form @submit.prevent="submitForm">
      <positionsPageSectionVue
        v-model="chosenJob"
        v-for="result in queryResult"
        :key="result.jobId"
        :jobId="result.jobId"
        :jobTitle="result.jobTitle"
        :jobDescription="result.jobDescription"
        :payment="result.payment"
        :jobType="result.jobType"
        :jobApplicationUid="result.jobApplicationUid"
        :appliedJob="result.appliedJob"
      />
      <button
        v-if="$store.state.is_authenticated"
        id="applyButton"
        class="defaultBtn"
        @click="apply"
        :disabled="isActive"
        type="submit"
      >
        Apply
      </button>
    </form>
  </div>
</template>

<script>
import positionsPageSectionVue from "./positionsPageSection.vue";
import axios from "axios";
export default {
  name: "positionsPage",
  components: {
    positionsPageSectionVue,
  },
  data() {
    return {
      isActive: false,
      queryResult: [],
      chosenJob: 0,
    };
  },
  methods: {
    submitForm() {
      console.log(this.$store.state.userid);

      axios
        .post("http://192.168.0.24:5000/api/apply", {
          job_id: document.querySelector('input[name="jobAppRadioBtn"]:checked')
            .value,
          user_id: this.$store.state.userid,
          respond: "waiting",
        })
        .then((res) => {
          console.log(res.data);
          this.isActive = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function () {
    axios.get("http://192.168.0.24:5000/api/managepositions").then((res) => {
      const result = JSON.parse(JSON.stringify(res.data));
      console.log(result["queryLst"][0]);
      console.log(result["queryLst"]);
      result["queryLst"].forEach((element) => {
        this.queryResult.push({
          jobId: element.job_id,
          jobTitle: element.job_title,
          jobDescription: element.Job_description,
          payment: element.payment,
          jobType: element.jobType,
          jobApplicationUid: element.jobApplicationUid,
          appliedJob: element.appliedJob,
        });
      });
    });
  },
};
</script>

<style>
.profilePageTitles {
  margin-top: 120px !important;
}

.profilePageCol {
  width: 100% !important;
}
.defaultBtn {
  width: 200px !important;
  height: 50px;
  background-color: #0d1e63 !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;
  /* margin-left: 20px; */
  margin-top: 20px;
  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
</style>
