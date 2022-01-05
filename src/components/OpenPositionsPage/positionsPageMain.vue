<template>
  <div>
    <div class="profilePageTitles">
      <span>Open Positions</span>
    </div>
    <positionsPageSectionVue
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
      queryResult: [],
    };
  },
  mounted: function () {
    axios
      .post("http://192.168.0.24:5000/api/managepositions", {
        user_id: this.$store.state.userid
      })
      .then((res) => {
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
</style>
