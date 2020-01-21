
<template>
  <div class="theme-container section">
      <h1 class="title name">{{$frontmatter.Title}}</h1>
      <h2 class="subtitle name">{{$frontmatter.Subtitle}} </h2>
      <Nav></Nav>
      <div>
          <component :is="layout"/>
      </div>
  </div>
</template>

<script lang="ts">
import Nav from './components/Nav'
import About from './views/About'
import Resume from './views/Resume'
import Project from './views/Project'
import ProjectGrid from './components/ProjectGrid'

export default {
    name: 'layout',
    components: {
        Nav,
        About,
        Resume,
        Project,
        ProjectGrid
    },
    computed: {
        layout() {
            const path = this.$page.path
            switch (true) {
                case path.includes('/about'):
                    return 'About'
                    break;
                case path.includes('/resume'):
                    return 'Resume'
                    break;
                case path.includes('/projects'):
                    return 'Project'
                    break;
                default:
                    return 'ProjectGrid'
                    break;
            }
        }
    }   
}
</script>

<style lang="scss">
    @import './style/main';
</style>