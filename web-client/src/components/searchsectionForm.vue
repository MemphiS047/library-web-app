<template>
  <div class="d-flex flex-row bd-highlight mb-3">
    <div id="searchInputflex" class="p-2 bd-highlight">
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter what you want to search"
          />
          
        </div>
      </form>
    </div>
    <div class="p-2 bd-highlight">
      <button id="searchButton" type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchsectionVue",
};
</script>

<style>
.d-flex {
  margin-top: 120px;
  margin-left: 30px;
  height: 90px;
}

input {
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
