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
                <h5>Enter Username of the Student</h5>
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
    <adminBorrowStatusSection
      v-for="result in queryResult"
      :key="result.reservation_id"
      :reservationId="result.reservation_id"
      :bookId="result.book_id"
      :reservDatetime="result.reserv_datetime"
      :duration="result.duration"
      :userId="result.user_id"
      :isReturned="result.is_returned"
      :firstName="result.firstname"
      :bookName="result.bookname"
    />
  </div>
</template>

<script>
import axios from "axios";
import adminBorrowStatusSection from "./adminBorrowStatusSection.vue";
export default {
  name: "adminCheckStatusForm",
  components: {
    adminBorrowStatusSection,
  },
  data() {
    return {
      searchString: "",
      queryResult: [],
    };
  },
  methods: {
    submitForm() {
      this.getBorrowStatus();
    },
    getBorrowStatus() {
      axios
        .get("http://192.168.0.24:5000/api/borrow", {
          params: { search_string: this.searchString },
        })
        .then((response) => {
          this.queryResult = response.data["queryLst"];
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

h5 {
  font-weight: 400;
  padding: 0px !important;
}
.qualificationsDiv {
  margin-top: 35px !important;
  padding: 0px;
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
