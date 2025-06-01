<script setup>
import { reactive } from "vue";

import image1 from "../assets/images/628398012a964488bb09078d_13.jpg";
import image2 from "../assets/images/628397b3f06d2066cfe8e9a2_14.jpg";
import image3 from "../assets/images/627fcdfcb2137dcf7db53e7f_12.jpg";
import image4 from "../assets/images/627fcdd72d729d8ecacf6de7_11.jpg";
import image5 from "../assets/images/627fcdaedc0f8eea17c92429_10.jpg";
import image6 from "../assets/images/627fcd87d51b9051dfcbf349_09.jpg";
import image7 from "../assets/images/627fcd5ca9508410b3a0d824_08.jpg";
import image8 from "../assets/images/627fcd3288758547e6ee0e22_07.jpg";
import image9 from "../assets/images/627fcd1790c298c49bc7c436_06.jpg";
import image10 from "../assets/images/627fccf0fc672a5dcfa87ee9_05.jpg";
import image11 from "../assets/images/627fccc57c3cb5177369015e_04.jpg";
import image12 from "../assets/images/627fcc9bc50d7acc036982a9_03.jpg";
import image13 from "../assets/images/627fcc7339e6f5389ed03013_02.jpg";
import image14 from "../assets/images/627fcc4b694dfd4d65a13230_01.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const citizensList = reactive([
  { image: image1, name: "Oleksiy Tritenko", position: "theater and actor" },
  {
    image: image2,
    name: "Stanislav Boklan",
    position: "Poples's Artist of Ukraine",
  },
  {
    image: image3,
    name: "Alexander Rudinsky",
    position: "theater and film actor",
  },
  {
    image: image4,
    name: "Oksana Zhdanova",
    position: "theater and film actress",
  },
  {
    image: image5,
    name: "Natalka Denisenko",
    position: "theater and film actress",
  },
  { image: image6, name: "Maksym Samchyk", position: "theater and film actor" },
  {
    image: image7,
    name: "Kateryna Vyshneva",
    position: "theater and film actress",
  },
  {
    image: image8,
    name: "Irma Vitovska",
    position: "Honored Actress of Ukraine",
  },
  {
    image: image9,
    name: "Igor Portyanko",
    position: "actor of theater and cinema",
  },
  {
    image: image10,
    name: "Dmytro Surzhikov",
    position: "Honored Artist of Ukraine",
  },
  {
    image: image11,
    name: "Daria Barihashvili",
    position: "theater and film actress",
  },
  { image: image12, name: "Vera Kobzar", position: "theater and film actress" },
  {
    image: image13,
    name: "Andriy Fedynchyk",
    position: "theater and film actor",
  },
  {
    image: image14,
    name: "Anastasia Nesterenko",
    position: "theater and film actress",
  },
]);

onMounted(() => {
  const cards = gsap.utils.toArray(".cardCitizenItem");

  cards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: i * 0.01,
      ease: "power2.out",
    });
  });
});
</script>

<template>
  <div class="bg-[#FF97D0] w-full min-h-screen p-[20px] lg:p-[152px]">
    <h1 class="text-[30px] lg:text-[61px] font-bold">
      Socially active citizens
    </h1>
    <p class="lg:text-[38px]">support us</p>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-[20px] lg:mt-[56px]">
      <div
        v-for="(citizen, index) in citizensList"
        :key="index"
        class="cardCitizenItem flex flex-col items-center"
      >
        <img
          :src="citizen.image"
          alt="image"
          class="w-full aspect-[5/5] object-cover grayscale transition duration-300"
        />
        <div class="flex flex-col text-center items-center gap-2 p-4">
          <h1 class="lg:text-[23px] font-semibold text-black">
            {{ citizen.name }}
          </h1>
          <p class="text-[14px] lg:text-[19px] text-black">
            {{ citizen.position }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
