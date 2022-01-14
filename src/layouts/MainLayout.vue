<template>
  <div class="main-layout">
    <MainHeader />
    <div class="fin-main">
      <Sidebar />
      <div class="fin-main-content-holder">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from '@/components/header/MainHeader.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';

export default {
  name: 'MainLayout',
  components: {
    MainHeader,
    Sidebar
  }
}
</script>
<style>
.fin-main {
  display: flex;
  width: 100%;
}

.fin-main-content-holder{
  width: 90%;
  padding: 16px;
  margin-left: 10%;
}
</style>
