<template>
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
    resetMessages() {
      this.errMessages["err_invalid_credentials"] = "";
      this.errMessages["err_no_pass"] = "";
      this.errMessages["err_no_email"] = "";
    },
    setMessages() {
      if (!this.userCredentials.password) {
        this.errMessages["err_no_pass"] = "Password required.";
      }
      if (!this.userCredentials.username) {
        this.errMessages["err_no_email"] = "Username required.";
      }
    },
    redirectPage() {
      if (this.$store.state.is_admin == 1) {
        this.$router.push({ name: "admin", query: { redirect: "/admin" } });
        this.$router.push(this.$route.query.redirect || "/admin");
      } else {
        this.$router.push({ name: "auth", query: { redirect: "/" } });
        this.$router.push(this.$route.query.redirect || "/");
      }
    },
    submitForm() {
      this.resetMessages();
      this.setMessages();
      if (
        !this.errMessages["err_invalid_credentials"] != "" ||
        !this.errMessages["err_no_pass"] != "" ||
        !this.errMessages["err_no_email"] != ""
      ) {
        this.loginUser();
        this.redirectPage();
      }
    },
    setUserState(res) {
      this.$store.state.userid = res.data["credentials"]["userid"];
      this.$store.state.username = res.data["credentials"]["username"];
      this.$store.state.firstname = res.data["credentials"]["firstname"];
      this.$store.state.lastname = res.data["credentials"]["lastname"];
      this.$store.state.is_admin = res.data["credentials"]["is_admin"];
    },
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
          } else {
            this.errMessages["err_invalid_credentials"] = res.data["message"];
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
.error_message {
  color: rgb(129, 0, 0);
  font-weight: bold;
  font-size: 17px;
}
form {
  border: 5px solid #f1f1f1;
  margin-top: 150px;
  margin-left: 200px;
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
  background-color: #8ebf42;
  color: white;
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
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
