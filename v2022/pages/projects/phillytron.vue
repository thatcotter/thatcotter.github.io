<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Phillytron"
      subtitle="Showcasing Indie Game Development in Philadelphia"
    ></projectHeadline>

    <ProjectHeroVideoFile :src="'phillytron.mp4'" />

    <p>
      This project was done in collaboration with <a
        class="text-blue-500"
        target="_blank"
        href="http://www.phillygamemechanics.com/"
        >Philly Game Mechanics</a
      >, a non-profit organization in Philadelphia that leads and organizes indie game development events like game jams, talks, and workshops. The Phillytron is an arcade cabinet that showcases published games from local studios in Philly as well as past game jam winners. 
    </p>
    <p>
       The Phillytron has been featured at The Franklin Institute, MAGFest, PAX East, and is scheduled to show at other various gaming festivals, conventions, and expos in the Northeast US.
    </p>

    <p><a
        class="text-blue-500" target="_blank"
        href="https://twitter.com/i/events/997992280911998983"
        >Twitter buzz about the Phillytron</a
      ></p>

    <p>
      <b>Role:</b> Unity Developer, HLSL Shaders
    </p>

    <p>
      <b>In collaboration with:</b>
      <ul class="pl-2">
        <li>Steph Petit (Technical Lead)</li>
        <li>Marina Romero (Cabinet Art)</li>
        <li>Jake O'Brien (Producer)</li>
      </ul>  
    </p>

    <div class="grid sm:grid-cols-2 sm:grid-rows-1 gap-4">
      <img class="object-cover w-full h-full" src="~/assets/img/phillytron1.png" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/phillytron2.jpg" alt="">
    </div>
  </div>
</template>

<script>
import projectHeadline from "../../components/project-page-components/project-headline.vue";
import ProjectHeroVideoFile from "../../components/project-page-components/project-hero-video-file.vue";
import ProjectHeroVideo from "../../components/project-page-components/project-hero-video.vue";
export default {
  components: { projectHeadline, ProjectHeroVideo, ProjectHeroVideoFile },
};
</script>

<style>
</style>