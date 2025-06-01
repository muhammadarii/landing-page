<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
  Class: {
    type: String,
    default: "",
  },
  bgColor: {
    type: String,
    default: "",
  },
  borderColor: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    :class="`${customClass} flex justify-center m-4 relative`"
    :style="{ backgroundColor: bgColor }"
  >
    <div
      :class="`${Class} border-4 ${borderColor} bg-transparent px-4 py-2 text-xl font-semibold transition-all duration-300 relative hover:scale-90`"
    >
      <slot />
    </div>
  </div>
</template>
