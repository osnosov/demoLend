<template>
  <header id="header" class="sticky-top-slide">
    <nav
      :class="{ 'sticky-on': scrolled }"
      class="primary-menu navbar navbar-expand-lg navbar-text-light navbar-line-under-text bg-transparent border-bottom-0"
    >
      <div class="container">
        <nuxt-link
          :to="localePath('index')"
          :title="`${$t('header.logo')}`"
          class="logo ml-3 ml-md-0"
        >
          <img src="images/logo-light.png" :alt="$t('header.logo')" />
        </nuxt-link>
        <ul class="nav ml-5">
          <li
            v-for="locale in $i18n.locales"
            :key="locale.code"
            class="nav-item"
          >
            <nuxt-link
              :to="switchLocalePath(locale.code)"
              :class="locale.code == $i18n.locale ? 'active' : ''"
              class="nav-link link-nav"
            >
              {{ locale.name }}
            </nuxt-link>
          </li>
        </ul>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#header-nav"
        >
          <span></span><span></span><span></span>
        </button>
        <div
          id="header-nav"
          class="collapse navbar-collapse justify-content-end"
        >
          <ul class="navbar-nav">
            <li v-for="nav in navs" :key="nav.id" :class="nav.classLi">
              <!-- <a
                v-scroll-to="nav.anchor"
                href="#"
                :class="[nav.classA, { active: nav.active }]"
              >
                {{ $t(nav.name) }}
              </a> -->
              <!-- exact -->
              <nuxt-link
                :to="localePath({ path: '/', hash: nav.anchor })"
                :class="nav.classA"
                active-class="active"
              >
                {{ $t(nav.name) }}
              </nuxt-link>

              <!-- <a class="nav-link link-nav" href="#">{{ $t('header.about') }}</a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      scrolled: false,
      navs: [
        {
          id: 1,
          name: 'header.home',
          anchor: '#home',
          classLi: 'nav-item',
          classA: 'nav-link link-nav',
          active: false,
        },
        {
          id: 2,
          name: 'header.services',
          anchor: '#services',
          classLi: 'nav-item',
          classA: 'nav-link link-nav',
          active: false,
        },
        {
          id: 3,
          name: 'header.contact',
          anchor: '#contact',
          classLi: 'align-items-center h-auto ml-lg-3',
          classA:
            'nav-link btn btn-outline-light shadow-none d-inline-block rounded-pill mt-3 mt-lg-0',
          active: false,
        },
      ],
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
      if (window.scrollY > 180) this.scrolled = true
      else this.scrolled = false
    },
  },
}
</script>

<style lang="scss" scoped>
#header {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#header .navbar {
  padding: 0;
}
#header .logo {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: stretch;
  align-self: stretch;
}
.primary-menu {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  height: auto !important;
  -webkit-box-ordinal-group: 0;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  background: #fff;
  border-bottom: 1px solid #efefef;
}
.primary-menu.bg-transparent {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: none;
  border-bottom: 1px solid rgba(250, 250, 250, 0.3);
}

.sticky-on.navbar-text-light.bg-transparent,
.sticky-top .sticky-on-top.navbar-text-light.bg-transparent {
  background-color: #111 !important;
  -webkit-box-shadow: 0 0 10px rgba(250, 250, 250, 0.03);
  box-shadow: 0 0 10px rgba(250, 250, 250, 0.03);
  border-bottom: none !important;
}
.primary-menu.sticky-on {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1020;
  left: 0;
  // display: none !important;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  -webkit-animation: slide-down 0.7s;
  -moz-animation: slide-down 0.7s;
  animation: slide-down 0.7s;
}
@-webkit-keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@-moz-keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
ul > li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}
ul > li + li {
  margin-left: 2px;
}
ul > li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
ul > li > a.link-nav {
  height: 70px;
  padding: 0 0.85em;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  position: relative;
  color: #fff;
}

ul > li:hover > a.link-nav {
  // color: #e83e8c;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
ul > li:hover > a.link-nav,
ul > li > a.active.link-nav {
  color: rgba(250, 250, 250, 0.75);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

ul > li > a.link-nav::after {
  position: absolute;
  content: '';
  height: 2px;
  width: 0;
  left: 50%;
  right: 0;
  bottom: 14px;
  background-color: transparent;
  color: #fff;
  border-bottom: 2px solid #e83e8c;
  border-color: rgba(250, 250, 250, 0.6);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  transform: translate(-50%, 0) translateZ(0);
  -webkit-transform: translate(-50%, 0) translateZ(0);
}
ul > li > a.link-nav:hover::after,
ul > li > a.active::after {
  border-color: rgba(250, 250, 250, 0.6);
  width: calc(100% - 0.99em);
}
.btn {
  padding: 0.8rem 2.6rem;
  font-weight: 500;
  border-width: 2px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
ul > li a.btn {
  padding: 0.4rem 1.4rem;
}
</style>
