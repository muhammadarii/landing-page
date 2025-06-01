<script setup>
import { ref, computed, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ButtonDonate from "../components/ButtonStyle.vue";
import Image1 from "../assets/images/627fc7fcdc0f8e9cbcc8ffed_isa-logo-dog-clean.svg";
import Image2 from "../assets/images/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg";
import Youtube from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import Instagram from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import Facebook from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import Patreon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import Telegram from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";

gsap.registerPlugin(ScrollTrigger);

const logoList = [Youtube, Instagram, Facebook, Patreon, Telegram];

const images = [Image1, Image2];
const currentIndex = ref(0);
const logo = ref(null);

const currentImage = computed(() => images[currentIndex.value]);

const startImageTransition = () => {
  setInterval(() => {
    if (!logo.value) return;

    gsap.to(logo.value, {
      duration: 0.2,
      y: 100,
      opacity: 0,
      onComplete: () => {
        currentIndex.value = (currentIndex.value + 1) % images.length;

        gsap.set(logo.value, { y: -100 });

        gsap.to(logo.value, {
          duration: 0.2,
          y: 0,
          opacity: 1,
        });
      },
    });
  }, 3000);
};

onMounted(() => {
  startImageTransition();
  gsap.from(".innovative", {
    scrollTrigger: {
      trigger: ".innovative",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".up", {
    scrollTrigger: {
      trigger: ".up",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".down", {
    scrollTrigger: {
      trigger: ".down",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".buttonDonate", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.out",
  });
});
</script>

<template>
  <div class="bg-[#FCF944] w-full h-screen relative">
    <div class="buttonDonate fixed top-2 right-2 lg:top-4 lg:right-4">
      <ButtonDonate
        bg-color="#ffffff"
        custom-class="px-2 lg:px-0 lg:w-[120.838px] lg:h-[59.475px] lg:text-[30px] font-normal"
        >donate</ButtonDonate
      >
    </div>
    <div class="flex flex-col justify-center items-center h-full">
      <div
        class="flex flex-row gap-8 justify-center items-center text-center px-4"
      >
        <img
          ref="logo"
          :src="currentImage"
          alt="image"
          class="down w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] mb-4"
        />
        <h1
          class="innovative text-[20px] lg:text-[60px] text-start font-bold lg:leading-16 max-w-[100px] lg:max-w-[250px]"
        >
          Innovative Solutions for Animals
        </h1>
      </div>
      <p class="up lg:text-[40px]">charity organization</p>
      <div class="up flex flex-row gap-4">
        <img
          v-for="(image, index) in logoList"
          :key="index"
          :src="image"
          alt="image"
          class="mt-6 lg:mt-0 w-[35px] lg:w-[50px] h-auto hover:scale-75 duration-300"
        />
      </div>
    </div>
  </div>
</template>
