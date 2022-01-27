<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="ABB Customer Experience Center"
      subtitle="Helping ABB show potential clients how ABB is capturing the future"
    ></projectHeadline>

    <ProjectHeroVideo
      :url="'https://player.vimeo.com/video/400759885'"
    ></ProjectHeroVideo>

    <p>
      While working as a Creative Technologist at
      <a
        class="text-blue-500"
        target="_blank"
        href="https://localprojects.com/work/ABB"
        >Local Projects</a
      >, we collaborated closely with ABB’s global Customer Experience &
      Innovation team in Zurich, devising a modular approach enabling a new
      generation of customer experience centers that rethink how space can
      augment collaboration and creativity. The first instance of the concept
      has a permanent home in ABB’s Corporate Research Center in Ladenburg,
      Germany, and also anchored ABB’s global customer conference in Houston.
      These initial installations were just the start of a multi-year effort by
      ABB’s Customer Experience team to establish similar centers around the
      world.
    </p>

    <p>
      <b>Role:</b> Creative Technologist (WebGL, Node.js, iOS/Swift, Physical
      Computing). Specifically resposible for the Value Drivers station (a webGL
      based experience with a custom-fabricated physical interface comprised of
      a dial and sliders) and the Disruptors station (iOS interface on iPads and
      a custom array of mechanically undulating screens)
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