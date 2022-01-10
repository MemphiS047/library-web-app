<template>
  <div>
    <div>
      <div class="sectionDiv">
        <div class="searchBox">
          <span class="searchBoxTitle"
            >Search for books, research papers or publishers</span
          >
          <div class="warningBox">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img class="infoIcon" src="./../../assets/info.svg" />
                </div>
                <div class="col">
                  <p>
                    Medipol Library Search Engine (MLSE) provides a extensive
                    user experience for students and <br />
                    academecians research works. MLSE utilize various search
                    engines power to provide comprehensive <br />
                    research experience and most related and large set of
                    results
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex flex-row bd-highlight mb-3 searchFormFlex">
              <div id="searchInputflex" class="p-2 bd-highlight">
                <form @submit.prevent="formSubmitButton">
                  <div class="form-group">
                    <input
                      v-model="searchString"
                      class="form-control searchFormInput"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter what you want to search"
                    />
                  </div>
                </form>
              </div>
              <div class="p-2 bd-highlight">
                <button
                  id="searchButtonMainPage"
                  class="btn btn-primary"
                  @click="formSubmitButton"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="searchSectionNavigationDiv">
            <a class="searchNavigationElement">Article & Publishers</a>
            <a class="searchNavigationElement">Database</a>
          </div>
        </div>
      </div>
      <div v-if="!isSearched">
        <mainpageAnnouncements />
      </div>
      <div v-if="isSearched">
        <div>
          <div class="announcementsTitleDiv">
            <span>Search Results</span>
          </div>
          <div id="announcementsID" class="container">
            <div class="row announcementsRow"></div>
            <div class="row announcementsRow">
              <mainpageResourceSection
                v-for="result in queryResult"
                :key="result.position"
                :title="result.title"
                :link="result.link"
                :snippet="result.snippet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mainpageAnnouncements from "./mainpageAnnouncements.vue";
import mainpageResourceSection from "./mainpageResourceSection.vue";
import axios from "axios";

export default {
  name: "mainpage",
  components: {
    mainpageAnnouncements,
    mainpageResourceSection,
  },
  data() {
    return {
      searchString: "",
      isSearched: false,
      queryResult: [],
    };
  },
  methods: {
    formSubmitButton() {
      this.isSearched = true;
      console.log(this.searchString);
      axios
        .get("http://192.168.0.24:5000/api/googlescholar", {
          params: {
            searchString: this.searchString,
          },
        })
        .then((response) => {
          this.queryResult = response.data["queryLst"];
          console.log(this.queryResult);
        });
    },
  },
};
</script>

<style scoped>
html {
  background-color: #f0f0f0 !important;
}

/* SEARCH SECTION STYLING */
.searchSectionNavigationDiv {
  padding-left: 60px;
}
.searchNavigationElement {
  width: 73px;
  height: 22px;
  left: 21px;
  top: 128px;
  padding: 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: #0d1e63;
  text-decoration: none;
}
.searchSectionNavigationLinks {
  background-color: red;
}
.sectionDiv {
  position: relative;
  width: 1317px;
  height: 600px;
  background: rgba(13, 30, 99, 0.15);
  border: 3px solid #0d1e63;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.searchBox {
  position: relative;
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  margin-top: 150px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}

.searchBoxTitle {
  position: absolute;
  width: 653px;
  height: 33px;
  left: 56px;
  top: 33px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 33px;
  color: #000000;
}

.warningBox {
  position: absolute;
  width: 780px;
  height: 83px;
  left: 56px;
  top: 74px;
  background: rgba(255, 204, 0, 0.3);
  border-radius: 20px;
}

p {
  position: absolute;
  width: 769px;
  height: 48px;
  left: 69px;
  top: 18px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #000000;
}

.infoIcon {
  width: 35px;
  height: 35px;
  left: 70px;
  top: 98px;
  margin-top: 20px;
}
/* SEARCH SECTION FORM */
.searchFormFlex {
  margin-top: 120px;
  margin-left: 30px;
  height: 90px;
}

.searchFormInput {
  text-indent: 15px;
  width: 720px !important;
  height: 50px;
  top: 60px;
  border: 1px solid #000000 !important;
  box-sizing: border-box !important;
  border-radius: 10px !important;
}

/* 
Tied to flex item inside the flex box, 
it enables search button to get close to the
form input 
*/
#searchInputflex {
  width: 750px !important;
}
#searchButtonMainPage {
  margin-top: 40px;
  width: 107px;
  height: 50px;
  left: 957px;
  top: 60px;
  padding-top: 15px;
  background: #ffffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  color: #0d1e63;
}

#searchButton:hover {
  background: #0d1e63;
  border: 1px solid #0d1e63;
  color: #ffffff;
}
/* MAIN PAGE SEARCH RESULTS SECTION STYLING */
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
