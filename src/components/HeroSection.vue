<script>
import { gsap } from "gsap";
import ButtonDonate from "../components/ButtonStyle.vue";
import Image1 from "../assets/images/627fc7fcdc0f8e9cbcc8ffed_isa-logo-dog-clean.svg";
import Image2 from "../assets/images/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg";
import Youtube from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import Instagram from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import Facebook from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import Patreon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import Telegram from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";

export default {
  components: {
    ButtonDonate,
  },
  data() {
    return {
      images: [Image1, Image2],
      currentIndex: 0,
      Youtube,
      Instagram,
      Facebook,
      Patreon,
      Telegram,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    this.startImageTransition();
  },
  methods: {
    startImageTransition() {
      setInterval(() => {
        const img = this.$refs.logo;

        gsap.to(img, {
          duration: 0.2,
          y: 100,
          opacity: 0,
          onComplete: () => {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;

            gsap.set(img, { y: -100 });

            gsap.to(img, {
              duration: 0.2,
              y: 0,
              opacity: 1,
            });
          },
        });
      }, 3000);
    },
  },
};
</script>

<template>
  <div class="bg-[#FCF944] w-full h-screen relative">
    <div class="fixed top-4 right-4">
      <ButtonDonate bg-color="#ffffff">donate</ButtonDonate>
    </div>
    <div class="flex flex-col justify-center items-center h-full">
      <div
        class="flex flex-row gap-8 justify-center items-center text-center px-4"
      >
        <img
          ref="logo"
          :src="currentImage"
          alt="image"
          class="w-[250px] h-[250px] mb-4"
        />
        <h1 class="text-[60px] text-start font-bold leading-16 max-w-[250px]">
          Innovative Solutions for Animals
        </h1>
      </div>
      <p class="text-[40px]">charity organization</p>
      <div class="flex flex-row gap-4">
        <img
          :src="Youtube"
          alt="Youtube"
          class="w-[50px] h-auto hover:scale-75 duration-300"
        />
        <img
          :src="Instagram"
          alt="Instagram"
          class="w-[50px] h-auto hover:scale-75 duration-300"
        />
        <img
          :src="Facebook"
          alt="Facebook"
          class="w-[50px] h-auto hover:scale-75 duration-300"
        />
        <img
          :src="Patreon"
          alt="Patreon"
          class="w-[50px] h-auto hover:scale-75 duration-300"
        />
        <img
          :src="Telegram"
          alt="Telegram"
          class="w-[50px] h-auto hover:scale-75 duration-300"
        />
      </div>
    </div>
  </div>
</template>
