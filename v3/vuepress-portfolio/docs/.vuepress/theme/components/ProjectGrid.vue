<template>
    <section class="section">
        <div class="columns is-multiline">
            <ProjectTile v-for="project in allProjects" v-bind="project"/>
        </div>
    </section>
</template>

<script lang="ts">
import ProjectTile from './ProjectTile'
export default {
    name: 'ProjectGrid',
    components: {
        ProjectTile
    },
    computed: {
        allProjects() {
            let arr = this.$site.pages
                .filter(page => page.path.includes('/projects/'))
                .sort((a, b) => a.frontmatter.Order - b.frontmatter.Order)
            return arr
        }
    }
}
</script>