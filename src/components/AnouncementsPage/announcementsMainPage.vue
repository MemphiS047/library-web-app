
<template>
  <div>
    <div class="announcementsTitleDiv">
      <span>Announcements & News</span>
    </div>
    <div id="announcementsID" class="container">
      <div class="row announcementsRow">
        <announcementsSection 
        v-for="result in queryResult"
        :key="result.announcementID"
        :announcementTitle="result.announcementTitle"
        :message="result.message"/>
      </div>
    </div>
  </div>
</template>

<script>
import announcementsSection from "./../announcementsSection.vue";
import axios from 'axios';
export default {
  name: "announcementsMainPage",
  components: {
    announcementsSection,
  },
  data() {
    return {
      queryResult: [],
    };
  },
  mounted: function () {
    axios.get("http://127.0.0.1:5000/api/manageannouncements").then((response) => {
      const result = JSON.parse(JSON.stringify(response.data));
      console.log(result["queryLst"][0]);
      result["queryLst"].forEach((element) => {
        this.queryResult.push({
          announcementID: element.announce_id,
          announcementTitle: element.announcement_title,
          message: element.message
        });
      });
    });
  },
};
</script>

<style>
.announcementsTitleDiv {
  margin-top: 120px;
  margin-left: 10px;
  width: 406px;
  height: 50px;
  left: 97px;
  top: 178px;
}
.announcementsRow {
  padding: 15px;
}
#announcementsID {
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  width: 1337px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding-bottom: 35px;
}
</style>