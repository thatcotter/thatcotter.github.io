<template>
    <!-- <div v-for="item in list">
        <p class="title is-5">{{item.frontmatter.title}}</p>
        <p class="subtitle">{{item.frontmatter.subtitle}}</p>
        <p class="is-size-6 has-text-weight-light">{{item.frontmatter.description}}</p>
    </div> -->
</template>

<script lang="ts">
export default {
    // data: function() {
    //     return {
    //         fm: {}
    //     }
    // }
    props: ['title', 'subtitle', 'description']
}
</script>