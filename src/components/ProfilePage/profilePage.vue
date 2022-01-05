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
            <hr>
          </div>
          <div class="row">
            <profilePageItemSection />
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <!-- RESERVATIONS -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10 profilePageCol">
          <div class="profilePageTitles">
            <span>Reservations</span>
            <hr>
          </div>
          <div class="row">
            <profilePageReservationSection />
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <!-- FAVORITES -->
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-10 profilePageCol">
          <div class="profilePageTitles">
            <span>Favorites</span>
            <hr>
          </div>
          <div class="row">
            <profilePageFavoriteSectionVue />
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
import profilePageReservationSection from "./profilePageReservationSection.vue";
import profilePageFavoriteSectionVue from "./profilePageFavoriteSection.vue";
export default {
  name: "profilePage",
  components: {
    profilePageBanner,
    profilePageItemSection,
    profilePageReservationSection,
    profilePageFavoriteSectionVue,
  },
};
</script>

<style>
/* .list-group {
  margin-top: 120px;
} */

/* .list-group-item {
  background-color: transparent !important;
  font-family: "Manjari";
  padding: 10px 10px 10px 55px !important;
} */
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
hr{
  padding: 1px
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

.profilePageCol {
  width: 100% !important;
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
