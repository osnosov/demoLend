<template>
  <nuxt-link
    :to="localePath({ path: '/', hash: 'home' })"
    :style="{ display: displayButton }"
    class="back-to-top"
  >
    <chevronUp />
  </nuxt-link>
</template>

<script>
import chevronUp from '@/assets/icons/chevron-up.svg?inline'

export default {
  name: 'BackToTop',
  components: { chevronUp },
  data() {
    return {
      displayButton: 'none',
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 250) this.displayButton = 'inline'
      else this.displayButton = 'none'
    },
  },
}
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  z-index: 1010;
  bottom: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
  font-size: 16px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 0.25rem !important;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}
</style>
