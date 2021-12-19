<template>
  <div class="searchSectionDiv">
    <span class="searchSectionDBTitle">Medipol Library Database</span>
    <div class="d-flex flex-row searchSectionDBFlex">
        <input class="databaseSearchingInput" type="text" placeholder="Enter what you want to search">
        <button id="searchButtonDatabasePage">Search</button>
    </div>
    <a class="advancedSearchLink">Advanced Search</a>
  </div>
</template>

<script>
export default {
  name: "announcementsSection",
};
</script>

<style>

.searchSectionDBFlex{
    height: 70px;
}
#searchButtonDatabasePage{
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

.databaseSearchingInput{
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
