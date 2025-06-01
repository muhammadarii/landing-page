<script setup>
import { ref } from "vue";
import CardStyle from "./CardStyle.vue";
import ButtonStyle from "./ButtonStyle.vue";
import Arrow from "../assets/images/6273a272fe3407579aa3d6c9_PngItem_344959.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const helpList = ref([
  { name: "Shelter of Victoria Bulbyna" },
  { name: "City of faithful hearts" },
  { name: "Shelter of Natalia Tymoshenko" },
  { name: "Shelter of Jeane Sass" },
  { name: "Shelter of Victoria Bondarenko" },
  { name: "Sterilization center" },
  { name: "Zoo chance" },
  { name: "Save lives" },
  { name: "City Center for the Treatment of Animals" },
  { name: "Society for the Protection of Animals in Sumy" },
  { name: "The right to life" },
  { name: "4 paws" },
  { name: "The kingdom of cats" },
  { name: "Zvir" },
  { name: "Mercy" },
  { name: "Happy dog" },
  { name: "Give me a paw, friend" },
  { name: "Friend" },
  { name: "Hope" },
  { name: "Wa are for the right to life" },
  { name: "Planeta" },
  { name: "Second Life" },
  { name: "Happy Shore" },
  { name: "Retrieverteam" },
  { name: "Shelter of Irina Dobrolyubova" },
  { name: "Matilda" },
  { name: "Life" },
  { name: "Second chance" },
  { name: "SOS" },
  { name: "Best friends" },
]);

onMounted(() => {
  const cards = gsap.utils.toArray(".cardHelpItem");

  cards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: i * 0.01,
      ease: "power2.out",
    });
  });
  gsap.from(".buttonHelp", {
    scrollTrigger: {
      trigger: ".buttonHelp",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none play reverse",
    },
    opacity: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    ease: "power2.out",
  });
});
</script>

<template>
  <div class="bg-[#FCF944] w-full h-full p-[20px] lg:p-[152px]">
    <h1 class="text-[30px] lg:text-[61px] font-bold">We want to help</h1>
    <p class="lg:text-[38px]">
      homeless packs, volunteers, guardians, overstayers, shelters and other
      organisations
    </p>
    <div
      class="cardHelp grid grid-cols-2 lg:grid-cols-3 items-center justify-center w-full mt-[20px] lg:mt-[56px]"
    >
      <CardStyle
        v-for="(help, index) in helpList"
        :key="index"
        bgColor="#ffffff"
        border-color="border-black"
        custom-class="cardHelpItem"
        Class="text-black w-full h-[100px] lg:w-[377px] lg:h-[120px] items-center justify-center"
      >
        <div class="flex items-center justify-center h-full lg:p-[20px]">
          <h1 class="text-[15px] lg:text-[23px] text-center font-normal">
            {{ help.name }}
          </h1>
        </div>
      </CardStyle>
    </div>
    <div class="buttonHelp w-fit mt-[143px]">
      <ButtonStyle
        bg-color="#FF97D0"
        custom-class="text-black lg:text-[26px] w-[200px] h-[50px] text-[12px] lg:w-[322px] lg:h-[72px] flex gap-4 items-center justify-center"
      >
        apply for help
        <img
          :src="Arrow"
          alt="arrow"
          class="w-[20px] h-[15px] lg:w-[40px] lg:h-[30px] transform -scale-x-100"
        />
      </ButtonStyle>
    </div>
  </div>
</template>
