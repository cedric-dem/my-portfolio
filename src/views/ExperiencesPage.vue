<template>
  <div class="jobs">
    <h1>Professional Experiences</h1>
    <ExperienceCard
        v-for="(exp, index) in experiences"
        :key="index"
        :startDate="exp.startDate"
        :endDate="exp.endDate"
        :location="exp.location"
        :company="exp.company"
        :jobTitle="exp.jobTitle"
        :description="exp.description"
    />
  </div>
</template>

<script setup>
import ExperienceCard from '@/components/ExperienceCard.vue'

const experiences = [
  {
    startDate: '',
    endDate: '',
    location: '',
    company: 'IBA',
    jobTitle: '',
    description: ''
  },
  {
    startDate: '',
    endDate: '',
    location: '',
    company: 'Scalian',
    jobTitle: '',
    description: ''
  },
  {
    startDate: '',
    endDate: '',
    location: '',
    company: 'B12 Consulting',
    jobTitle: '',
    description: ''
  },
  {
    startDate: '',
    endDate: '',
    location: '',
    company: 'Thales Belgium',
    jobTitle: '',
    description: ''
  },
]
</script>
