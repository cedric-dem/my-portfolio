<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script setup>
// No specific logic required for the base card
</script>

<style scoped>
.base-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  color: #333;
  margin: 16px 0;
}

.base-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}
</style>