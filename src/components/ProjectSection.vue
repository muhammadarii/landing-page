<script>
import CardStyle from "../components/CardStyle.vue";

export default {
  components: {
    CardStyle,
  },
  data() {
    return {
      projectsList: [
        {
          name: "Emergency Aid. WAR 2022.",
          description:
            "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
          color: "#000000",
        },
        {
          name: "Non-commercial feed line",
          description:
            "construction of industrial production base where food for shelters will be produced on a free basis",
          color: "#31BE32",
        },
        {
          name: "Education and Control",
          description:
            "lectures on communication, organisation and coordination of processes, control over the use of aid",
          color: "#FF97D0",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-[#3E88FF] w-full h-full p-[152px] overflow-auto">
    <h1 class="text-[61px] font-bold text-white">Our projects</h1>
    <p class="text-[38px] text-white">
      are very different in terms of priority, scale and complexity of
      implementation
    </p>
    <div class="flex flex-col items-center justify-center mt-[24px] space-y-6">
      <CardStyle
        v-for="(project, index) in projectsList"
        :key="index"
        :bgColor="project.color"
        border-color="border-white"
        custom-class="text-white w-[1216.65px] h-[279.675px]"
      >
        <div class="m-[50px] space-y-[15px]">
          <h1 class="text-[46px]">{{ project.name }}</h1>
          <p class="text-[30px]">
            {{ project.description }}
          </p>
        </div>
      </CardStyle>
    </div>
  </div>
</template>
