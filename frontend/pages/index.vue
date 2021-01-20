<template>
  <div id="main-wrapper">
    <HeaderSection />
    <div id="content" role="main">
      <IntroSection />
      <!-- <AboutSection /> -->
      <ServicesSection />
      <!-- <SkillsSection /> -->
      <!-- PromoSection -->
      <!-- <PortfolioSection /> -->
      <!-- <ProcessSection /> -->
      <!-- <ClientsSection /> -->
      <!-- <ClientsLogoSection /> -->
      <ContactSection />
    </div>
    <FooterSection />
    <BackToTop />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection'
import FooterSection from '@/components/FooterSection'
import ContactSection from '@/components/ContactSection'
import ServicesSection from '@/components/ServicesSection'
import IntroSection from '@/components/IntroSection'
import BackToTop from '@/components/BackToTop'

export default {
  components: {
    HeaderSection,
    FooterSection,
    ContactSection,
    ServicesSection,
    IntroSection,
    BackToTop,
  },
}
</script>

<style lang="scss">
.main-wrapper {
  background: #fff;
}
.section {
  position: relative;
  padding: 104px 0;
  padding: 6.5rem 0;
  overflow: hidden;
}
.font-weight-500 {
  font-weight: 500 !important;
}
.font-weight-600 {
  font-weight: 600 !important;
}
.text-muted {
  color: #6c757d !important;
}
.text-5 {
  font-size: 21px !important;
  font-size: 1.3125rem !important;
}
.text-8 {
  font-size: 32px !important;
  font-size: 2rem !important;
}
.text-20 {
  font-size: 5.75rem !important;
}
.text-4 {
  font-size: 18px !important;
  font-size: 1.125rem !important;
}
.text-11,
.text-12,
.text-13,
.text-14,
.text-15,
.text-16,
.text-17,
.text-18,
.text-19,
.text-20,
.text-21,
.text-22,
.text-23,
.text-24,
.text-25 {
  line-height: 1.3;
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
hr {
  border-top: 2px solid rgba(16, 85, 96, 0.1);
}
.border-2 {
  border-width: 2px !important;
}
.heading-separator-line {
  width: 100px;
}
</style>
