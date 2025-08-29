<script setup>

import ParallaxBackground from "@/components/ParallaxBackground.vue";
</script>

<template>
  <ParallaxBackground image="bg_contact.jpg" />
  <div class="contact">
    <h1>Contact</h1>
    <p>If you would like to discuss with me, feel free to join me via  </p>
    <br>

    <h2>E-mail</h2>
    <p><a :href="'mailto:' + 'demuelenaere.cedric@gmail.com'" class="email-link">{{ "demuelenaere.cedric@gmail.com" }}</a></p>
    <br>
    <h2>LinkedIn</h2>
    <p><a :href="'https://be.linkedin.com/in/cedric-de-muelenaere'" target="_blank" rel="noopener noreferrer" class="linkedin-link"> My LinkedIn </a> </p>
    <br>

    <h2>Phone</h2>
    <p>(+32) 471/50.10.37</p>

  </div>
</template>

<style scoped>

</style>