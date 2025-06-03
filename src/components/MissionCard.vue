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
.mission-card {
  border: 1.5px solid #555;
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;
  background-color: #f5f5f5;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
  color: #333;
}

.mission-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>
