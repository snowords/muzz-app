import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

createApp(App).use(ElementPlus).mount('#app')
