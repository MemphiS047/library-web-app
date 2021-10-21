<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img
          src="./../assets/amblem_400x400.jpg"
          width="80"
          height="80"
          alt=""
        />
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
        <!-- <button
          v-on:click="toggle()"
          class="btn btn-outline-success"
          type="button"
        >
          {{ loginButtonPressed }}
        </button> -->
        <b-button id="loginButton" v-b-modal.modal-center>Login</b-button>
      </div>
    </nav>
    <div>
      <b-modal id="modal-center" centered title="BootstrapVue" hide-footer hide-header>
        <form>
          <h2>Login</h2>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Student number or email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button id="loginSubmitButton" type="submit" class="btn btn-primary">Submit</button>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginButtonPressed: false,
    };
  },
  methods: {
    toggle: function() {
      console.log(!this.loginButtonPressed);
      if (this.loginButtonPressed) {
        this.loginButtonPressed = false;
      } else {
        this.loginButtonPressed = true;
      }
      return this.loginButtonPressed;
    },
  },
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

#loginButton {
  margin-left: 20px;
  border-radius: 20px !important;
  font-size: 20px !important;
  padding-bottom: 1px !important;
  width: 100px;
  background-color: rgb(25, 23, 126) !important;
  color: rgb(255, 255, 255) !important;
}

#loginButton:hover{
  background: rgb(0, 119, 255) !important;
  color: white !important;
}

#loginSubmitButton{
  width: 100%;
  border-radius: 20px !important;
}

.form-group{
  padding: 20px 0px 20px 0px;
}

input{
  border-radius: 20px !important;
  text-indent: 15px;
}

input[type="password"]{
  margin-bottom: 20px;
}

form{
  padding: 20px;
}

img {
  margin-right: 15px !important;
}

.modal {
  display: block !important;
}

h2{
  text-align: center;
  margin-bottom: 50px !important;
}
</style>
