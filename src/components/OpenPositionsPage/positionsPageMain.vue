<template>
  <div>
    <div class="profilePageTitles">
      <span>Open Positions</span>
    </div>
    <positionsPageSectionVue 
    v-for="result in queryResult"
    :key="result.jobId"
    :jobTitle="result.jobTitle"
    :jobDescription="result.jobDescription"
    :payment="result.payment"
    :jobType="result.jobType"/>
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
    axios.get("http://192.168.0.24:5000/api/managepositions").then((response) => {
      const result = JSON.parse(JSON.stringify(response.data));
      // console.log(result["queryLst"][0]);
      result["queryLst"].forEach((element) => {
        this.queryResult.push({
          jobId: element.job_id,
          jobTitle: element.job_title,
          jobDescription: element.Job_description,
          payment: element.payment,
          jobType: element.jobType
        });
      });
    });
  },
};
</script>

<style>
span {
  width: 400px;
  height: 33px;
  left: 31px;
  top: 33px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 33px;
  color: #000000;
}

.profilePageTitles {
  margin-top: 150px;
}

.profilePageCol {
  width: 100% !important;
}
</style>
