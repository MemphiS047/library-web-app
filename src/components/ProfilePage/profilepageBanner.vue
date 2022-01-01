<template>
  <div class="profilePageSection">
    <div class="profileBox">
      <span class="profilePageSectionTitle">My Profile</span>
      <ul class="list-group">
        <li class="list-group-item border-0">Profile: Student</li>
        <li class="list-group-item border-0">First name: {{$store.state.firstname}}</li>
        <li class="list-group-item border-0">Last name: {{$store.state.lastname}}</li>
        <li class="list-group-item border-0">Username: {{$store.state.username}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "profielPageBanner",
};
</script>

<style>
.list-group {
  margin-top: 120px;
}

.list-group-item {
  background-color: transparent !important;
  font-family: "Manjari";
  padding: 10px 10px 10px 55px !important;
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
  color: #000000;
}
.profileBox {
  position: relative;
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  margin-top: 120px;
  background-color: rgba(255, 255, 255, 0.425);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
