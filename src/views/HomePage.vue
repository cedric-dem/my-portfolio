<script setup>
import ParallaxBackground from '@/components/ParallaxBackground.vue'
</script>

<template>
  <ParallaxBackground image="bg_home.jpg" />
  <div class="home">
    <img src="/profile_picture.jpg" alt="Profile photo" class="profile-image" />
    <h1>Who Am I ?</h1>
    <p>My name is Cédric, I was born on the 20th of August 1999. I live in Belgium</p>
    <h1>Hello World !</h1>
    <p>I have always been fascinated by computer, since my childhood I have always been experimenting with softwares</p>
  </div>
</template>


<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
  color: #fff;
}
.home p {
  text-align: left;
}
.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
  object-fit: cover;
}
</style>