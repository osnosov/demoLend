export default function ({ app, store }) {
  app.i18n.onLanguageSwitched = async (oldLocale, newLocale) => {
    // try {
    // await store.dispatch('categories/getNav')
    // await store.dispatch('cart/getBasket')
    // if (app.$auth.loggedIn) {
    //   await store.dispatch('customer/getCustomerNav')
    // }
    // } catch (error) {
    // console.error('Error on [nuxtServerInit] action.', error)
    // }
  }
}
