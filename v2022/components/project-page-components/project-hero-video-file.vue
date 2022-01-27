<template>
  <div class="aspect-w-16 aspect-h-9 sm:m-2 md:m-4 lg:m-6 xl:m-8">
    <video
      class=""
      controls
      muted
    >
      <source :src="require(`~/assets/img/${src}`)" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style>
</style>