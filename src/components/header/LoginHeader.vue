<template>
  <div class="login-header">
    <div class="fin-container header-holder">
      <div class="fin-logo">
        <img src="@/assets/img/fin-log.svg" alt="logo">
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'LoginHeader'
}
</script>
<style>
.login-header{
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
}

.fin-logo img{
  width: 140px;
}

@media only screen and (max-width: 1300px) {
  .fin-container{
    width: 100%;
    padding: 0 65px;
    box-sizing: border-box;
  }
}
@media only screen and (max-width: 768px) {
  .login-header {
    height: 64px;
  }
}
</style>
