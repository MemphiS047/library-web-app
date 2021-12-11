<template>
  <div>
    <div class="announcementsTitleDiv">
      <span>Archive / Database</span>
    </div>
    <div id="announcementsID" class="container">
      <div class="row announcementsRow">
        <databaseSearchinSection />
      </div>
      <div class="row announcementsRow">
        <resourceSection />
      </div>
    </div>
  </div>
</template>

<script>
import resourceSection from "./resourceSection.vue";
import databaseSearchinSection from "./databaseSearchinSection.vue";
export default {
  name: "databasePage",
  components: {
    resourceSection,
    databaseSearchinSection,
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
