import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)
app.use(router)
app.mount('#app')
