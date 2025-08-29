+58-55
<template>
  <ParallaxBackground image="bg_experiences.jpg" />
  <div class="experiences">
    <ExperienceCardComponent
        v-for="(exp, i) in experiences"
        :key="i"
        v-bind="exp"
    />
  </div>
</template>

<script setup>
import ExperienceCardComponent from '@/components/ExperienceCard.vue'
import ParallaxBackground from '@/components/ParallaxBackground.vue'
import ExperienceCard from '@/models/ExperienceCard'
import MissionCard from '@/models/MissionCard'

const experiences = [
  new ExperienceCard({
    startDate: ['May 2024'],
    endDate: ['Now'],
    location: 'Louvain-la-Neuve, Belgium',
    company: 'IBA',
    name: 'Software Engineer',
    description: "Software Engineer, consists of being involved into multiple parts of an application's development. Lots of languages and technologies involved, including Kotlin, Typescript, Angular, Python, SpringBoot, PostGreSQL, AWS.",
  }),
  new ExperienceCard({
    startDate: ['March 2023'],
    endDate: ['March 2024'],
    location: 'Bruxelles, Belgium',
    company: 'Scalian',
    name: 'Consulting Engineer',
    description: 'Consulting Engineer, with the perspective of having various experiences',
    missions: [
      new MissionCard({
        startDate: 'March 2023',
        endDate: 'November 2023',
        location: 'Charleroi, Belgium',
        company: 'Alstom',
        name: 'V&V Engineer',
        description: 'Verification & Validation engineer on project level'
      }),
      new MissionCard({
        startDate: 'December 2023',
        endDate: 'March 2024',
        location: 'Charleroi, Belgium',
        company: 'Alstom',
        name: 'V&V Engineer',
        description: 'Verification & Validation engineer on product level'
      }),
    ]
  }),
  new ExperienceCard({
    startDate: ['July 2021'],
    endDate: ['October 2021'],
    location: 'Louvain-la-Neuve, Belgium',
    company: 'B12 Consulting',
    name: 'Software developper (Intern)',
    description: "Internship, related to master's studies, Consisting of End-to-end testing on a angular/typescript application",
  }),
  new ExperienceCard({
    startDate: ['July 2016','September 2016', 'July 2017'],
    endDate: ['July 2016', 'September 2016', 'July 2017'],
    location: 'Tubize, Belgium',
    company: 'Thales Belgium',
    name: 'Student job',
    description: 'Student job mostly consisting of listing inventories and helping with various maintenance work',
  })
]
</script>

<style scoped>
.experiences {
  width: 90%;
  margin: 80px auto 40px
}
</style>