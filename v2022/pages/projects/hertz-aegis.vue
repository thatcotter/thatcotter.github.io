<template>
  <div class="sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 space-y-8">
    <projectHeadline
      title="Hertzian Aegis"
      subtitle="A love letter to Design Noir"
    ></projectHeadline>

    <ProjectHeroImage
      url="https://thatcotter.github.io/thesis/"
      image="HA_7288(edit).jpg"
    />

    <p>
      For my senior capstone, I focused on on the qualia concerning
      electro-magnetic fields. Although we come in contact with EMFs several
      times a day, we don't give them much thought because we cannot perceive
      them.
    </p>
    <p>
      In my senior fall semester, I made a prototype wearable that used a jumper
      wire as a sensor. The prototype itself only proved to be a capacitive
      sensor, but it helped me get used to using the Lilypad microcontroller as
      the conduit of my design. In the spring, I reverse-engineered an existing
      EMF sensor to have a qualitative output and mapped that output onto a
      coat.
    </p>
    <p>
      By letting the user visualize electro-magnetic radiation, this wearable
      technology helps to better understand the hidden nature of electronic
      objects.
    </p>

    <div class="grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
      <img class="object-cover w-full h-full" src="~/assets/img/HA_7269.jpg" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/HA_7270.jpg" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/HA_7276.jpg" alt="">
      <img class="object-cover w-full h-full" src="~/assets/img/HA_20140418_194113238_HDR.jpg" alt="">
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