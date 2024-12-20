<script lang="ts" setup>
import { useStore } from "vuex";
import type { ICurrentDayWeatherData } from "~/services/typing/ICurrentDayWeatherData";
import type { IForecastDays } from "~/services/typing/IForecastDays";
import type { ILocation } from "~/services/typing/ILocation";
import CurrentDayCondition from "~/components/CurrentDayCondition.vue";
import CurrentDayInfo from "~/components/CurrentDayInfo.vue";


const store = useStore();
const currentDay: ICurrentDayWeatherData = computed(()=> store.state.weather?.current);
const forecastDays: IForecastDays[] = computed(()=> store.state.weather?.forecast?.forecastday);
const location: ILocation = computed(()=> store.state.weather?.location);
</script>

<template>
  <section class="current-day">
    <div class="container current-day__container">
      <CurrentDayCondition
          :currentDay="currentDay"
          :forecastDays="forecastDays"
          :location="location"
      />
      <CurrentDayInfo />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.current-day{
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .current-day{
    &__container {
      flex-direction: column;
    }
    .current-day__condition, .current-day__info{
      width: 100%;
    }
  }

}

</style>
