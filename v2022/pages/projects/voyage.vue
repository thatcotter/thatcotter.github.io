<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Voyage"
      subtitle="A Newtonian Physics-based Puzzle Game"
    ></projectHeadline>

    <ProjectHeroVideo
      :url="'https://player.vimeo.com/video/197938614'"
    ></ProjectHeroVideo>

    <p>
      This game uses the Newtownian model of gravitation and physics as a puzzle mechanic. The objective is to steer your ship over to the red square while being pulled around by the gravitational forces of nearby planetoids. 
    </p>

    <p>Final Project for <a
        class="text-blue-500"
        target="_blank"
        href="https://github.com/reginaflores/AlgoSims2016"
        >Algorithmic Simulations</a
      ></p>
    <p>Made with <a
        class="text-blue-500"
        target="_blank"
        href="https://redpaperheart.com/work/thewishingforest"
        >The Wishing Forest</a
      ></p>
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