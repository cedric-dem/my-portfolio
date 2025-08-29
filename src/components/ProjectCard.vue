<template>
  <BaseCard>
    <h3>{{ name }}</h3>
    <p class="description">{{ description }}</p>
    <p class="links">
      <a :href="github" target="_blank" rel="noopener">GitHub Page</a>
      <span v-if="app"> | <a :href="app" target="_blank" rel="noopener">Play Store Page</a></span>
    </p>
    <p> Technical Details :</p>
    <p class="technical">{{ technical }}</p>
  </BaseCard>
</template>

<script setup>
import { defineProps } from "vue"
import BaseCard from './BaseCard.vue'

defineProps({
  name: String,
  description: String,
  github: String,
  app: String,
  technical: String
})
</script>

<style scoped>
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