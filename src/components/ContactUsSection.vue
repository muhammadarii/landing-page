<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "../assets/images/62647f9fbe07235ba9b28d67_star-white-with-animals.svg";
import Youtube from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import Instagram from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import Facebook from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import Patreon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import Telegram from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";

gsap.registerPlugin(ScrollTrigger);

const LogoList = ref([Youtube, Instagram, Facebook, Patreon, Telegram]);

onMounted(() => {
  gsap.from(".cardContact", {
    scrollTrigger: {
      trigger: ".cardContact",
      start: "top bottom",
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
  <div
    class="bg-[#31BE32] w-full h-full p-[20px] lg:p-[152px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
  >
    <div>
      <h1 class="text-[30px] lg:text-[61px] font-bold">Contact us</h1>
      <p class="text-[20px] lg:text-[38px]">Kyiv, Ukraine</p>
      <p class="text-[20px] lg:text-[38px]">mail@isa.co.ua</p>
      <div class="flex flex-row gap-6 mt-8">
        <img
          v-for="(logo, index) in LogoList"
          :key="index"
          :src="logo"
          alt="social logo"
          class="w-[35px] lg:w-[50px] h-auto cursor-pointer transition-transform duration-300 hover:scale-90"
        />
      </div>
    </div>
    <img
      :src="image"
      alt="decorative image"
      class="cardContact w-full max-w-2xl mx-auto"
    />
  </div>
</template>
