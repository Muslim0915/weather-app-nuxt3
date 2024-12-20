<script lang="ts" setup>
defineProps({
  currentDay: {
    type: Object,
    default: null,
  },
  forecastDays: {
    type: Array,
    default: null,
  },
  location: {
    type: Object,
    default: null,
  },
})
</script>

<template>
  <div class="current-day__condition">
    <div class="current-day__condition__wrapper">
      <div class="current-day__condition__text">
        <h1>{{currentDay?.temp_c}} <span>°</span> </h1>
        <p>{{ forecastDays?.[0]?.date }}</p>
      </div>
      <div class="current-day__condition__image">
        <img
            :src="currentDay?.condition.icon"
            width="120"
            height="120"
            alt="icon"
        />
      </div>
    </div>

    <div class="current-day__condition__content">
      <p>Время: {{ currentDay?.last_updated.slice(11) }}</p>
      <p>Город: {{ location?.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.current-day__condition {
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 5px 25px -3px var(--light-black-color);
  padding: 35px;
  border-radius: 10px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
    h1{
      font-size: 96px;
      line-height: 106px;
      color: var(--primary-color);
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 60px;
        line-height: 70px;
      }

    }
    p{
      font-size: 30px;
      line-height: 40px;
      color: var(--black-color);
      font-weight: 500;
    }
  }

  &__content {
    p{
      font-size: 30px;
      line-height: 40px;
      color: var(--light-black-color);
      margin-bottom: 14px;

      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}



</style>
