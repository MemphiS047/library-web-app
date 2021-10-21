<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <a class="navbar-brand" href="#">
      <img src="./../assets/amblem_400x400.jpg" width="80" height="80" alt="" />
    </a>
    <a id="navbarTitleID" class="navbar-brand" href="#"
      >Istanbul Medipol University Library Service Department</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Reservation
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Book Database
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Announcement
          </a>
        </li>
      </ul>
        <button class="btn btn-outline-success" type="button">
          Login
        </button>
    </div>
  </nav>
</template>

<script>

export default {
};
</script>

<style>
@font-face {
  font-family: "Manjari";
  src: local("Manjari"), url(./../assets/Manjari-Bold.ttf) format("truetype");
}
nav {
  padding: 50px;
  background-color: white !important;
  font-family: "Manjari";
  font-size: 20px;
}

.navbar-nav {
  margin-left: auto;
}

.collapse {
  /* background-color: red !important; */
  padding-right: 30px;
}

li {
  padding: 0px 20px 0 20px;
}

.btn{
  margin-left: 20px;
  border-radius: 20px !important;
  font-size: 20px !important;
  padding-bottom: 1px !important;
  width: 100px;
}

img {
  margin-right: 15px !important;
}
</style>
