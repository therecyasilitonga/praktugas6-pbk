import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import router from './router/router'

const myApp = createApp(App)
myApp.use(router)
myApp.use(Quasar, { plugins: {} })
myApp.mount('#app')
