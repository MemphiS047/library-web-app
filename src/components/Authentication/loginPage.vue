<template>
  <form method="post" class="h-80">
    <div class="form-group">
      <label for="userName">User Name</label>
      <input
        type="text"
        class="form-control"
        id="userName"
        aria-describedby="emailHelp"
        placeholder="Enter user name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "loginpage",
  data() {},
};
</script>

<style scoped>
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