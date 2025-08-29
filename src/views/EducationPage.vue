<template>
  <ParallaxBackground image="experiences_bg.jpeg" />
  <div class="education">
    <UniversityCard
        v-for="(uni, i) in universities"
        :key="i"
        v-bind="uni"
    />
  </div>
</template>

<script setup>
import UniversityCard from '@/components/UniversityCard.vue'
import ParallaxBackground from '@/components/ParallaxBackground.vue'

const universities = [
  {
    startDate: ['2017'],
    endDate: ['2022'],
    location: 'Bruxelles, Belgium',
    university: 'ULB',
    description: 'University studies in computer sciences',
    programs: [
      {
        startDate: '2021',
        endDate: '2022',
        name: 'Master Program',
        description: '',
        details: ['Master Thesis', 'Internship']
      },
      {
        startDate: '2020',
        endDate: '2017',
        name: 'Bachelor',
        description: '',
        details: ['Introduction to programming concepts of software development: algorithms, programming, machine learning etc..']
      }
    ]
  }
]
</script>

<style scoped>
.education {
  width: 90%;
  margin: 80px auto 40px;
}
</style>