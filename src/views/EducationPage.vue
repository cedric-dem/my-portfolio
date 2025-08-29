<template>
  <ParallaxBackground image="bg_education.jpg" />
  <div class="education">
    <UniversityCardComponent
        v-for="(uni, i) in universities"
        :key="i"
        v-bind="uni"
    />
  </div>
</template>

<script setup>
import UniversityCardComponent from '@/components/UniversityCard.vue'
import ParallaxBackground from '@/components/ParallaxBackground.vue'
import UniversityCard from '@/models/UniversityCard'
import ProgramCard from '@/models/ProgramCard'

const universities = [
  new UniversityCard({
    startDate: ['2017'],
    endDate: ['2022'],
    location: 'Bruxelles, Belgium',
    name: 'ULB',
    description: 'University studies in computer sciences',
    programs: [
      new ProgramCard({
        startDate: '2021',
        endDate: '2022',
        name: 'Master Program',
        courses: [
          { name: 'Master Thesis ', link: '/Memoire.pdf' },
          { name: 'Internship ' }
        ]
      }),
      new ProgramCard({
        startDate: '2020',
        endDate: '2017',
        name: 'Bachelor',
        courses: ['Introduction to programming concepts of software development: algorithms, programming, machine learning etc..']
      })
    ]
  })
]
</script>

<style scoped>
.education {
  width: 90%;
  margin: 80px auto 40px;
}
</style>