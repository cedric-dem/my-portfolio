<template>
  <div class="mission-card">
    <h3>{{ jobTitle }} — <span class="company">{{ company }}</span></h3>
    <p class="date">{{ startDate }} → {{ endDate }}</p>
    <p class="location">{{ location }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'MissionCard',
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
/* TODO */
</style>
