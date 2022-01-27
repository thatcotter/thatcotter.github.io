<template>
  <div class="">
    <a :href=url target="_blank">
      <img class="" :src="require(`~/assets/img/${image}`)" />
    </a>
  </div>
</template>

<script>
export default {
    props: ['image', 'url']
};
</script>

<style>
</style>