<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  }
});
</script>

<template>
  <button
    class="w-full px-4 py-2 tracking-wide text-white uppercase transition-colors duration-200 transform bg-[#F30168] rounded-md hover:bg-[#F30168]/80 focus:outline-none focus:bg-[#F30168]/80">
    {{ props.buttonText }}
  </button>
</template>
