// Duvidas no router ver o video https://www.youtube.com/watch?v=1vvpGoFjba4
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import store from './store'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
