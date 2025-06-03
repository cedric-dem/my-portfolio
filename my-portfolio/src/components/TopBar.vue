<template>
  <nav class="topbar">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/projects" class="link">Projects</router-link>
    <router-link to="/contact" class="link">Contact</router-link>
  </nav>
</template>

<style scoped>
.topbar {
  display: flex;
  gap: 20px;
  background: #333;
  padding: 10px;
}
.link {
  color: white;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
