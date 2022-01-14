<template>
  <div class="fin-sidebar">
    <div class="fin-sidebar-list">
      <router-link to="/wallet" class="fin-sidebar-list-item">
        Wallet
      </router-link>
      <router-link to="/transactions" class="fin-sidebar-list-item">
        Transactions
      </router-link>
      <router-link to="/analytics" class="fin-sidebar-list-item">
        Analytics
      </router-link>
      <router-link to="/profile" class="fin-sidebar-list-item">
        Profile
      </router-link>
      <router-link to="/settings" class="fin-sidebar-list-item">
        Settings
      </router-link>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Sidebar'
}
</script>

<style>
.fin-sidebar {
  background-color: #f1f1f1;
  color: #ffffff;
  width: 20%;
  height: 100vh;
  position: fixed;
}
.fin-sidebar-list {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.fin-sidebar-list-item {
  text-decoration: none;
  color: #000;
  padding: 8px 0px 8px 16px;
  outline: none;
  font-size: 18px;
}
.fin-sidebar-list-item:hover {
  background: gray;
  /* transition: 0.3s; */
  /* border-left: 3px solid white; */
}
</style>
