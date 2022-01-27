<template>
  <a
    :class="`group relative block bg-black border-2 rounded-lg hover:border-yellow-500 hover:animate-overbloom`"
    :href="link"
  >
    <img
      class="
        rounded-lg
        absolute
        inset-0
        object-cover
        w-full
        h-full
        transition-opacity
        opacity-75
        group-hover:opacity-40
      "
      :src="require(`~/assets/img/${image}`)"
      alt=""
    />
    <div class="relative pt-8 pl-8">
      <p class="text-sm font-medium tracking-widest text-yellow-500 uppercase">
        {{ tag }}
      </p>

      <p class="text-2xl font-bold text-white">{{ title }}</p>

      <div class="mt-48">
        <div
          class="
            transition-all
            transform
            translate-y-8
            opacity-0
            group-hover:opacity-0 group-hover:translate-y-0
          "
        >
          <p class="text-sm text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            perferendis hic asperiores quibusdam quidem voluptates doloremque
            reiciendis nostrum harum. Repudiandae?
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "tag", "description", "link", "image", "stagger"],
};
</script>

<style lang="scss" scoped>
// *{
//   transition-delay: 1000ms;
// }
</style>