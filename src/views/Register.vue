<template>
  <div class="fin-login-section">
    <div class="fin-login-form-holder">
      <div class="fin-login-form-title-holder">
        <h1>Create new account!</h1>
      </div>
      <div class="fin-login-form">
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
<style>
.fin-login-section{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.fin-login-form-holder{
  width: 400px;
}

.fin-login-form-title-holder h1 {
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  color: rgba(0, 0, 0, 0.7);
}

.fin-input-field{
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.fin-input-field label{
  font-family: Mulish;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  color: #35A65B;
}

.fin-input-field input{
  background: #FFFFFF;
  border: 3px solid #1C9444;
  box-sizing: border-box;
  padding: 16px;
}

.fin-input-field input::placeholder{
  font-family: Mulish;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
}

.fin-group-btn{
  display: flex;
  flex-direction: column;
  text-align: center;
}

.fin-primary-btn{
  padding: 16px;
  background: #8EE88C;
  border: none;
  outline: none;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 24px;
}

.fin-link-btn{
  font-family: Mulish;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  color: #35A65B;
}
</style>

