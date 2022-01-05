<template>
  <div>
    <div class="adminPageTitle">
      <span>Admin Panel</span>
    </div>
    <adminAddBook />
    <adminStatusSection />
    <borrowStatusSection
      v-for="result in queryResult"
      :key="result.bookId"
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
import adminAddBook from "./adminAddBook.vue";
import adminStatusSection from "./adminStatusSection.vue";
import borrowStatusSection from "./borrowStatusSection.vue";
import axios from "axios";
export default {
  name: "positionsPage",
  components: {
    adminAddBook,
    adminStatusSection,
    borrowStatusSection,
  },
  data() {
    return {
      queryResult: [],
    };
  },
  mounted: function () {
    axios.get("http://192.168.0.24:5000/api/borrow").then((response) => {
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
        });
      });
      console.log("PRINTING BORROW STATUS");
      console.log(this.queryResult);
    });
  },
};
</script>

<style>
.adminPageTitle {
  margin-top: 120px !important;
}
</style>
