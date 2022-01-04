<template>
  <form @submit.prevent="submitForm" method="get" class="h-80">
    <div class="form-group">
      <label for="username">User Name</label>
      <input
        v-model="user.username"
        type="text"
        class="form-control"
        id="username"
        aria-describedby="emailHelp"
        placeholder="Enter user name"
      />
      <!-- No Email -->
      <label v-if="err_messages['err_no_email'] != null" class="error_message">
        {{ err_messages["err_no_email"] }}
      </label>
      <!-- Invalid Credentials -->
      <label
        v-if="err_messages['err_invalid_credentials'] != null"
        class="error_message"
      >
        {{ err_messages["err_invalid_credentials"] }}
      </label>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="user.password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
      <!-- No Password -->
      <label v-if="err_messages['err_no_pass'] != null" class="error_message">
        {{ err_messages["err_no_pass"] }}
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
      api_response: null,
      user: {
        username: "",
        password: "",
      },
      err_messages: {
        err_invalid_credentials: "",
        err_no_pass: "",
        err_no_email: "",
      },
      is_authenticated: false,
    };
  },
  methods: {
    submitForm() {
      this.err_messages["err_invalid_credentials"] = "";
      this.err_messages["err_no_pass"] = "";
      this.err_messages["err_no_email"] = "";

      if (!this.user.password) {
        this.err_messages["err_no_pass"] = "Password required.";
      }
      if (!this.user.username) {
        this.err_messages["err_no_email"] = "Username required.";
      }
      if (
        !this.err_messages["err_invalid_credentials"] != "" ||
        !this.err_messages["err_no_pass"] != "" ||
        !this.err_messages["err_no_email"] != ""
      ) {
        this.loginUser();
        this.$router.push({ name: "auth", query: { redirect: "/" } });
        return true;
      }
    },

    loginUser() {
      this.error_message = [];
      axios
        .post("http://192.168.0.24:5000/api/auth", {
          username: this.user.username,
          password: this.user.password,
        })
        .then((res) => {
          console.log(res.data["credentials"]);
          if (res.data["message"] === "Authentication successful") {
            this.api_response = res.data;
            this.is_authenticated = true;
            this.$router.push(this.$route.query.redirect || "/");
            this.$store.state.userid = res.data["credentials"]["userid"];
            this.$store.state.username = res.data["credentials"]["username"];
            this.$store.state.firstname = res.data["credentials"]["firstname"];
            this.$store.state.lastname = res.data["credentials"]["lastname"];
            this.$store.commit('login');
          } else {
            this.err_messages["err_invalid_credentials"] = res.data["message"];
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
