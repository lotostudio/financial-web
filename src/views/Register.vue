<template>
  <div class="fin-auth-form-holder">
    <h1 class="header-title">Create new account!</h1>
    <div class="fin-auth-form">
      <div class="fin-input-field">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="registerForm.firstName"
          type="text"
          placeholder="Enter name"
        >
      </div>
      <div class="fin-input-field">
        <label for="sname">Surname</label>
        <input
          id="sname"
          v-model="registerForm.lastName"
          type="text"
          placeholder="Enter surname"
        >
      </div>
      <div class="fin-input-field">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="registerForm.email"
          type="text"
          placeholder="Enter email"
        >
      </div>
      <div class="fin-input-field">
        <label for="pass">Password</label>
        <input
          id="pass"
          v-model="registerForm.password"
          type="text"
          placeholder="Minimum 6 symbols"
        >
      </div>
      <div class="fin-input-error-message">
        <span v-if="error" class="fin-login-form-error">Invalid data</span>
      </div>
      <div class="fin-group-btn">
        <button @click="signUp" class="fin-primary-btn">Sign up</button>
        <div class="fin-link-btn">
          Already registered? <span><a href="#">Sign Up</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/helpers/api";

export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      error: false
    };
  },
  methods: {
    signUp() {
      this.error = false;
      api.auth.register(this.registerForm).then(
        res => {
          console.log(res, "ok");
          this.$router.push("login");
        },
        () => {
          this.error = true;
        }
      );
    }
  }
};
</script>

