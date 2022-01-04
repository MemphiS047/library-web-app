<template>
  <div class="resourceDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <span class="resourceTitle">{{ bookName }}</span>
          </div>
          <div class="row">
            <span class="resourceAuthor">{{ authorName }}</span>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button id="borrowButton" @click="borrow">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "resourceSection",
  props: ["bookId", "bookName", "authorName"],
  data() {
    return {
      borrow_req: {
        reservation_id: 5,
        book_id: this.$props.bookId,
        reserv_datetime: "2020-10-10",
        duration: 20,
        user_id: this.$store.state.userid,
        is_returned: 0,
      },
    };
  },
  methods: {
    borrow() {
      console.log(this.borrow_req);
      axios
        .post("http://192.168.0.24:5000/api/borrow", {
          reservation_id: this.borrow_req.reservation_id,
          book_id: this.borrow_req.book_id,
          reserv_datetime: this.borrow_req.reserv_datetime,
          duration: this.borrow_req.duration,
          user_id: this.borrow_req.user_id,
          is_returned: this.borrow_req.is_returned,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.resourceSectionFlex {
  margin-top: 5px;
}
#borrowButton {
  width: 107px;
  height: 50px;
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
.resourceDiv {
  width: 100%;
  height: 100px;
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

.resourceTitle {
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
}
</style>
