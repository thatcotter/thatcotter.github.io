<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Huluween 2020"
      subtitle="A Virtual Haunted House Showcasing Hulu's Spookiest Content"
    ></projectHeadline>

    <ProjectHeroVideoFile :src="'huluween.mp4'" />

    <p>
      As one of Hulu’s largest brand tentpole campaigns, we were tasked with introducing Huluween through an immersive and thrilling web experience. It is a celebration of fandom and love for spooky and scary TV during the most creative and expressive of holidays. In the spirit of the spooky season, Hulu invited us to explore the core creative motif and cathartic release of…screaming.
    </p>

    <p><b>Role:</b> Front End Developer (WebGL, JS, HTML/CSS), specifically resposible for the tarot card UI, organizing the sound and sound effects engine, making shaders for visual polish and processing user images into social-media-friendly share cards </p>

    <p>
      <a
        class="text-blue-500"
        target="_blank"
        href="https://medium.com/active-theory/huluween-the-screamlands-b1324f32ee7d"
        >Active Theory Case Study</a
      >
    </p>

    <ProjectHeroVideo
      :url="'https://player.vimeo.com/video/510851234'"
    ></ProjectHeroVideo>
    
  </div>
</template>

<script>
import projectHeadline from "../../components/project-page-components/project-headline.vue";
import ProjectHeroVideoFile from '../../components/project-page-components/project-hero-video-file.vue';
import ProjectHeroVideo from "../../components/project-page-components/project-hero-video.vue";
export default {
  components: { projectHeadline, ProjectHeroVideo, ProjectHeroVideoFile },
};
</script>

<style>
</style>