<script setup>
import image from "../assets/images/62647f9fbe07235ba9b28d67_star-white-with-animals.svg";
import Youtube from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import Instagram from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import Facebook from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import Patreon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import Telegram from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";

const LogoList = [Youtube, Instagram, Facebook, Patreon, Telegram];
</script>

<template>
  <div
    class="bg-[#31BE32] w-full min-h-screen p-[152px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  >
    <div>
      <h1 class="text-[61px] font-bold">Contact us</h1>
      <p class="text-[38px]">Kyiv, Ukraine</p>
      <p class="text-[38px]">mail@isa.co.ua</p>
      <div class="flex flex-row gap-6 mt-8">
        <img
          v-for="(logo, index) in LogoList"
          :key="index"
          :src="logo"
          alt="social logo"
          class="w-[50px] h-auto cursor-pointer transition-transform duration-300 hover:scale-90"
        />
      </div>
    </div>
    <img :src="image" alt="decorative image" class="w-full max-w-md mx-auto" />
  </div>
  <div class="bg-white w-full h-20"></div>
</template>
