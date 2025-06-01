<script>
import logo1 from "../assets/images/62aa3401042d425391235aaa_Logo-adviRES.jpg";
import logo2 from "../assets/images/62aa33e1380de680b7110ebf_ovid-wind-logo.png";
import logo3 from "../assets/images/6265d803f32677c8352bc485_tbs_logo1-02.png";
import logo4 from "../assets/images/6265d7edf0c46ce38f559328_download.png";
import logo5 from "../assets/images/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy.png";
import logo6 from "../assets/images/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21 20.43.09.jpeg";

export default {
  data() {
    return {
      images: [logo1, logo2, logo3, logo4, logo5, logo6],
    };
  },
};
</script>
<template>
  <div class="bg-white w-full h-screen p-[152px]">
    <h1 class="text-[61px] font-bold">Our partners</h1>
    <p class="text-[38px]">
      are take care of our fund and help us with many questions
    </p>
    <div
      class="grid grid-cols-4 gap-[58px] items-center justify-center w-full mt-[56px]"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="image"
        class="w-[276px] h-[107px] object-contain object-center grayscale"
      />
    </div>
  </div>
</template>
