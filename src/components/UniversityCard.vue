+61-0
<template>
  <div class="university-card">
    <h2>{{ university }}</h2>
    <p class="location">{{ location }}</p>
    <p v-for="(range, index) in dateRanges" :key="index" class="date">
      {{ range.start }} → {{ range.end }}
    </p>
    <p class="description">{{ description }}</p>
    <div v-if="programs && programs.length" class="programs">
      <h3>Programs</h3>
      <ProgramCard v-for="(program, index) in programs" :key="index" v-bind="program" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import ProgramCard from './ProgramCard.vue'

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
  university: String,
  description: String,
  programs: {
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
.university-card {
  border: 2px solid #333;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease;
  color: #222;
}

.university-card:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}

.description{
  text-align: left;
}
</style>