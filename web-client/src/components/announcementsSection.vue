<template>
  <div class="announcemenetsDiv">
    <span class="announcementTitle">A Guide on How to Use Library Books</span>
    <div class="d-flex flex-row announcementSummaryFlex">
      <p class="announcementSummary">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat .
      </p>
    </div>
    <a class="readMoreLink">Read More...</a>
  </div>
</template>

<script>
export default {
  name: "announcementsSection",
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
