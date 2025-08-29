<template>
  <BaseCard>
    <h3>{{ jobTitle }}</h3>
    <p class="company">{{ company }}</p>
    <p class="date">{{ startDate }} → {{ endDate }}</p>
    <p class="location">{{ location }}</p>
    <p class="description">{{ description }}</p>
  </BaseCard>
</template>

<script>

import BaseCard from './BaseCard.vue'

export default {
  name: 'MissionCard',
  components: { BaseCard },
  props: {
    startDate: String,
    endDate: String,
    location: String,
    company: String,
    jobTitle: String,
    description: String
  }
}
</script>

<style scoped>
.description {
  text-align: left;
}
</style>
