<template>
  <div class="resourceDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <span class="resourceTitle">{{ bookName }}</span>
          </div>
          <div class="row">
            <span class="resourceAuthor"
              >Borrowed Person : {{ firstName }}</span
            >
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button id="retrunButton" :disabled="isActive" @click="return_book">
              {{ returnButtonName }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "adminBorrowStatusSection",
  props: [
    "bookId",
    "reservDatetime",
    "duration",
    "userId",
    "isReturned",
    "firstName",
    "bookName",
    "reservationId",
  ],
  data() {
    return {
      isActive: false,
      returnButtonName: "Returned",
      message: ""
    };
  },
  methods: {
    return_book() {
      // book_id = this.$props.bookId
      axios
        .delete("http://192.168.0.24:5000/api/borrow", {
          data: {
            reservation_id: this.$props.reservationId,
            book_id: this.$props.bookId,
          },
        })
        .then((res) => {
          this.message = res["message"];
          this.isActive = true;
          this.returnButtonName = "Done";
        });
    },
  },
};
</script>

<style>
.resourceSectionFlex {
  margin-top: 5px;
}
#retrunButton {
  width: 107px;
  height: 50px;
  background-color: #630d0d;
  color: #ffff;
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
  border-color: white;
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
  color: white
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
  color: white;
}
button[disabled="disabled"],
button:disabled {
  background-color: rgb(61, 61, 61) !important;
  color: white !important;
}
</style>
