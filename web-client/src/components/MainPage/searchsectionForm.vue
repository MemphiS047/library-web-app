<template>
  <div class="d-flex flex-row bd-highlight mb-3 searchFormFlex">
    <div id="searchInputflex" class="p-2 bd-highlight">
      <form @submit.prevent="submitSearchForm">
        <div class="form-group">
          <input
            v-model="searchInput"
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
        id="searchButton"
        class="btn btn-primary"
        @click="formSubmitButton"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchsectionVue",
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    submitSearchForm() {
      console.log(this.searchInput);
    },

    // When searchButton is clicked (catching with @click event) this
    // function is triggered which triggers the submitSearchForm method
    // tied to form element which can be found in the <form> elements property
    formSubmitButton() {
      this.submitSearchForm();
    },
  },
};
</script>

<style>
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
#searchButton {
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
</style>
