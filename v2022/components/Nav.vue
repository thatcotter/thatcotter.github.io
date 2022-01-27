<template>
  <nav class="flex pt-3 mb-12 border-b border-gray-200 text-xs text-font-medium">
    <nuxt-link class="p-4 pb-2 -mb-px border-b hover:text-cyan-500 hover:border-gray-500" to="/">home</nuxt-link>
    <nuxt-link class="p-4 pb-2 -mb-px border-b hover:text-cyan-500 hover:border-gray-500" to="/about">about</nuxt-link>
    <nuxt-link class="p-4 pb-2 -mb-px border-b hover:text-cyan-500 hover:border-gray-500" to="/resume">resume</nuxt-link>
    <a class="p-4 pb-2 -mb-px border-b hover:text-cyan-500 hover:border-gray-500" href="https://github.com/thatcotter" target="blank"
      ><i class="fab fa-github"></i
    ></a>
    <a class="p-4 pb-2 -mb-px border-b hover:text-cyan-500 hover:border-gray-500" href="https://www.instagram.com/thatcotter/" target="blank"
      ><i class="fab fa-instagram"></i
    ></a>
    <a class="p-4 pb-2 -mb-px border-b hover:text-cyan-500 hover:border-gray-500" href="https://twitter.com/ThatCotter" target="blank"
      ><i class="fab fa-twitter"></i
    ></a>
  </nav>
</template>

<script lang="ts">
export default {};
</script>