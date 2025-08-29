<template>
  <div class="project-card">
    <h3>{{ name }}</h3>
    <p class="description">{{ description }}</p>
    <p class="links">
      <a :href="github" target="_blank" rel="noopener">GitHub Page</a>
      <span v-if="app"> | <a :href="app" target="_blank" rel="noopener">Play Store Page</a></span>
    </p>
    <p> Technical Details :</p>
    <p class="technical">{{ technical }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
defineProps({
  name: String,
  description: String,
  github: String,
  app: String,
  technical: String
})
</script>

<style scoped>
.project-card {
  border: 1.5px solid #555;
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;
  background-color: #f5f5f5;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
  color: #333;
}

.project-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.links a {
  color: #1a0dab;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.technical{
  text-align: left;
}


</style>