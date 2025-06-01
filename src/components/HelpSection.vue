<script>
import CardStyle from "./CardStyle.vue";
import ButtonStyle from "./ButtonStyle.vue";
import Arrow from "../assets/images/6273a272fe3407579aa3d6c9_PngItem_344959.png";

export default {
  components: {
    CardStyle,
    ButtonStyle,
  },
  data() {
    return {
      Arrow,
      helpList: [
        {
          name: "Shelter of Victoria Bulbyna",
        },
        {
          name: "City of faithful hearts",
        },
        {
          name: "Shelter of Natalia Tymoshenko",
        },
        {
          name: "Shelter of Jeane Sass",
        },
        {
          name: "Shelter of Victoria Bondarenko",
        },
        {
          name: "Sterilization center",
        },
        {
          name: "Zoo chance",
        },
        {
          name: "Save lives",
        },
        {
          name: "City Center for the Treatment of Animals",
        },
        {
          name: "Society for the Protection of Animals in Sumy",
        },
        {
          name: "The right to life",
        },
        {
          name: "4 paws",
        },
        {
          name: "The kingdom of cats",
        },
        {
          name: "Zvir",
        },
        {
          name: "Mercy",
        },
        {
          name: "Happy dog",
        },
        {
          name: "Give me a paw, friend",
        },
        {
          name: "Friend",
        },
        {
          name: "Hope",
        },
        {
          name: "Wa are for the right to life",
        },
        {
          name: "Planeta",
        },
        {
          name: "Second Life",
        },
        {
          name: "Happy Shore",
        },
        {
          name: "Retrieverteam",
        },
        {
          name: "Shelter of Irina Dobrolyubova",
        },
        {
          name: "Matilda",
        },
        {
          name: "Life",
        },
        {
          name: "Second chance",
        },
        {
          name: "SOS",
        },
        {
          name: "Best friends",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="bg-[#FCF944] w-full h-full p-[152px]">
    <h1 class="text-[61px] font-bold">We want to help</h1>
    <p class="text-[38px]">
      homeless packs, volunteers, guardians, overstayers, shelters and other
      organisations
    </p>
    <div class="grid grid-cols-3 items-center justify-center w-full mt-[56px]">
      <CardStyle
        v-for="(help, index) in helpList"
        :key="index"
        bgColor="#ffffff"
        border-color="border-black"
        custom-class="text-black w-[377px] h-[120px] items-center justify-center"
      >
        <div class="flex items-center justify-center h-full p-[20px]">
          <h1 class="text-[23px] text-center font-normal">{{ help.name }}</h1>
        </div>
      </CardStyle>
    </div>
    <div class="w-fit mt-[143px]">
      <ButtonStyle
        bg-color="#FF97D0"
        custom-class="text-black text-[26px] w-[322px] h-[72px] flex gap-4 items-center justify-center"
      >
        apply for help<img
          :src="Arrow"
          alt="arrow"
          class="w-[40px] h-[30px] transform -scale-x-100"
        />
      </ButtonStyle>
    </div>
  </div>
</template>
