<template>
  <section id="home">
    <div class="intro-wrap">
      <div class="intro-mask opacity-7 bg-dark"></div>
      <div
        class="intro-bg parallax full-img"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="intro-content section d-flex fullscreen">
        <div class="container my-auto">
          <div class="row">
            <div class="col-12 text-center">
              <p class="text-8 font-weight-500 text-white mb-2 mb-md-3">
                <vue-typed-js
                  :strings="[
                    $t('intro.message1'),
                    $t('intro.message2'),
                    $t('intro.message3'),
                  ]"
                  :loop="true"
                  :type-speed="80"
                  :back-speed="40"
                >
                  <span class="typing"></span>
                </vue-typed-js>
              </p>

              <h2 class="text-20 font-weight-600 text-white mb-2 mb-md-3">
                {{ $t('intro.title') }}
              </h2>
              <p class="text-5 text-light mb-0">
                {{ $t('intro.description') }}
              </p>
            </div>
          </div>
        </div>
        <nuxt-link
          :to="localePath({ path: '/', hash: 'services' })"
          class="scroll-down-arrow text-white smooth-scroll"
        >
          <span class="animated">
            <chevronDown />
          </span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import chevronDown from '@/assets/icons/chevron-down.svg?inline'

export default {
  name: 'IntroSection',
  components: { chevronDown },
  data() {
    return {
      image: './images/intro-bg.jpg',
    }
  },
}
</script>
<style lang="scss" scoped>
.intro-wrap {
  position: relative;
  overflow: hidden;
}
.opacity-7 {
  opacity: 0.7;
}
.intro-wrap .intro-mask,
.intro-wrap .intro-bg,
.intro-wrap .intro-bg-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.intro-wrap .intro-mask {
  z-index: 1;
}
.intro-wrap .intro-bg {
  z-index: 0;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  transition: background-image 300ms ease-in 200ms;
}
.fullscreen {
  min-height: 100vh !important;
}
.intro-wrap .intro-content {
  position: relative;
  z-index: 2;
}
.full-img {
  // background-image: `url(${require('@/assets/path/to/your/img.jpg')}) `;
  // background-image: require('./images/intro-bg.jpg');
  // url('@/images/intro-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center -50px;
}
.typed-element {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.scroll-down-arrow {
  position: absolute;
  z-index: 3;
  bottom: 20px;
  left: 50%;
  margin-left: -16px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.scroll-down-arrow .animated {
  position: relative;
  animation: fadeindown 1.5s infinite;
  -webkit-animation: fadeindown 1.5s infinite;
  -moz-animation: fadeindown 1.5s infinite;
  -o-animation: fadeindown 1.5s infinite;
}

@keyframes fadeindown {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 10px;
    opacity: 1;
  }
}
</style>
