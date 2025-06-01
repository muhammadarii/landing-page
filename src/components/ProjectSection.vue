<script setup>
import { ref } from "vue";
import CardStyle from "../components/CardStyle.vue";

const projectsList = ref([
  {
    name: "Emergency Aid. WAR 2022.",
    description:
      "Providing food and medicine to the shelters and animals which lost their homes and families due to the war.",
    color: "#000000",
  },
  {
    name: "Non-commercial feed line",
    description:
      "Construction of industrial production base where food for shelters will be produced on a free basis.",
    color: "#31BE32",
  },
  {
    name: "Education and Control",
    description:
      "Lectures on communication, organisation and coordination of processes, control over the use of aid.",
    color: "#FF97D0",
  },
]);
</script>

<template>
  <div class="bg-[#3E88FF] w-full h-full p-[152px] overflow-auto">
    <h1 class="text-[61px] font-bold text-white">Our projects</h1>
    <p class="text-[38px] text-white max-w-4xl">
      Are very different in terms of priority, scale and complexity of
      implementation.
    </p>

    <div class="flex flex-col items-center justify-center mt-6 space-y-6">
      <CardStyle
        v-for="(project, index) in projectsList"
        :key="index"
        :bgColor="project.color"
        :borderColor="'white'"
        custom-class="text-white w-[1216px] h-[280px]"
      >
        <div class="m-12 space-y-4">
          <h1 class="text-4xl font-semibold">{{ project.name }}</h1>
          <p class="text-2xl">{{ project.description }}</p>
        </div>
      </CardStyle>
    </div>
  </div>
</template>
