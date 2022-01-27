<template>
  <div class="place-content-center sm:px-8 md:px-16 lg:px-36 xl:px-72 2xl:px-92">
    <section class="mb-6">
      <a class="text-2xl font-normal text-blue-500" href="../resume.pdf">Print/PDF</a>
      <!-- <nuxt-link class="text-2xl font-normal text-blue-500" to="~/assets/resume.pdf">Print/PDF
      </nuxt-link> -->
    </section>
    <section class="grid md:grid-cols-2 gap-12 place-content-center">
      <div class="col-span-1 grid-rows-2 space-y-8">
        <article class="grid-rows-3 gap-4 space-y-4">
          <p class="text-3xl font-semibold">
            Professional Experience
          </p>
          <ResumeCard
            title="Meta, Creative Coder"
            qualifier="summer 2020 - present"
            description=""
          ></ResumeCard>
          <ResumeCard
            title="Freelance Creative Technologist"
            qualifier="spring 2019 - summer 2020"
            description="I've helped several agencies and studios realize their design goals by developing physical computing and networking solutions for interactive media experiences ranging from games to installations and exhibits."
          ></ResumeCard>
          <ResumeCard
            title="Local Projects, Creative Technologist"
            qualifier="may 2018 - january 2019"
            description="Worked on various interactive installations in a developer role, using platforms such as Electron with WebGL, Arduino, and Swift/iOS."
          ></ResumeCard>
          <ResumeCard
            title="Red Paper Heart, Code Intern"
            qualifier="summer 2017"
            description="Worked in tangent with the design team to program/build interactive installations and experiences for commercial clients using openFrameworks, Cinder, and Arduino."
          ></ResumeCard>
          <ResumeCard
            title="Night Kitchen Interactive, Interaction Developer"
            qualifier="fall 2014 - summer 2016"
            description="Lead design/development research by exploring new tools for the web and interactive installations and demonstrating implementations to the rest of the team."
          ></ResumeCard>
        </article>

        <article class="space-y-4 pt-4">
          <p class="text-3xl font-semibold">Teaching Experience</p>
          <ResumeCard
            title="Creative Coding, Adjunct Instructor"
            qualifier="NYU Tandon, Fall 2021 - Present"
            description=""
          ></ResumeCard>
          <ResumeCard
            title="Creative Coding with Unity, Adjunct Instructor"
            qualifier="Parsons, Spring 2019 - Summer 2021"
            description=""
          ></ResumeCard>
          <ResumeCard
            title="Creativity + Computation, Instructor"
            qualifier="Parsons, Fall 2018"
            description=""
          ></ResumeCard>
          <ResumeCard
            title="Immersive Storytelling, TA"
            qualifier="Parsons, Fall 2017"
            description=""
          ></ResumeCard>
          <ResumeCard
            title="D+T Bootcamp, Instructor"
            qualifier="Parsons, Summer 2017"
            description=""
          ></ResumeCard>
        </article>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <p class="text-3xl font-semibold">Core Competencies</p>
          <ResumeCard
            title="Creative Coding"
            qualifier=""
            description="I approach writing code like writing poetry, focusing on the mechanics, the demystification of tools, and hacking the conventions of art-making with computation."
          ></ResumeCard>
          <ResumeCard
            title="Design Research"
            qualifier=""
            description="The first step to solving a problem is understanding it. By interviewing end-users and testing prototypes, I can better understand what the solution is."
          ></ResumeCard>
        </div>
        <div class="pt-4 space-y-4">
          <p class="text-3xl font-semibold">Skills + Tools</p>
          <ResumeCard
            title="Adept"
            qualifier=""
            description=""
            :list="[
              'Unity / C#',
              'WebGL (Pixi.js, Three.js, ReGL, p5.js)',
              'Arduino / Physical Computing',
              'SparkAR',
              'Electron/Node.js',
              'Front End Web (HTML/SCSS/JS)',
            ]"
          >
          </ResumeCard>
          <ResumeCard
            title="Intermediate"
            qualifier=""
            description=""
            :list="[
              'Adobe CC Workflow (esp. Ps, Ai, Id, Lr)',
              'Shaders (GLSL/HLSL)',
              'openFrameworks/Cinder (C++)',
              'Clojure(Script)/(CLR)',
              'Nannou (Rust)',
            ]"
          >
          </ResumeCard>
          <ResumeCard
            title="Familiar"
            qualifier=""
            description=""
            :list="[
              'Vue.js / Nuxt.js',
              'Python / Jupyter / Scikit',
              'Swift / iOS',
            ]"
          >
          </ResumeCard>
          <ResumeCard
            title="Learning"
            qualifier=""
            description=""
            :list="['Design Patterns', 'Interpreter Design', 'Docker / Ansible']"
          >
          </ResumeCard>
        </div>

        <div class="pt-4 space-y-4">
          <p class="text-3xl font-semibold">
            Education + Honors
          </p>
          <ResumeCard
            title="MFA Design + Technology"
            qualifier="Parsons, The New School"
            description=""
          >
          </ResumeCard>
          <ResumeCard
            title="BS Industrial Design"
            qualifier="The University of the Arts"
            description=""
          >
          </ResumeCard>
          <ResumeCard
            title="Attained the Rank of Eagle Scout"
            qualifier="BSA Troop 139"
            description=""
          >
          </ResumeCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ResumeCard from "../components/ResumeCard.vue";
export default {
  components: { ResumeCard },
};
</script>

<style lang="scss" scoped>
</style>