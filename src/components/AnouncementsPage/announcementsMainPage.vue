
<template>
  <div>
    <div class="announcementsTitleDiv">
      <span>Announcements & News</span>
    </div>
    <div id="announcementsID" class="container">
      <div class="row announcementsRow">
        <announcementsSection 
        v-for="result in queryResult"
        :key="result.announce_id"
        :announcementTitle="result.announcement_title"
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
    axios.get("http://192.168.0.24:5000/api/manageannouncements").then((response) => {
      this.queryResult = response.data["queryLst"];
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
  background: #0d1e63;
}
</style>