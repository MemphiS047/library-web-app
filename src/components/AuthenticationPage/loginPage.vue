<template>
  <div class="formDiv">
    <form @submit.prevent="submitForm" method="get" class="h-80">
      <div class="form-group">
        <label for="username">User Name</label>
        <input
          v-model="userCredentials.username"
          type="text"
          class="form-control"
          placeholder="Enter username"
        />
        <label v-if="errMessages['err_no_email'] != null" class="error_message">
          {{ errMessages["err_no_email"] }}
        </label>
        <label
          v-if="errMessages['err_invalid_credentials'] != null"
          class="error_message"
        >
          {{ errMessages["err_invalid_credentials"] }}
        </label>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="userCredentials.password"
          type="password"
          placeholder="Password"
        />
        <label v-if="errMessages['err_no_pass'] != null" class="error_message">
          {{ errMessages["err_no_pass"] }}
        </label>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginpage",
  data() {
    return {
      apiResponse: null,
      userCredentials: {
        username: "",
        password: "",
      },
      errMessages: {
        err_invalid_credentials: "",
        err_no_pass: "",
        err_no_email: "",
      },
    };
  },
  methods: {
    // Resets the form validation error messages
    // for preventing overrite
    resetMessages() {
      this.errMessages["err_invalid_credentials"] = "";
      this.errMessages["err_no_pass"] = "";
      this.errMessages["err_no_email"] = "";
    },

    // Sets the messages for form validation for showing
    // user what he/she did wrong
    setMessages() {
      if (!this.userCredentials.password && !this.userCredentials.username) {
        this.errMessages["err_no_pass"] = "Password required.";
        this.errMessages["err_no_email"] = "Username required.";
        return true;
      } else {
        return false;
      }
    },

    // Redirecs user according to admin state
    // if he/she is admin then redirects them to
    // admin panel if not then users is student
    redirectPage() {
      if (this.$store.state.is_admin == 1) {
        this.$router.push(this.$route.query.redirect || "/admin");
      } else {
        this.$router.push(this.$route.query.redirect || "/");
      }
    },

    // Login submit form all the error message checking, 
    // page redirections, and login validations are done
    submitForm() {
      this.resetMessages();
      if (this.setMessages()) {
        console.log("Error need to enter username and password");
      } else if (
        !this.errMessages["err_invalid_credentials"] != "" ||
        !this.errMessages["err_no_pass"] != "" ||
        !this.errMessages["err_no_email"] != ""
      ) {
        if (this.loginUser()) {
          this.redirectPage();
        }
        else{
          console.log("Couldn't find any user with these credentials");
        }
      }
    },

    // Sets the user state if they successfully logged in
    setUserState(res) {
      this.$store.state.userid = res.data["credentials"]["userid"];
      this.$store.state.username = res.data["credentials"]["username"];
      this.$store.state.firstname = res.data["credentials"]["firstname"];
      this.$store.state.lastname = res.data["credentials"]["lastname"];
      this.$store.state.is_admin = res.data["credentials"]["is_admin"];
    },

    // All the above function ran on the below method 
    loginUser() {
      axios
        .post("http://192.168.0.24:5000/api/auth", {
          username: this.userCredentials.username,
          password: this.userCredentials.password,
        })
        .then((res) => {
          if (res.data["message"] === "Authentication successful") {
            this.apiResponse = res.data;
            this.setUserState(res);
            this.$store.commit("login");
            console.log(res.data);
            this.redirectPage();
            return true;
          } else {
            this.errMessages["err_invalid_credentials"] = res.data["message"];
            return false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
label{
  color: white;
}
body{
  color: white;
}
.formDiv{
  padding: 0px 200px 0px 200px;
}
.h-80{
  background: #0d1e63;
}
.error_message {
  color: red;
  font-weight: bold;
  font-size: 17px;
}
form {
  border: 5px solid #f1f1f1;
  margin-top: 150px;
  /* margin-left: 200px; */
  margin-bottom: 30px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: white;
  color: #0d1e63;
  padding: 14px 0;
  margin: 10px 0;
  border: none;
  cursor: grabbing;
  width: 100%;
}
h1 {
  text-align: center;
  font-size: 18;
}
button:hover {
  opacity: 0.8;
  background: #FFCC00;
  color: black;
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
