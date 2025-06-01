<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".frame", {
    scrollTrigger: {
      trigger: ".frame",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "power2.out",
  });
});
</script>

<template>
  <div class="bg-white w-full h-full p-[20px] lg:p-[152px]">
    <h1 class="text-[30px] lg:text-[61px] font-bold">We Are</h1>
    <p class="lg:text-[38px]">
      team of like-minded people, socially active companies, media
      personalities, volunteers who help low-income shelters and foster carers
      to support homeless animals.
    </p>
    <h1 class="text-[30px] lg:text-[61px] font-bold mt-[20px] lg:mt-[38px]">
      Our primary goal
    </h1>
    <p class="lg:text-[38px]">
      is to provide animals with the most necessary things - food, medicine, and
      urgent needs for the livelihood of shelters. We believe in our power and
      the power of conscious citizens who care about the environment and their
      health, who understand the importance of helping each other, especially
      our little friends. Growth begins with your care for your loved ones.
      Animals are one of the closest creatures to humans who remain with us
      throughout our lives. We all know the healing power of warmth, grace, and
      big loving eyes.
    </p>
    <div class="flex flex-row items-center gap-4 my-8 lg:w-[900px]">
      <p
        class="lg:text-[38px] border-l-4 border-[#FF97D0] pl-4 lg:pl-8 ml-[10px] lg:ml-[38px]"
      >
        "Animals need to have friends. Just like humans." - James Herriot, All
        Creatures Great and Small
      </p>
    </div>
    <p class="lg:text-[38px]">
      Who else if not we should support our younger brothers, especially in
      difficult times? Let's be friends!
    </p>
    <div class="flex flex-row items-center justify-center">
      <iframe
        class="frame w-full h-[300px] lg:h-[700px] mt-8"
        src="https://www.youtube.com/embed/5Wk1rp99B7o"
        title="YouTube video player"
      ></iframe>
    </div>
  </div>
</template>
