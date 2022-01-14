<template>
  <div class="fin-auth-form-holder">
    <h1 class="header-title">Welcome back!</h1>
    <div class="fin-auth-form">
      <div class="fin-input-field">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="loginForm.email"
          type="text"
          placeholder="Enter email"
        >
      </div>
      <div class="fin-input-field">
        <label for="pass">Password</label>
        <input
          id="pass"
          v-model="loginForm.password"
          type="text"
          placeholder="Minimum 6 symbols"
        >
      </div>
      <div class="fin-input-error-message">
        <span v-if="error" class="fin-error-message">Error email or password</span>
      </div>
      <div class="fin-group-btn">
        <button @click="signIn" class="fin-primary-btn">Sign In</button>
        <div class="fin-link-btn">
          Not registered? <span><a href="#">Sign Up</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/helpers/api";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      error: false
    };
  },
  methods: {
    signIn() {
      this.error = false;
      api.auth.login(this.loginForm).then(
        res => {
          console.log(res, "ok");
          if (res.status === 200) {
            localStorage.setItem("TOKEN", res.data.accessToken);
            this.$router.push("profile");
          } else {
            this.error = true;
          }
        },
        () => {
          this.error = true;
        }
      );
    }
  }
};
</script>
