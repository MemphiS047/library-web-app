<template>
  <div>
    <!-- NAVBAR COMPONENT -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img
          src="./../assets/İstanbul_Medipol_Üniversitesi_logosu.jpg"
          width="266"
          height="100"
          alt=""
        />
      </a>
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
        <ul id="secondaryNavbarItems" class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Sign In</a>
          </li>
        </ul>
        <button id="loginButton" >Login</button>
      </div>
    </nav>

    <!-- MODAL COMPONENT -->
    <!-- <div class="modalDiv">
      <b-modal
        id="modal-center"
        centered
        title="BootstrapVue"
        hide-footer
        hide-header
      >
        <form>
          <h2>Login</h2>
          <div class="form-group">
            <strong
              ><label class="form-label">Email or Student ID</label></strong
            >

            <input
              type="text"
              class="form-control loginInput"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Student number or email"
            />
          </div>
          <div class="form-group">
            <strong><label class="form-label">Password</label></strong>
            <input
              type="password"
              class="form-control loginInput"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button id="loginSubmitButton" type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </b-modal>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "navbar",
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

#loginButton:hover {
  background: rgb(105, 109, 161) !important;
  color: white !important;
}

#loginSubmitButton {
  width: 100%;
  border-radius: 20px !important;
  background-color: rgb(25, 23, 126) !important;
  color: rgb(255, 255, 255) !important;
}

#loginSubmitButton:hover {
  background: rgb(0, 119, 255) !important;
  color: white !important;
}

.form-group {
  padding: 20px 0px 20px 0px;
}
.modalDiv{
  width: 100%;
  height: 100%;
}
.loginInput {
  text-indent: 15px;
  width: 100%;
  height: 50px;
  top: 60px;
  border: 1px solid #000000 !important;
  box-sizing: border-box !important;
  border-radius: 10px !important;
  border-radius: 20px !important;
  text-indent: 15px;
}

input[type="password"] {
  margin-bottom: 20px;
}

form {
  padding: 20px;
}

img {
  margin-right: 15px !important;
}

h2 {
  text-align: center;
  margin-bottom: 50px !important;
}

.form-label {
  margin-left: 10px !important;
}
</style>
