+25-4
<template>
  <div class="parallax-bg">
    <div class="bg-image" :style="bgStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxBackground',
  props: {
    image: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 0.3
    }
  },
  data() {
    return {
      scrollY: 0
    };
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${this.image})`,
        transform: `translateY(${-this.scrollY * this.speed}px)`
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY || window.pageYOffset;
    }
  }
};
</script>

<style scoped>
.parallax-bg {
  position: fixed;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(8px);
}

.parallax-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>