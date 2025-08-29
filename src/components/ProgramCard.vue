<template>
  <BaseCard>
    <h3>{{ name }}</h3>
    <p class="date">{{ startDate }} → {{ endDate }}</p>
    <div v-if="courses && courses.length">
      <p>Courses :</p>
      <ul class="courses">
        <li v-for="(course, index) in courses" :key="index">
          <template v-if="typeof course === 'string'">
            {{ course }}
          </template>
          <template v-else>
            <span>{{ course.name }}</span>
            <a v-if="course.link" :href="course.link" download>Download Link </a>
          </template>
        </li>
      </ul>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue'

export default {
  name: 'ProgramCard',
  components: { BaseCard },
  props: {
    startDate: String,
    endDate: String,
    name: String,
    courses: {
      type: Array,
      default: () => []
    }
  }
}
</script>


<style scoped>
.courses {
  padding-left: 0;
  list-style-position: inside;
  text-align: left;
}

</style>