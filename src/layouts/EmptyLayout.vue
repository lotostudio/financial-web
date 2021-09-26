<template>
  <div class="empty-layout">
    <LoginHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import LoginHeader from '@/components/header/LoginHeader.vue';

export default {
  name: 'AuthLayout',
  components: {
    // Login,
    LoginHeader,
    // Register
  }
}
</script>
