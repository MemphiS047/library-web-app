<template>
  <div>
    <div class="announcementsTitleDiv">
      <span>Search Results</span>
    </div>
    <div id="announcementsID" class="container">
      <div class="row announcementsRow"></div>
      <div class="row announcementsRow">
        <mainpageResourceSection
          v-for="result in searchResults"
          :key="result.position"
          :title="result.title"
          :link="result.link"
          :snippet="result.snippet"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mainpageResourceSection from "./mainpageResourceSection.vue";
export default {
  name: "databasePage",
  components: {
    mainpageResourceSection,
  },
  props: ["searchResults"],
  data() {
    return {
      searchString: "",
      queryResult: [],
    };
  },

  // 
  mounted : function(){
      console.log(this.$props.searchResults);
  }
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
.searchSectionDBFlex {
  height: 70px;
}
#searchButtonDatabasePage {
  position: absolute;
  width: 107px;
  height: 50px;
  left: 573px;
  top: 110px;
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;
  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.databaseSearchingInput {
  position: absolute;
  width: 499px;
  height: 50px;
  left: 57px;
  top: 110px;
  padding: 5px 25px 5px 25px;
  border: 1px;
  box-sizing: border-box;
  border-radius: 30px;
  border-color: black;
  border-style: solid;
}
.searchSectionDiv {
  width: 100%;
  height: 180px;
  padding: 30px;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.searchSectionDBTitle {
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
</style>
