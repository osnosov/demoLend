<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-9 col-xl-8 mx-auto text-center">
          <h2 class="font-weight-600 mb-3">{{ $t('contact.title') }}</h2>
          <hr class="heading-separator-line border-primary" />
          <p class="text-4 text-muted">{{ $t('contact.description') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="form.name"
                    name="name"
                    type="text"
                    class="form-control border-2"
                    required=""
                    :placeholder="$t('contact.name')"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="form.email"
                    name="email"
                    type="email"
                    class="form-control border-2"
                    required=""
                    :placeholder="$t('contact.email')"
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-2">
              <textarea
                v-model="form.message"
                name="form-message"
                class="form-control border-2"
                rows="4"
                required=""
                :placeholder="$t('contact.message')"
              ></textarea>
            </div>
            <p class="text-center mt-5 mb-0">
              <button
                :disabled="!disabledButton"
                class="btn btn-primary btn-lg rounded-pill d-inline-flex"
                @click.stop.prevent="submit"
              >
                {{ $t('contact.send') }}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    disabledButton: true,
  }),
  methods: {
    async submit() {
      // if you want to send any data into server before redirection then you can do it here
      // this.$router.push("/search?"+this.foobar);

      // console.log(this.form)

      try {
        this.disabledButton = false
        const lang = this.$i18n.locale
        const { data } = await this.$axios.post(
          '/contacts',
          {
            lang,
            phone: this.form.phone,
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
          },
          { timeout: 5000 }
        )
        if (!data.error) {
          this.form.name = ''
          this.form.phone = ''
          this.form.email = ''
          this.form.message = ''
          this.$toast.success(data.message)
        } else this.$toast.error(data.message)
        this.disabledButton = true
      } catch (error) {
        this.disabledButton = true
        this.$toast.error(error.message)
      }
    },
  },
}
</script>
