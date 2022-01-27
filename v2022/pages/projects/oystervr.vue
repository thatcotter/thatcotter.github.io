<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="The Story of an Oyster Reef"
      subtitle="Everything is Connected"
    ></projectHeadline>

    <ProjectHeroVideoFile :src="'oystervr-2.mp4'" />

    <p>
      In January of 2019, Tammy Walters and Anezka Sebek were awarded a Verizon
      Foundation Educational Technology Challenge Grant to serve as a use case
      for new 5G technology. They sought to find solutions to collaborating with
      the student cohorts in their Educational Technology and Design Thinking
      Studio at Parsons.
    </p>
    <p>
      The problem: Jersey City Learning Community Charter School middle school
      students and New York City Parsons School of Design college students are
      on opposite shores of the Hudson River. They struggled for the previous
      three years of the studio with the travel time between the two sites.
    </p>
    <p>
      In this fourth iteration of the collaboration studio in the Spring
      semester of 2019 (February – May), the studio attempted several different
      iterations of collaborating together to produce experiences for The
      Baykeeper for Earth Day 2019. The project evolved and pivoted to become a
      multi-player online VR and Web experience that teaches students about
      Oyster Reef Restoration.
    </p>
    <p>
      The project did not fully take advantage of the future possibilities of 5G
      but instead enlightens the public on and Next Generation Science Students
      about the urgency of oyster (and other bi-valve) reef restoration in
      coastal areas in the US and the world. 3D models and environments in
      virtual space serve as a perfect simulated gamified space to learn about
      pollution and oyster reef restoration in the Hudson River Bay as part of a
      larger conversation about disrupted ecologies.
    </p>

    <p><a
        class="text-blue-500"
        target="_blank"
        href="https://oystervr.com/"
        >Project Site</a
      ></p>

    <p>
      <b>Role:</b> Unity Developer
    </p>

    <p>
      <b>In collaboration with:</b>
      <ul class="pl-2">
        <li>Anezka Sebek & Tammy Walters (Principal Investigators)</li>
        <li>Jeffrey Bennett (Unity Programmer)</li>
        <li>Katherine Boehm (UX/UI Design, Unity Programmer, and Voice-Over)</li>
        <li>Julie Byers (UX Graphic Design, Research Assistant)</li>
        <li>Sam Levine (Lead Programmer, Unity Photon Engine)</li>
        <li>Kristiana Marcon (UX assistant)</li>
        <li>Surabhi Naik (Research Assistant)</li>
        <li>Sten Ulfsson (Unity Assets, and Programming)</li>
        <li>Paolo Villanueva (Maya Modeling, Unity Programmer, Asset Research and Management)</li>
      </ul>  
    </p>
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