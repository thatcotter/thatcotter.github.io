<template>
  <div class="grid gap-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-5">
    <project-tile
      title="Huluween 2020"
      tag="WebGL"
      link="/projects/huluween"
      image="huluween.gif"
      stagger="1000"
    ></project-tile>
    <project-tile
      title="Brookfield Holiday"
      tag="Physical Computing, Networking"
      link="/projects/brookfield"
      image="BWF_WishingTree_01_workthumb-1920.jpg"
      class="md:col-span-2"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Planet Word"
      tag="WebGL, Networking"
      link="/projects/planet-word"
      image="pw.jpg"
      class="md:col-span-2 xl:col-span-1"
      stagger="0"
    ></project-tile>
    <project-tile
      title="ABB Experience Center"
      tag="WebGL, Networking"
      link="/projects/abb"
      image="abb.png"
      class="xl:col-span-2"
      stagger="0"
    ></project-tile>
    <project-tile
      title="The Story of an Oyster Reef"
      tag="VR, Education"
      link="/projects/oystervr"
      image="oystervr-1.png"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Grokking Creative Coding"
      tag="Graduate Thesis"
      link="/projects/dt-thesis"
      image="thesis-screenshot-bg.png"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Magical Gurl Mecha"
      tag="Game Deign, Unity"
      link="/projects/magical-mecha"
      image="magic-mecha2.jpg"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Talk to Light"
      tag="openframeWorks"
      link="/projects/talk-to-light"
      image="google_talktolight_sxsw_hero-1920.jpg"
      class="md:col-span-2"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Phillytron"
      tag="Shaders, Unity"
      link="/projects/phillytron"
      image="phillytron1.png"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Voyage"
      tag="openframeWorks, Game Design"
      link="/projects/voyage"
      image="voyage_1.gif"
      stagger="0"
    ></project-tile>
    <project-tile
      title="Hertzian Aegis"
      tag="Speculative Design"
      link="/projects/hertz-aegis"
      stagger="0"
      image="HA_7288(edit).jpg"
    ></project-tile>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import projectTile from "../components/project-tile.vue";

export default Vue.extend({
  components: { projectTile },
  name: "IndexPage",
});
</script>

<style lang="scss" scoped>
</style>