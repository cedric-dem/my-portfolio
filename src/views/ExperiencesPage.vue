<template>
  <div>
    <ExperienceCard
        v-for="(exp, i) in experiences"
        :key="i"
        v-bind="exp"
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
    jobTitle: 'Software Engineer',
    description: ''
  },
  {
    startDate: '',
    endDate: '',
    location: 'Bruxelles, Belgium',
    company: 'Scalian',
    jobTitle: 'Consulting Engineer',
    description: '',
    missions: [
      {
        startDate: '',
        endDate: '',
        location: 'Charleroi, Belgium',
        company: 'Alstom',
        jobTitle: 'V&V Engineer',
        description: ''
      },
      {
        startDate: '',
        endDate: '',
        location: 'Charleroi, Belgium',
        company: 'Alstom',
        jobTitle: 'V&V Engineer',
        description: ''
      },
    ]
  },
  {
    startDate: '',
    endDate: '',
    location: 'Louvain-la-Neuve, Belgium',
    company: 'B12 Consulting',
    jobTitle: '',
    description: ''
  },
  {
    startDate: '',
    endDate: '',
    location: 'Tubize, Belgium',
    company: 'Thales Belgium',
    jobTitle: '',
    description: ''
  }
]
</script>

