<template>
    <div class="column is-one-third progressive" style="justify-content: center; overflow: hidden; align-items: center">
        <a :href="path">
            <img class="preview lazy" :src="heroSource"        alt=""
                 style="flex: 0;height: 100%;width: 100%;layout: fill;opacity: 0.66;object-fit: cover;">
        </a>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProjectTile',
    props: {
        frontmatter: Object,
        path: String,
    },
    computed: {
        heroSource(){
            return  this.frontmatter.Hero != null ?
                    "./images/" +
                    this.frontmatter.Hero : 
                    "https://designshack.net/wp-content/uploads/placeholder-image.png"
        }
    }    
}
</script>
