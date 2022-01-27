<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Magical Gurl Mecha"
      subtitle="A cooperative, anime-inspired space adventure"
    ></projectHeadline>

    <ProjectHeroVideo
      :url="'https://player.vimeo.com/video/245480772'"
    ></ProjectHeroVideo>

    <p>
      
      This project was an assignment for <a
        class="text-blue-500"
        target="_blank"
        href="https://new-arcade.tumblr.com/"
        >New Arcade</a
      >, a class focused on making unconventional controllers for video games. Inspired by media like Sailor Moon, Pacific Rim, and games like QWOP, we made a game centered around flying a magical robot with a friend through motion-based controls. By waving your arms, you and your partner will guide the rocket thrusters of your robot as a sort of three-legged-race to avoid asteroids and save earth. 
    </p>

    <p><b>Role:</b> OpenCV programming and OSC protocol </p>

    <p>
      <b>In collaboration with:</b>
      <ul class="pl-2">
        <li> <a class="text-blue-500" href="http://https://sydneyadamsdesigns.com/" target="_blank" rel="noopener noreferrer">Sydney Adams</a>  (Design Lead)</li>
        <li> <a class="text-blue-500" href="https://sites.google.com/site/taeyonii/" target="_blank" rel="noopener noreferrer">Taeyeon Kim</a> (Art Assets)</li>
        <li> <a class="text-blue-500" href="https://www.jung3.com/" target="_blank" rel="noopener noreferrer">Seungho Jung</a> (Unity Programming)</li>
      </ul>  
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