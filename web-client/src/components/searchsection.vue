<template>
  <div class="sectionDiv">
    <div class="searchBox">
      <span class="searchBoxTitle"
        >Search for books, research papers or publishers</span
      >
      <div class="warningBox">
        <div class="container">
          <div class="row">
            <div class="col">
              <img class="infoIcon" src="./../assets/info.svg" />
            </div>
            <div class="col">
              <p>
                Medipol Library Search Engine (MLSE) provides a extensive user experience for students
                and <br> academecians research works. MLSE utilize various search engines power to provide comprehensive
                <br> research experience and most related and large set of results 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <searchsectionFormVue />
      </div>
      <div class="searchSectionNavigationDiv">
        <a class="searchNavigationElement">Catalog</a>
        <a class="searchNavigationElement">Article & Publishers</a>
        <a class="searchNavigationElement">Database</a>
        <a class="searchNavigationElement">E-Library</a>
      </div>
    </div>
  </div>
</template>

<script>
import searchsectionFormVue from "./searchsectionForm.vue";
export default {
  name: "searchsection",
  components: {
    searchsectionFormVue,
  },
};
</script>

<style>
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
</style>
