<script lang="ts" setup>
import AppInput from "~/components/ui/AppInput.vue";
import { useStore } from 'vuex';

const store = useStore();


const handleCityChange = (value: string) => {
  store.commit('setCity', value);
};

const handleEnter = async () => {
  if (store.state.city) {
    await store.dispatch('fetchWeather', store.state.city);
  }
};
</script>

<template>
  <div class="navbar">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="logo" /> VUE WEATHER
      </NuxtLink>
      <div class="navbar-buttons">
        <div class="theme-toggle" @click="store.dispatch('toggleTheme')">
          <img src="/images/theme-toggle.svg" alt="toggle" />
        </div>
        <AppInput
            placeholder="Введите город"
            type="search"
            @update:value="handleCityChange"
            @enter="handleEnter"
        >
          Выберите город
        </AppInput>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  margin: 20px 0 30px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 30px;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 25px;
  line-height: 35px;
  color: var(--primary-color);
  font-weight: 700;
}

.navbar-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  input {
    background-color: var(--secondary-color);
    color: var(--black-color);
    text-align: center;
    text-transform: capitalize;
  }
}
</style>
