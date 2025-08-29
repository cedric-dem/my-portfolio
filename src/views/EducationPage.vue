<template>
  <ParallaxBackground image="bg_education.jpg" />
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
        courses: [
          { name: 'Master Thesis ', link: '/Memoire.pdf' },
          { name: 'Internship '}
        ]
      },
      {
        startDate: '2017',
        endDate: '2020',
        name: 'Bachelor',
        courses: ['Introduction to programming concepts of software development: algorithms, programming, machine learning etc..']
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