<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Brookfield Holiday"
      subtitle="The Wishing Forest"
    ></projectHeadline>

    <ProjectHeroVideo
      :url="'https://player.vimeo.com/video/380809396'"
    ></ProjectHeroVideo>

    <p>
      <a
        class="text-blue-500"
        target="_blank"
        href="https://redpaperheart.com/work/thewishingforest"
        >The Wishing Forest</a
      >
      is a series of installations that are playful twists of classic holiday
      trees. Whether it’s a tree that is lit up with 25,000 individually
      addressable LEDs that react to an ornament flying through pneumatic tubes,
      or a 30 foot bell that creates a symphony of chimes triggered by body
      movement - these are holiday displays that visitor can interact and create
      with. Brookfield invites their holiday guests to try forest groves
      inspired by the mechanical magic of classic coin op arcades and music
      boxes; to make their own memories in crafted sets; and to create their own
      forest scape with trees that analyze the rhythmic properties of their
      voice.
    </p>

    <p><b>Role:</b> Developer (Node.js and Physical Computing)</p>

    <p>
      <b>In collaboration with:</b>
      <ul class="pl-2">
        <li>Zander Brimijoin (Creative Director)</li>
        <li>Daniel Scheibel (Technology Director)</li>
        <li>Lisa Walters (Executive Producer)</li>
        <li>Erin Stowell (Sr Producer)</li>
        <li>Greg Schomburg (Lead Developer)</li>
        <li>Shuvashis Das (Developer)</li>
        <li>Matt K Ross (Developer)</li>
        <li>Danni Huang (Art Direction, Design & Animation)</li>
        <li>Nicole DiLeo (Design & Animation)</li>
        <li>Jiwon Ham (Design & Animation)</li>
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