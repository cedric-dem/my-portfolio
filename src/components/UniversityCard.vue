<template>
  <BaseCard>
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
  </BaseCard>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import ProgramCard from './ProgramCard.vue'
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
.description{
  text-align: left;
}
</style>