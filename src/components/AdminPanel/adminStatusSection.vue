<template>
  <div class="adminAddBookDiv">
    <form @submit.prevent="submitForm" method="get" class="h-80">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">
              <span class="openPositionTitle">Resource Status</span>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Enter User ID (Student ID)</h5>
                <input
                  v-model="searchString"
                  class="form-control adminPanelInput"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div class="row">
              <div
                class="d-flex flex-column-reverse align-items-end bd-hghlight openPositionButtonSection"
              >
                <button type="submit" id="applyButton" class="defaultBtn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <borrowStatusSection
      v-for="result in queryResult"
      :key="result.reservationId"
      :reservationId="result.reservationId"
      :bookId="result.bookId"
      :reservDatetime="result.reservDatetime"
      :duration="result.duration"
      :userId="result.userId"
      :isReturned="result.isReturned"
      :firstName="result.firstName"
      :bookName="result.bookName"
    />
  </div>
</template>

<script>
import axios from "axios";
import borrowStatusSection from "./borrowStatusSection.vue";
export default {
  name: "adminAddBook",
  components: {
    borrowStatusSection,
  },
  data() {
    return {
      bookSearchStatus: "",
      searchString: "",
      queryResult: []
    };
  },
  methods: {
    submitForm() {
      this.getBorrowStatus();
    },
    getBorrowStatus() {
      axios
        .get("http://127.0.0.1:5000/api/borrow", {
          params: { search_string: this.searchString },
        })
        .then((response) => {
          const result = JSON.parse(JSON.stringify(response.data));
          result["queryLst"].forEach((element) => {
            this.queryResult.push({
              bookId: element.book_id,
              reservDatetime: element.reserv_datetime,
              duration: element.duration,
              userId: element.user_id,
              isReturned: element.is_returned,
              firstName: element.firstname,
              bookName: element.bookname,
              reservationId: element.reservation_id
            });
          });
          console.log(this.queryResult);
        });
    },
  },
};
</script>

<style>
.adminPanelInput {
  text-indent: 15px;
  width: 200px !important;
  height: 50px;
  top: 60px;
  border: 1px solid #000000 !important;
  box-sizing: border-box !important;
  border-radius: 10px !important;
}
.defaultBtn {
  width: 107px;
  height: 50px;
  background-color: #0d1e63 !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.appliedBtn {
  width: 107px;
  height: 50px;
  background-color: #1e9924 !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.blockedBtn {
  width: 107px;
  height: 50px;
  background-color: #757575 !important;
  color: rgb(187, 187, 187);
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.openPositionLocationTitle {
  width: 200px;
}
h5 {
  font-weight: 400;
  padding: 0px !important;
}
.qualificationsDiv {
  margin-top: 35px !important;
  padding: 0px;
}
.qualificationsSpan {
  padding: 0px;
}
.positionPageListGroup {
  background-color: transparent !important;
  font-family: "Manjari";
  padding: 0px 0px 0px 0px !important;
}
.resourceSectionFlex {
  margin-top: 5px;
}
#retrunButton {
  width: 107px;
  height: 50px;
  background-color: #630d0d !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
.adminAddBookDiv {
  width: 100%;
  height: 100%;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.resourceAuthor {
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
}

.openPositionTitle {
  margin-top: 20px;
  width: auto !important;
  height: 27px;
  top: 39px;
  padding: 0px 0px 0px 0px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 27px;
  color: #000000;
}
</style>
