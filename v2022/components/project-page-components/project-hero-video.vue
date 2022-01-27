<template>
  <div class="aspect-w-16 aspect-h-9 sm:m-2 md:m-4 lg:m-6 xl:m-8">
      <iframe
        title="vimeo-player"
        :src= url
        allowfullscreen
      ></iframe>
    </div>
</template>

<script>
export default {
    props:['url']
}
</script>

<style>

</style>