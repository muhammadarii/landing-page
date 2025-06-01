<script setup>
defineProps({
  customClass: {
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
    class="flex justify-center m-4 relative"
    :style="{ backgroundColor: bgColor }"
  >
    <div
      :class="`${customClass} border-3 ${borderColor} bg-transparent px-4 py-2 text-xl font-semibold transition-all duration-300 relative hover:translate-x-4 hover:-translate-y-4`"
    >
      <slot />
    </div>
  </div>
</template>
