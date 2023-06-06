<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  labelClass: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },

});

const emit = defineEmits(['update:modelValue']);

const inputClass = `input ${props.class}`;
</script>
  
<template>
  <div>
    <label
      :for="props.name"
      :class="props.labelClass">{{ props.label }}</label>
    <input
      :id="name"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :class="inputClass"
      @input="emit('update:modelValue', $event.target.value)">
  </div>
</template>