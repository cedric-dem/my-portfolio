<template>
  <BaseCard>
    <h2>{{ jobTitle }}</h2>
    <p class="company">{{ company }}</p>
    <p class="location">{{ location }}</p>
    <p
        v-for="(range, index) in dateRanges"
        :key="index"
        class="date"
    >
      {{ range.start }} → {{ range.end }}
    </p>
    <p class="description">{{ description }}</p>

    <div v-if="missions && missions.length" class="missions">
      <h3>Missions</h3>
      <MissionCard
          v-for="(mission, index) in missions"
          :key="index"
          v-bind="mission"
      />
    </div>
  </BaseCard>
</template>
<script setup>
import { computed, defineProps } from 'vue'
import MissionCard from './MissionCard.vue'
import BaseCard from './BaseCard.vue'

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

const dateRanges = computed(() =>
    props.startDate.map((start, index) => ({
      start,
      end: props.endDate[index] || ''
    }))
)
</script>

<style scoped>
.description {
  text-align: left;
}
</style>
