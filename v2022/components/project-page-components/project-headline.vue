<template>
  <div class="">
    <p class="text-3xl font-bold">{{ title }}</p>
    <p class="text-2xl font-light">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style>
</style>