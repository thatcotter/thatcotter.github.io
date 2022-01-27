<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Planet Word"
      subtitle="The World's First Voice-Activated Museum"
    ></projectHeadline>

    <ProjectHeroVideo
      :url="'https://player.vimeo.com/video/471044203'"
    ></ProjectHeroVideo>

    <p>
      While working as a Creative Technologist at
      <a
        class="text-blue-500"
        target="_blank"
        href="https://localprojects.com/work/corporate-experience/abb/"
        >Local Projects</a
      >
      Local Projects, the team worked with philanthropist Ann Friedman and her
      team to transform the Franklin School, a National Historical Landmark,
      located six blocks from the White House into Planet Word, the world's
      first voice-activated museum of language. Through ten immersive learning
      galleries, visitors can use their voices to interact and engage with
      exhibits while hearing from a diverse international cast of leaders,
      authors, and everyday people who share what language means to them.
    </p>

    <p>
      <b>Role:</b> Creative Technologist (WebGL, Node.js, C++). Specifically
      resposible for creating prototyping tools for the kinetic chandelier in
      the main hall. The prototyping tools included a webGL-based 3D simulation
      of the hall and globe, as well as a program for processing video and
      images and mapping them onto the LEDs of the simulated globe
    </p>
  </div>
</template>

<script>
import projectHeadline from "../../components/project-page-components/project-headline.vue";
import ProjectHeroVideo from "../../components/project-page-components/project-hero-video.vue";
export default {
  components: { projectHeadline, ProjectHeroVideo },
};
</script>

<style>
</style>