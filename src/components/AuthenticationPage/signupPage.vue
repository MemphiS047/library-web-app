<template>
  <div class="paddingDiv">
    <div class="submitFormDiv">
      <form @submit.prevent="submitForm" method="post" class="h-80">
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
          <!-- Account Already exists -->
          <label
            v-if="err_messages['err_acc_exists'] != null"
            class="error_message"
          >
            {{ err_messages["err_acc_exists"]["message"] }}
          </label>
          <!-- Invalid Email -->
          <label
            v-if="err_messages['err_invalid_email'] != null"
            class="error_message"
          >
            {{ err_messages["err_invalid_email"] }}
          </label>
          <!-- No Email -->
          <label
            v-if="err_messages['err_no_email'] != null"
            class="error_message"
          >
            {{ err_messages["err_no_email"] }}
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
          <label
            v-if="err_messages['err_no_pass'] != null"
            class="error_message"
          >
            {{ err_messages["err_no_pass"] }}
          </label>
        </div>
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input
            v-model="user.firstname"
            type="text"
            class="form-control"
            id="firstname"
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input
            v-model="user.lastname"
            type="text"
            class="form-control"
            id="lastname"
            placeholder="Last Name"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signuppage",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        faculty: "def",
        department: "def",
        username: "",
        is_admin: "false",
        password: "",
      },
      err_messages: {
        err_acc_exists: "",
        err_no_pass: "",
        err_no_email: "",
        err_invalid_email: "",
      },
      is_registered: false,
    };
  },
  methods: {
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submitForm() {
      this.err_messages["err_acc_exists"] = "";
      this.err_messages["err_no_pass"] = "";
      this.err_messages["err_no_email"] = "";
      this.err_messages["err_invalid_email"] = "";

      if (!this.user.password) {
        this.err_messages["err_no_pass"] = "Password required.";
      }
      if (!this.user.username) {
        this.err_messages["err_no_email"] = "Username required.";
      } else if (!this.validEmail(this.user.username)) {
        this.err_messages["err_invalid_email"] = "Valid username required.";
      }
      if (
        !this.err_messages["err_acc_exists"] != "" ||
        !this.err_messages["err_no_pass"] != "" ||
        !this.err_messages["err_no_email"] != "" ||
        !this.err_messages["err_invalid_email"] != ""
      ) {
        this.registerUser();
        this.$router.push({ name: "auth", query: { redirect: "/login" } });
        return true;
      }
    },

    registerUser() {
      axios
        .post("http://192.168.0.24:5000/api/register", {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          faculty: this.user.faculty,
          department: this.user.department,
          username: this.user.username,
          is_admin: "false",
          password: this.user.password,
        })
        .then((res) => {
          if (res.data["message"] == "User created successfully") {
            this.err_messages["err_acc_exists"] = "";
            this.is_registered = true;
            this.$router.push(this.$route.query.redirect || "/login");
          } else {
            this.err_messages["err_acc_exists"] = res.data;
            this.is_registered = false;
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
.paddingDiv {
  padding: 0px 200px 0px 200px;
}
.submitFormDiv {
  margin-top: 150px;
  border: 5px solid #f1f1f1;
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
