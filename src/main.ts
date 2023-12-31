import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

app.use(pinia)
app.use(ElementPlus)
app.component('v-icon', OhVueIcon)
app.mount('#app')
