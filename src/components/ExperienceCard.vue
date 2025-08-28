+27-18
<template>
  <div class="experience-card">
    <h2>{{ jobTitle }} — <span class="company">{{ company }}</span></h2>
    <p class="date">{{ dateRanges.start }} → {{ dateRanges.end }}</p>
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
<script setup>
import { computed, defineProps } from 'vue'
import MissionCard from './MissionCard.vue'

const props = defineProps({
  startDate: {
    type: Array,
    default: () => []
  },
  endDate: {
    type: Array,
    default: () => []
  },
  location: String,
  company: String,
  jobTitle: String,
  description: String,
  missions: {
    type: Array,
    default: () => []
  }
})

const formatDate = (dateArray) => dateArray.join(' ')

const dateRanges = computed(() => ({
  start: formatDate(props.startDate),
  end: formatDate(props.endDate)
}))
</script>

<style scoped>
.experience-card {
  border: 2px solid #333;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease;
  color: #222;
}

.experience-card:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}
</style>
