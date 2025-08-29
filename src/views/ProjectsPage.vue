<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import ParallaxBackground from "@/components/ParallaxBackground.vue";

const projects = [
  {
    name: 'Bokoa',
    description: "Brain teaser game published on Android's play store",
    github: 'https://github.com/cedric-dem/bokoa',
    app: 'https://play.google.com/store/apps/details?id=com.slykos.bokoa',
    technical: 'Contains two parts : A level generator, written in python, that create a level, finds its solution, and put the result in a bunch of json files. Second part : android application itself: kotlin project'
  }
]
</script>

<template>
  <ParallaxBackground image="bg_projects.jpg" />
  <div class="projects">
    <h1>Personal Projects </h1>
    <p>Since I learned to code, I always liked to have projects, which can be tools, games, experiments, etc.. </p>
    <p>Here are some examples of these projects</p>
    <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
    />
  </div>
</template>

<style scoped>
.projects {
  width: 90%;
  margin: 80px auto 40px;
}
.projects h1{
  color: #fff;
}
.projects p{
  color: #fff;
  text-align: left
}
</style>