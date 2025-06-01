<script>
import image from "../assets/images/62647f9fbe07235ba9b28d67_star-white-with-animals.svg";
import Youtube from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import Instagram from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import Facebook from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import Patreon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import Telegram from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";

export default {
  data() {
    return {
      image,
      LogoList: [Youtube, Instagram, Facebook, Patreon, Telegram],
    };
  },
};
</script>
<template>
  <div class="bg-[#31BE32] w-full h-full p-[152px] grid grid-cols-2">
    <div>
      <h1 class="text-[61px] font-bold">Contact us</h1>
      <p class="text-[38px]">Kyiv, Ukraine</p>
      <p class="text-[38px]">mail@isa.co.ua</p>
      <div class="flex flex-row gap-4 mt-[32px]">
        <img
          v-for="(image, index) in LogoList"
          :key="index"
          :src="image"
          alt="image"
          class="w-[50px] h-auto hover:scale-75 duration-300"
        />
      </div>
    </div>
    <img :src="image" alt="image" />
  </div>
  <div class="bg-[#ffffff] w-full h-20"></div>
</template>
