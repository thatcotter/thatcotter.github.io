<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="MFA Thesis: Grokking Creative Code"
      subtitle="Rethinking Creative Coding Pedagogy"
    ></projectHeadline>

    <ProjectHeroImage url="https://thatcotter.github.io/thesis/" image="thesis-screenshot-big.png" />

    <p>
      For my MFA thesis at Parsons, I focused of methods of teaching programming
      outside of the context of engineering. I specifically focused on a
      pedagogical practice call the Model-First Approach. The model first
      approach is focused on showing a student how a system works wholistically
      before focusing in on the particular aspects of that system. My research
      manifested as a short series of tutorials focused on serving people who
      have started to understand the basics of programming, but aren't yet
      confident enough to dive into more advanced concepts.
    </p>

    <p>
      <a
        class="text-blue-500"
        target="_blank"
        href="https://thatcotter.github.io/thesis/"
        >Link</a
      >
    </p>
  </div>
</template>

<script>
import projectHeadline from "../../components/project-page-components/project-headline.vue";
import ProjectHeroImage from "../../components/project-page-components/project-hero-image.vue";
import ProjectHeroVideo from "../../components/project-page-components/project-hero-video.vue";
export default {
  components: { projectHeadline, ProjectHeroVideo },
};
</script>
,
    ProjectHeroImage
<style>
</style>