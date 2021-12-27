<template>
  <div class="paddingDiv">
    <div class="submitFormDiv">
      <form @submit="submitForm" method="post" class="h-80">
        <div class="form-group">
          <label for="userName">User Name</label>
          <input
            v-model="user.userName"
            type="text"
            class="form-control"
            id="userName"
            aria-describedby="emailHelp"
            placeholder="Enter user name"
          />
          <label v-if="error_message.length == 1" class="error_message">
            {{ error_message[0]["message"] }}
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
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            v-model="user.firstName"
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <label for="firstName">Last Name</label>
          <input
            v-model="user.lastName"
            type="text"
            class="form-control"
            id="lastName"
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
      deneme: "asdasd",
      user: {
        firstName: "",
        lastName: "",
        faculty: "def",
        department: "def",
        userName: "",
        is_admin: "false",
        password: "",
      },
      error_message: [],
    };
  },
  methods: {
    submitForm(e) {
      this.error_message = [];
      axios
        .post("http://192.168.0.24:5000/adduser", {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          faculty: this.user.faculty,
          department: this.user.department,
          username: this.user.userName,
          is_admin: "false",
          password: this.user.password,
        })
        .then((res) => {
          if (res.data["message"] == "User created successfully") {
            this.error_message = [];
          } else {
            this.error_message.push(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      e.preventDefault();
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