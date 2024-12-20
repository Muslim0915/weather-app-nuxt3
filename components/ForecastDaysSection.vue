<script lang="ts" setup>

import AppButton from "~/components/ui/AppButton.vue";
import { useStore } from "vuex";
const store = useStore();

const forecastDays = computed(()=> store.state.weather?.forecast?.forecastday);
</script>

<template>
  <section class="forecastdays-section">
    <div class="container forecastdays-section__container">
      <div class="forecastdays-section__items">
        <ForecastDayItem
        v-for="(item, index) in forecastDays"
        :key="index"
        :day="item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.forecastdays-section {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__items{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
    @media (max-width: 768px) {
      .forecastdays-section__items{
        grid-template-columns: repeat(2, 1fr);
      }
    }
  @media (max-width: 425px) {
    .forecastdays-section__items{
      grid-template-columns: repeat(1, 1fr);
    }
  }

}


</style>
