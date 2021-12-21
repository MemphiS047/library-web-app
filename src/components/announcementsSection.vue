<template>
  <div class="announcemenetsDiv">
    <span class="announcementTitle">{{ announcementTitle }}</span>
    <div class="d-flex flex-row announcementSummaryFlex">
      <p class="announcementSummary">
        {{ message }}
      </p>
    </div>
    <a class="readMoreLink">Read More...</a>
  </div>
</template>

<script>
export default {
  name: "announcementsSection",
  props: ["announcementTitle", "message"],
};
</script>

<style>
.announcemenetsDiv {
  /* Frame 24 */

  width: 100%;
  height: 230px;
  padding: 30px;
  margin-top: 20px !important;
  /* margin-bottom: 20px !important; */
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.announcementTitle {
  /* A Guide on How to Use Library Books */

  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;

  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 27px;

  color: #000000;
}

.announcementSummary {
  position: relative;
  width: 1207px;
  height: 102px;
  left: 0px;
  top: 28px;
  padding: 0px 10px 0px 10px;

  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;

  color: #000000;
}
.readMoreLink {
  width: 88px;
  height: 20px;
  left: 1153px;
  top: 172px;
  padding: 0px 10px 0px 10px;

  cursor: pointer;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;

  /* identical to box height */

  color: #0d1e63;
}
</style>
