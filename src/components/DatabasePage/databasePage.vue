<template>
  <div>
    <div class="announcementsTitleDiv">
      <span>Archive / Database</span>
    </div>
    <div id="announcementsID" class="container">
      <div class="row announcementsRow">
        <!-- SEARCH SECTION -->
        <div class="searchSectionDiv">
          <span class="searchSectionDBTitle">Medipol Library Database</span>
          <div class="d-flex flex-row searchSectionDBFlex">
            <form @submit.prevent="submitForm">
              <input
                v-model="searchString"
                class="databaseSearchingInput"
                id="databaseSearchID"
                name="databaseSearchName"
                type="text"
                placeholder="Enter what you want to search"
              />
              <button type="submit" id="searchButtonDatabasePage">
                Search
              </button>
            </form>
          </div>
          <a class="advancedSearchLink">Advanced Search</a>
        </div>
      </div>
      <div class="row announcementsRow">
        <resourceSection
          v-for="result in queryResult"
          :key="result.bookId"
          :bookId="result.bookId"
          :bookName="result.bookName"
          :authorName="result.authorName"
          :isAvailable="result.is_available"
        />
      </div>
    </div>
  </div>
</template>

<script>
import resourceSection from "./resourceSection.vue";
import axios from "axios";
export default {
  name: "databasePage",
  components: {
    resourceSection,
  },
  data() {
    return {
      searchString: "",
      queryResult: [],
    };
  },
  methods: {
    submitForm() {
      this.queryResult = [];
      this.getResults();
    },
    getResults() {
      axios
        .get("http://192.168.0.24:5000/api/managebooks", {
          params: { search_string: this.searchString },
        })
        .then((response) => {
          this.queryResult = response.data["queryLst"];
          console.log("QUERY RESULT FOR SEARCH $$")
          console.log(this.queryResult)
        });
    },
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
/* SEARCH SECTION STYLING */
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
.advancedSearchLink {
  width: 159px;
  height: 22px;
  left: 72px;
  top: 133px;
  font-size: 20px;
  text-decoration: none;
  color: #0d1e63;
  margin-left: 10px;
}
</style>
