<template>
  <!-- NAVBAR COMPONENT -->
  <nav id="secondaryNavbar" class="navbar navbar-expand-lg navbar-custom">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul id="secondaryNavbarItems" class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"> Reservation </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Book Database </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Announcement </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> News </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "secondarynavbar",
};
</script>

<style scoped>
.navbar-custom {
  background-color: #0d1e63 !important;
}

a {
  color: white !important;
}

#secondaryNavbar{
  width: 100% !important;
  position: absolute;
}

</style>