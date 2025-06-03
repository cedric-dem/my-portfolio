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
    startDate: 'Jan 2021',
    endDate: 'Apr 2024',
    location: 'Paris, France',
    company: 'Freelance / Consultant',
    jobTitle: 'Consultant Frontend',
    description: 'Missions réalisées pour différents clients.',
    missions: [
      {
        startDate: 'Jan 2023',
        endDate: 'Apr 2024',
        location: 'Remote',
        company: 'BigCorp',
        jobTitle: 'Vue.js Expert',
        description: 'Refonte d’un dashboard interne pour la finance.'
      },
      {
        startDate: 'Jun 2021',
        endDate: 'Dec 2022',
        location: 'Lyon',
        company: 'StartupX',
        jobTitle: 'Fullstack Developer',
        description: 'Développement d’une PWA avec Vue & Node.js.'
      }
    ]
  },
  {
    startDate: 'May 2020',
    endDate: 'Dec 2020',
    location: 'Lyon',
    company: 'WebWorks',
    jobTitle: 'Junior Developer',
    description: 'Création de sites vitrines et petits outils back-office.'
  }
]
</script>

