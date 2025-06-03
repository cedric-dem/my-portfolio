<template>
  <div class="experience-card">
    <h2>{{ jobTitle }} — <span class="company">{{ company }}</span></h2>
    <p class="date">{{ startDate }} → {{ endDate }}</p>
    <p class="location">{{ location }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
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
.experience-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}
.company {
  font-weight: normal;
  color: #555;
}
.date {
  font-size: 0.9em;
  color: #666;
}
.location {
  font-style: italic;
  color: #444;
}
.description {
  margin-top: 10px;
}
</style>
