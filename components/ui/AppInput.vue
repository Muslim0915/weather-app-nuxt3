<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:value', 'enter']);

const handleInput = (event: Event) => {
  emit('update:value', (event.target as HTMLInputElement).value);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    emit('enter');
  }
};
</script>

<template>
  <input
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      @keydown="handleKeydown"
  />
</template>

<style lang="scss" scoped>
input {
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
}
</style>
