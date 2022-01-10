<template>
  <div>
    <!-- PROFILE PAGE BANNER -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10">
          <profilePageBanner />
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <!-- BORROWED BOOKS -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10 profilePageCol">
          <div class="profilePageTitles">
            <span>Borrowed Items</span>
            <hr />
            <!-- <label class="noBorrowWarning" v-if="is_borrowed">No borrowed books currently .... </label> -->
          </div>
          <div class="row">
            <profilePageItemSection
              v-for="result in queryResult"
              :key="result.reservationId"
              :reservationId="result.reservationId"
              :bookId="result.bookId"
              :reservDatetime="result.reservDatetime"
              :duration="result.duration"
              :userId="result.userId"
              :isReturned="result.isReturned"
              :firstName="result.firstName"
              :bookName="result.bookname"
              :author="result.author"
            />
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import profilePageBanner from "./profilepageBanner.vue";
import profilePageItemSection from "./profilepageItemSection.vue";
import axios from "axios";
export default {
  name: "profilePage",
  components: {
    profilePageBanner,
    profilePageItemSection,
  },
  data() {
    return {
      queryResult: [],
      is_borrowed: false,
    };
  },
  mounted: function () {
    var username = this.format_username();
    console.log(username);
    axios
      .get("http://192.168.0.24:5000/api/borrow", {
        params: { search_string: username },
      })
      .then((response) => {
        this.queryResult = response.data["queryLst"];
        console.log(this.queryResult);
      });
  },
  methods : { 
    format_username(){
      var username = this.$store.state.username;
      return username.split("@")[0];
    }
  }
};
</script>

<style>
.noBorrowWarning{
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.profilePageSection {
  position: relative;
  width: 1317px;
  height: 600px;
  background: rgba(13, 30, 99, 0.15);
  border: 3px solid #0d1e63;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.profilePageTitles {
  margin-top: 40px;
}
hr {
  padding: 1px;
}
.profilePageSectionTitle {
  position: absolute;
  width: 653px;
  height: 33px;
  left: 56px;
  top: 33px;
  padding-top: 15px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 33px;
  color: white;
}

.profilePageCol {
  width: 100% !important;
}

.profileBox {
  position: relative;
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  margin-top: 120px;
  background-color: #0d1e63;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
