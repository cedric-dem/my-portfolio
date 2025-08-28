<template>
  <ParallaxBackground image="experiences_bg.jpeg" />
  <div class="experiences">
    <ExperienceCard
        v-for="(exp, i) in experiences"
        :key="i"
        v-bind="exp"
    />
  </div>
</template>

<script setup>
import ExperienceCard from '@/components/ExperienceCard.vue'
import ParallaxBackground from '@/components/ParallaxBackground.vue'

const experiences = [
  {
    startDate: ['May 2024'],
    endDate: ['Now'],
    location: 'Louvain-la-Neuve, Belgium',
    company: 'IBA',
    jobTitle: 'Software Engineer',
    description: ''
  },
  {
    startDate: ['March 2023'],
    endDate: ['March 2024'],
    location: 'Bruxelles, Belgium',
    company: 'Scalian',
    jobTitle: 'Consulting Engineer',
    description: '',
    missions: [
      {
        startDate: 'March 2023',
        endDate: 'November 2023',
        location: 'Charleroi, Belgium',
        company: 'Alstom',
        jobTitle: 'V&V Engineer',
        description: ''
      },
      {
        startDate: 'December 2023',
        endDate: 'March 2024',
        location: 'Charleroi, Belgium',
        company: 'Alstom',
        jobTitle: 'V&V Engineer',
        description: ''
      },
    ]
  },
  {
    startDate: ['July 2021'],
    endDate: ['October 2021'],
    location: 'Louvain-la-Neuve, Belgium',
    company: 'B12 Consulting',
    jobTitle: 'Software developper (Intern)',
    description: ''
  },
  {
    startDate: ['July 2016','July 2017'],
    endDate: ['August 2016','August 2017'],
    location: 'Tubize, Belgium',
    company: 'Thales Belgium',
    jobTitle: 'Student job',
    description: ''
  }
]
</script>
<style scoped>
.experiences {
  width: 90%;
  margin: 80px auto 40px
}
</style>
