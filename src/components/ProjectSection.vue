<script setup>
import CardStyle from "../components/CardStyle.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const projectsList = [
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
];

onMounted(() => {
  const cards = gsap.utils.toArray(".cardProject");

  cards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
        end: "80% top",
        toggleActions: "play reset play reverse",
      },
      opacity: 0,
      x: -100,
      duration: 0.8,
      delay: i * 0.2,
      ease: "power2.out",
    });
  });
});
</script>

<template>
  <div class="bg-[#3E88FF] w-full h-full p-[20px] lg:p-[152px]">
    <h1 class="text-[30px] lg:text-[61px] font-bold text-white">
      Our projects
    </h1>
    <p class="lg:text-[38px] text-white max-w-4xl">
      Are very different in terms of priority, scale and complexity of
      implementation.
    </p>

    <div class="flex flex-col items-center justify-center mt-6 space-y-6">
      <CardStyle
        v-for="project in projectsList"
        :key="project.name"
        :bgColor="project.color"
        :borderColor="'white'"
        :custom-class="'cardProject'"
        Class="flex items-center text-white w-full h-[200px] lg:w-[1216px] lg:h-[280px]"
      >
        <div class="lg:m-12 space-y-4">
          <h1 class="text-2xl lg:text-4xl font-semibold">{{ project.name }}</h1>
          <p class="text-sm lg:text-2xl">{{ project.description }}</p>
        </div>
      </CardStyle>
    </div>
  </div>
</template>
