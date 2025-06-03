<template>
  <div class="experience-card">
    <h2>{{ jobTitle }} — <span class="company">{{ company }}</span></h2>
    <p class="date">{{ startDate }} → {{ endDate }}</p>
    <p class="location">{{ location }}</p>
    <p class="description">{{ description }}</p>

    <div v-if="missions && missions.length" class="missions">
      <h3>Missions</h3>
      <MissionCard
          v-for="(mission, index) in missions"
          :key="index"
          v-bind="mission"
      />
    </div>
  </div>
</template>

<script>
import MissionCard from './MissionCard.vue'

export default {
  name: 'ExperienceCard',
  components: { MissionCard },
  props: {
    startDate: String,
    endDate: String,
    location: String,
    company: String,
    jobTitle: String,
    description: String,
    missions: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.experience-card {
  border: 2px solid #3498db;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}
</style>

