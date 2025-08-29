+43-0
<template>
  <div class="program-card">
    <h3>{{ name }}</h3>
    <p class="date">{{ startDate }} → {{ endDate }}</p>
    <p class="description">{{ description }}</p>
    <ul v-if="details && details.length" class="details">
      <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProgramCard',
  props: {
    startDate: String,
    endDate: String,
    name: String,
    description: String,
    details: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.program-card {
  border: 1.5px solid #555;
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;
  background-color: #f5f5f5;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
  color: #333;
}

.program-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>