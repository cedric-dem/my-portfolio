<template>
  <nav class="topbar">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/jobs" class="link">Experiences</router-link>
    <router-link to="/education" class="link">Education</router-link>
    <router-link to="/projects" class="link">Projects</router-link>
    <router-link to="/contact" class="link">Contact</router-link>
  </nav>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 20px;
  background: linear-gradient(90deg, #4b6cb7, #182848);
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
.link:hover {
  color: #ffd700;
}
.router-link-active {
  font-weight: 700;
  text-decoration: underline;
}
</style>
<script setup lang="ts">
</script>