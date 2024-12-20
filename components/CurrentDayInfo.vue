<script lang="ts" setup>
import { useStore } from "vuex";
import type { ICurrentDayWeatherData } from "~/services/typing/ICurrentDayWeatherData";

const store = useStore();
const currentDay: ICurrentDayWeatherData = computed(()=> store.state.weather?.current);
</script>

<template>
  <div class="current-day__info">
    <div class="current-day__info__item">
      <div class="current-day__info__item__icon"><img src="/images/temp.svg" alt="temperature"></div>
      <h3>Температура</h3>
      <p>{{currentDay?.temp_c}} <span>°</span> - ощущается как {{currentDay?.feelslike_c}} <span>°</span> </p>
    </div>
    <div class="current-day__info__item">
      <div class="current-day__info__item__icon"><img src="/images/pressure.svg" alt="pressure" /> </div>
      <h3> Давление </h3>
      <p>{{currentDay?.pressure_mb}} мм рт. ст.</p>
    </div>
    <div class="current-day__info__item">
      <div class="current-day__info__item__icon"><img src="/images/precipitation.svg" alt="precipitation" /> </div>
      <h3> Осадки </h3>
      <p>{{currentDay?.precip_mm}} мм </p>
    </div>
    <div class="current-day__info__item">
      <div class="current-day__info__item__icon"><img src="/images/wind.svg" alt="wind" /> </div>
      <h3> Ветер </h3>
      <p>{{currentDay?.wind_kph}} км/ч </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.current-day__info{
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 2px 5px 25px -3px var(--light-black-color);
  padding: 40px;
  border-radius: 10px;
  background: {
    image: url("/images/cloud-image.svg");
    repeat: no-repeat;
    position: top right;
  };

  &__item{
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 17px;
    line-height: 28px;

    &__icon{
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: white;
      box-shadow: 2px 5px 25px -3px var(--light-black-color);
    }

    h3{
      color: var(--light-black-color);
      font-weight: 400;
    }

    p{
      color: var(--black-color);
      font-weight: 500;
    }
  }
}

</style>
