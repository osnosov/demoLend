<template>
  <section id="services" class="section bg-light">
    <div class="container">
      <div class="row mb-4">
        <div class="col-lg-9 col-xl-8 mx-auto text-center">
          <h2 class="font-weight-600 mb-3">{{ $t('services.title') }}</h2>
          <hr class="heading-separator-line border-2 border-primary" />
          <p class="text-4 text-muted">{{ $t('services.description') }}</p>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(cart, index) in carts"
          :key="index"
          class="col-sm-6 col-lg-4 mt-4 mb-2"
        >
          <div
            class="featured-box bg-white text-center rounded shadow-sm py-5 px-4"
          >
            <!-- <div class="featured-box-icon text-primary mt-2">
              <i class="fas fa-palette"></i>
            </div> -->
            <h3 class="mb-3">{{ $t(cart.title) }}</h3>
            <p class="text-muted mb-0">{{ $t(cart.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      carts: [
        {
          title: 'services.itemTitle1',
          description: 'services.itemDescription1',
        },
        {
          title: 'services.itemTitle2',
          description: 'services.itemDescription2',
        },
        {
          title: 'services.itemTitle3',
          description: 'services.itemDescription3',
        },
      ],
    }
  },
}
</script>
