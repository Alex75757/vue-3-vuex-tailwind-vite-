import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './static/css/index.css'
import VueTheMask from 'vue-the-mask'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(store).use(VueTheMask)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')

// .use(VueAxios, axios).provide('axios', app.config.globalProperties.axios).mount('#app')
