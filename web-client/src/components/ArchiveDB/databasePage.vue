<template>
  <div>
    <navbar />
    <secondarynavbar />
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10">
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
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
// Navbar
import navbar from "./../navbar.vue";
import secondarynavbar from "./../secondarynavbar.vue";

// Page specific components
import resourceSection from "./resourceSection.vue";
import databaseSearchinSection from "./databaseSearchinSection.vue"
export default {
  name: "databasePage",
  components: {
    navbar,
    secondarynavbar,
    resourceSection,
    databaseSearchinSection
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
  /* Anouncements & News */

  width: 400px;
  height: 33px;
  left: 31px;
  top: 33px;

  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 33px;

  /* identical to box height */

  color: #000000;
}
.announcementsRow {
  padding: 15px;
}
#announcementsID {
  /* Frame 20 */
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
