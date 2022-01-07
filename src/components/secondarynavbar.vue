<template>
  <nav id="secondaryNavbar" class="navbar navbar-expand-lg navbar-custom">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul
        v-if="$store.state.is_admin != 1"
        id="secondaryNavbarItems"
        class="navbar-nav ml-auto"
      >
        <li class="nav-item">
          <router-link to="/">
            <a class="nav-link" href="#"> Home </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/database"
            ><a class="nav-link"> Book Database </a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/announcements">
            <a class="nav-link"> Announcement </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/openpositions">
            <a class="nav-link" href="#"> Open Positions </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reservations">
            <a class="nav-link" href="#"> Reservation </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/traffic">
            <a class="nav-link" href="#"> Traffic </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "secondarynavbar",
  mounted: function () {
    console.log("ADMIN STATE" + this.$store.state.is_admin);
  },
};
</script>

<style scoped>
.navbar-custom {
  background-color: #0d1e63 !important;
}

a {
  color: white !important;
}

#secondaryNavbar {
  width: 100% !important;
  position: absolute;
  z-index: 2;
}
</style>
