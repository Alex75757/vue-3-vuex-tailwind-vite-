import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './static/css/index.css'


const app = createApp(App).use(store)
app.component("Carousel")
app.mount('#app')


