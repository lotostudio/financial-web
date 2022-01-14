<template>
  <div id="app">
    <EmptyLayout v-if="!isAuthenticated" />
    <MainLayout v-else />
  </div>
</template>
<script>
import MainLayout from '@/layouts/MainLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

export default {
  name: "App",
  components: {
    MainLayout,
    EmptyLayout
  },
  data() {
    return {
      isAuthenticated: localStorage.getItem("TOKEN")
    }
  }
}
</script>
