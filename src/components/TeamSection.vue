<script>
import CardImageStyle from "../components/CardImageStyle.vue";
import Image1 from "../assets/images/62744ee9fce7fbaf400c22f8_2.jpg";
import Image2 from "../assets/images/62744edaac91b4183ac27e10_5.jpg";
import Image3 from "../assets/images/62744ec97586a996f48f7a85_1.jpg";
import Image4 from "../assets/images/62744eae22e10d8a15f909ef_9.jpg";
import Image5 from "../assets/images/62744e8e05f6c22bac85252a_7.jpg";
import Image6 from "../assets/images/62744f0eb7cd3462ef475ebf_6.jpg";
import Image7 from "../assets/images/62744e6761e425c6956af3a5_3.jpg";
import Image8 from "../assets/images/626ae0bcd92bf48017c14083_basil-square.png";
import Image9 from "../assets/images/626ae01da2a805d176b1606b_Якобчук.jpg";
import Image10 from "../assets/images/627fc796cf3602b53a7512cf_4.jpg";
import Image11 from "../assets/images/627fc7fcdc0f8e9cbcc8ffed_isa-logo-dog-clean.svg";
import Image12 from "../assets/images/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg";

export default {
  components: {
    CardImageStyle,
  },
  data() {
    return {
      teamList: [
        {
          image: Image1,
          name: "Daryna Deriy",
          position: "Chairman of the Board",
        },
        {
          image: Image2,
          name: "Polina Snisarenko-Kulchytska",
          position: "Curator of the Foundation",
        },
        {
          image: Image3,
          name: "Bohdan Kulchytsky",
          position: "Executive Manager",
        },
        {
          image: Image4,
          name: "Mykhaylo Deriy",
          position: "Operation Manager",
        },
        {
          image: Image5,
          name: "Ksenia Nikishina",
          position: "Office Manager",
        },
        {
          image: Image6,
          name: "Anna Andriychuk",
          position: "SMM-manager",
        },
        {
          image: Image7,
          name: "Annastasia Kocalchuk",
          position: "Director",
        },
        {
          image: Image8,
          name: "Basil Gloo",
          position: "Web Developer",
        },
        {
          image: Image9,
          name: "Lina Yakobchuk",
          position: "Designer",
        },
        {
          image: Image10,
          name: "Anastasia Yevchenko",
          position: "Translator",
        },
        {
          image: Image11,
          name: "Office Manager",
          position: "open vacancy",
        },
        {
          image: Image12,
          name: "SEO specialist",
          position: "open vacancy",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="bg-white w-full h-full p-[152px]">
    <h1 class="text-[61px] font-bold">Our Team</h1>
    <p class="text-[38px]">
      consists of completely different people who are united by a common desire
      - to help
    </p>
    <div class="grid grid-cols-4 items-center justify-center w-full mt-[56px]">
      <CardImageStyle
        v-for="(team, index) in teamList"
        :key="index"
        bgColor="#FCF944"
        border-color="border-black"
        custom-class="text-white w-[267.663px] h-[422.575px]"
      >
        <div class="relative">
          <img
            :src="team.image"
            alt="image"
            class="w-full h-full object-cover grayscale"
          />
        </div>
        <div class="mt-[25px] flex flex-col gap-[10px]">
          <h1 class="text-black text-center text-[23px]">{{ team.name }}</h1>
          <p class="text-black text-center text-[19px]">
            {{ team.position }}
          </p>
        </div>
      </CardImageStyle>
    </div>
  </div>
</template>
