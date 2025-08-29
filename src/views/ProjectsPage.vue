<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import ParallaxBackground from "@/components/ParallaxBackground.vue";

const projects = [
  {
    name: 'Bokoa',
    description: "Brain teaser game published on Android's play store",
    github: 'https://github.com/cedric-dem/bokoa',
    app: 'https://play.google.com/store/apps/details?id=com.slykos.bokoa',
    tech: ['Python3','Kotlin']
  }
]
</script>

<template>
  <ParallaxBackground image="bg_projects.jpg" />
  <div class="projects">
    <h1>Personal Projects </h1>
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
</style>