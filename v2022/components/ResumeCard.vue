<template>
  <div class="p-2 bg-gray-50 row-span-auto rounded-lg shadow-md">
    <p class="text-lg font-semibold pt-2 pl-2">{{ title }}</p>
    <p class="text-lg font-light pl-2">{{ qualifier }}</p>
    <p class="p-2">{{ description }}</p>
    <ul class="pb-1 pl-2" v-for="item in list" :key="item">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["title", "qualifier", "description", "list"],
};
</script>

<style>
</style>