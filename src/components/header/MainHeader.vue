<template>
  <div class="main-header">
    <div class="fin-container header-holder">
      <div class="fin-logo">
        <img src="@/assets/img/fin-log.svg" alt="logo">
      </div>
      <div @click="logout" class="header-logout">
        Logout
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'MainHeader',
  methods: {
    logout(){
      localStorage.removeItem('TOKEN');
      this.$router.push('login');
    }
  }
}
</script>
<style>
.main-header{
  width: 100%;
  height: 72px;
  background-color: #35A65B;
}

.fin-container{
  width: 1300px;
  margin: 0 auto;
}

.header-holder{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 32px;
}

.fin-logo {
  cursor: pointer;
}

.header-logout{
  color: #35A65B;
  background: #fff;
  padding: 7px 36px;
}

@media only screen and (max-width: 1300px) {
  .fin-container{
    width: 100%;
    padding: 0 65px;
    box-sizing: border-box;
  }
}
@media only screen and (max-width: 768px) {
  .main-header {
    height: 64px;
  }
}
</style>
