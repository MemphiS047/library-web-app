<template>
  <div class="adminAddBookDiv">
    <div class="container">
      <div class="row">
        <form @submit.prevent="submitForm" method="get" class="h-80">
          <div class="col">
            <div class="row">
              <span class="openPositionTitle">Resource Managmenet</span>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Book Name</h5>
                <input
                  v-model="bookName"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Author</h5>
                <input
                  v-model="bookAuthor"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Publisher</h5>
                <input
                  v-model="bookPublisher"
                  class="form-control adminPanelInput"

                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Language</h5>
                <input
                  v-model="bookLanguage"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div class="qualificationsDiv">
                <h5>Number of Pages</h5>
                <input
                  v-model="bookNumPages"
                  class="form-control adminPanelInput"
                />
              </div>
            </div>
            <div class="row">
              <div
                class="d-flex flex-column-reverse align-items-end bd-hghlight openPositionButtonSection"
              >
                <button
                  type="submit"
                  id="applyButton"
                  class="defaultBtn"
                >
                  Submit
                </button>
                <label class="returnMessageStyle">{{ returnMessage }}</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "adminAddBookForm",
  data() {
    return {
      bookName: "",
      bookAuthor: "",
      bookPublisher: "",
      bookLanguage: "",
      bookNumPages: "",
      returnMessage: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://192.168.0.24:5000/api/managebooks", {
          book_name: this.bookName,
          author: this.bookAuthor,
          Publisher: this.bookPublisher,
          Language: this.bookLanguage,
          numberOFPages: this.bookNumPages,
        })
        .then((res) => {
          this.returnMessage = res.data["message"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.returnMessageStyle {
  color: #28a745;
  font-weight: bold;
  font-size: 17px;
}
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
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;

  background-color: white;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

h5 {
  font-weight: 400;
  padding: 0px !important;
  color: white;
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
  background: #0d1e63;
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
