<script lang="ts" setup>
import type { IForecastDays } from "~/services/typing/IForecastDays";

interface IProps {
  day: IForecastDays;
}
defineProps<IProps>();
function getDayOfWeekName(date: string) {
  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const dateObject = new Date(date);
  return daysOfWeek[dateObject.getDay()];
}
</script>

<template>
  <div class="forecastday-item">
    <h2 class="forecastday-item__title">
      {{ getDayOfWeekName(day?.date) }}
    </h2>
    <div class="forecastday-item__date">
      <p>{{ day?.date }}</p>
    </div>
    <div class="forecastday-item__image">
      <img
          :src="day?.day.condition.icon"
          width="120"
          height="120"
          alt="icon"
      >
    </div>
    <div class="forecastday-item__temp">
      <p class="forecastday-item__temp__max">
        {{ day?.day.maxtemp_c }} <span>°</span>
      </p>
      <p class="forecastday-item__temp__min">
        {{ day?.day.mintemp_c }} <span>°</span>
      </p>

      <div class="forecastday-item__temp__text">
        <p>{{ day?.day.condition.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forecastday-item{
  background-color: var(--secondary-color);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: none;
    width: auto;
  }

  &__date{
    color: var(--light-black-color);
  }
  &__temp__max{
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
  }
  &__temp__text{
    margin-top: 10px;
    color: var(--light-black-color);
  }
}
</style>
