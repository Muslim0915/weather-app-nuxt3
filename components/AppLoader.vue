<script lang="ts" setup>

</script>

<template>
  <div class="loader">
    <img src="/images/loader.gif" alt="loader">

  </div>
</template>

<style lang="scss" scoped>

.loader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-color);
  opacity: 0.5;
}

</style>
