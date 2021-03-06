<template>
    <div class="columns">
        <div class="column is-1-widescreen"></div>
        <div class="column is-9-widescreen is-12-tablet">
            <section class="section">
                <a class="subtitle has-text-link"
                   href="./resume.pdf">Print/PDF</a>
            </section>
            <section class="section">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-7">

                        <article class="tile is-parent is-vertical">
                            <p class="title is-child">
                                <!-- <Content slot-key="work"/> -->
                                Professional Experience
                            </p>
                            <article class="tile is-child box" v-for="work in allWork" >
                                <p class="title is-5">{{work.frontmatter.Title}}</p>
                                <p class="subtitle">{{work.frontmatter.Subtitle}}</p>
                                <p class="is-size-6 has-text-weight-light is-7">{{work.frontmatter.Description}}</p>
                            </article>
                        </article>

                        <article class="tile is-parent is-vertical">
                            <p class="title is-child">
                                <!-- <Content slot-key="teaching"/> -->
                                Teaching Experience
                            </p>
                            <article class="content box" v-for="teach in allTeaching" >
                                <p class="title is-5">{{teach.frontmatter.Title}}</p>
                                <p class="subtitle">{{teach.frontmatter.Subtitle}}</p>
                            </article>
                        </article>
                    </div>


                    <div class="tile is-parent is-vertical">

                        <p class="title">
                            <!-- <Content slot-key="core"/> -->
                            Core Competencies
                        </p>
                        <article class="content box" v-for="core in allCore" >
                            <p class="title is-5">{{core.frontmatter.Title}}</p>
                            <p class="is-size-6 has-text-weight-light is-7">{{core.frontmatter.Description}}</p>
                        </article>

                        <p class="title">
                            <!-- <Content slot-key="skills"/> -->
                            Skills + Tools
                        </p>
                        <div class="tile is-vertical box">
                            <p class="title is-5">Adept</p>
                            <ul is-6>
                                <Content slot-key="adept"/>
                                <!-- <li>Electron/Node.js</li> 
                                <li>Unity / C#</li>
                                <li>Arduino / Physical Computing</li>
                                <li>WebGL (Pixi.js, Three.js, ReGL, p5.js)</li>
                                <li>Front End Web (HTML/SCSS/JS)</li> -->
                            </ul>
                        </div>
                        <div class="tile is-vertical box">
                            <p class="title is-5">Intermediate</p>
                            <ul is-6>
                                <Content slot-key="intermediate"/>
                                <!-- <li>Adobe CC Workflow (esp. Ps, Ai, Id, Lr)</li>
                                <li>Shaders (GLSL/HLSL)</li>
                                <li>openFrameworks/Cinder (C++)</li>
                                <li>Clojure(Script)/(CLR)</li>
                                <li>Rust</li> -->
                            </ul>
                        </div>
                        <div class="tile is-vertical box">
                            <p class="title is-5">Familiar</p>
                            <ul is-6>
                                <Content slot-key="familiar"/>
                                <!-- <li>Python / Jupyter / Scikit</li> 
                                <li>Swift / iOS</li>
                                <li>React.js / Vue.js</li>
                                <li></li> -->
                            </ul>
                        </div>
                        <div class="tile is-vertical box">
                            <p class="title is-5">Actively Learning</p>
                            <ul is-6>
                                <Content slot-key="learning"/>
                                <!-- <li></li> 
                                <li>Design Patterns</li>
                                <li>Compiler / Interpreter Design</li> -->
                            </ul>
                        </div>

                        <p class="title">
                            <!-- <Content slot-key="education"/> -->
                            Education + Honors
                        </p>
                        <article class="content box" v-for="edu in allEdu">
                            <p class="title is-5">{{edu.frontmatter.Title}}</p>
                            <p class="subtitle">{{edu.frontmatter.Subtitle}}</p>
                            <p class="is-size-6 has-text-weight-light is-7">{{edu.frontmatter.Description}}</p>
                        </article>

                    </div>
                </div>

            </section>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    computed: {
        allWork() {
            let arr = this.$site.pages
                .filter(page => page.path.includes('/cv/work/'))
                .sort((a, b) => a.frontmatter.Order - b.frontmatter.Order)
            return arr
        },
        allTeaching() {
            let arr = this.$site.pages
                .filter(page => page.path.includes('/cv/teaching/'))
                .sort((a, b) => a.frontmatter.Order - b.frontmatter.Order)
            return arr
        },
        allCore() {
            let arr = this.$site.pages
                .filter(page => page.path.includes('/cv/core/'))
                .sort((a, b) => a.frontmatter.Order - b.frontmatter.Order)
            return arr
        },
        allSkills() {
            let arr = this.$site.pages
                .filter(page => page.path.includes('/cv/skills/'))
            return arr[0]
        },
        allEdu() {
            let arr = this.$site.pages
                .filter(page => page.path.includes('/cv/education/'))
                .sort((a, b) => a.frontmatter.Order - b.frontmatter.Order)
            return arr
        }
    }
}
</script>