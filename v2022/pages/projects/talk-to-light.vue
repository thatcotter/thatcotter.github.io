<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Talk to Light"
      subtitle="An all-knowing light beam you can talk to"
    ></projectHeadline>

    <ProjectHeroImage
      url="https://redpaperheart.com/work/talktolight"
      image="google_talktolight_sxsw_hero-1920.jpg"
    />

    <p>
      This project was done while I was interning at <a
        class="text-blue-500"
        target="_blank"
        href="https://redpaperheart.com/work/thewishingforest"
        >Red Paper Heart</a
      >. We teamed up with some friends at Google to design an open source art installation that would showcase the potential of the technology from Red Paper Heart’s unique point of view and inspire developers and makers everywhere to build things using Custom Device Actions. 
    </p>

    <p><b>Role:</b> Code Intern (openframeworks/C++)</p>

    <p>
      <b>In collaboration with:</b>
      <ul class="pl-2">
        <li>Zander Brimijoin (Creative Director)</li>
        <li>Daniel Scheibel (Technology Director)</li>
        <li>Lisa Walters (Executive Producer)</li>
        <li>Greg Schomburg (Lead Developer)</li>
        <li>Shuvashis Das (Developer)</li>
        <li>Pedro Piccinini (Art Director)</li>
        <li>Adrià Navarro López (Developer)</li>
        <li>Ji Young Chun (Code Intern)</li>
      </ul>  
    </p>

    <div class="grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
      <img class="object-cover w-full h-full" src="~/assets/img/google_talktolight_02-1440.jpg" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/google_talktolight_03-1440.jpg" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/google_talktolight_06-1440.jpg" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/google_talktolight_07-1440.jpg" alt="">
    </div>
  </div>
</template>

<script>
import projectHeadline from "../../components/project-page-components/project-headline.vue";
import ProjectHeroImage from "../../components/project-page-components/project-hero-image.vue";
export default {
  components: { projectHeadline, ProjectHeroImage },
};
</script>
,
    ProjectHeroImage
<style>
</style>