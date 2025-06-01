<script>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectSection from "../components/ProjectSection.vue";
import HelpSection from "../components/HelpSection.vue";
import TeamSection from "../components/TeamSection.vue";
import CitizenSection from "../components/CitizenSection.vue";
import PartnersSection from "../components/PartnersSection.vue";
import ContactUsSection from "../components/ContactUsSection.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    ProjectSection,
    HelpSection,
    TeamSection,
    CitizenSection,
    PartnersSection,
    ContactUsSection,
  },
};
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ProjectSection />
  <HelpSection />
  <TeamSection />
  <CitizenSection />
  <PartnersSection />
  <ContactUsSection />
</template>
