<script lang="ts" setup>
import { useStore } from 'vuex';
import AppLoader from "~/components/AppLoader.vue";
const store = useStore();
onMounted(async ()=>{
  store.commit('setCity', '');
  await store.dispatch('fetchWeather');
});

</script>

<template>
  <div class="app" :class="store.state.theme">
    <AppLoader v-if="store.state.isLoading" />
    <AppNavbar />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.light {
  --primary-color: #4793ff;
  --secondary-color: #dae9ff;
  --white-color: #fff;
  --black-color: #000;
  --light-black-color: #939cb0;
}

.dark {
  --primary-color: #4793ff;
  --secondary-color: #dae9ff;
  --white-color: #000;
  --black-color: #fff;
  --light-black-color: #fff;
}
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  transition: all ease-in-out 0.3s;
}

</style>
