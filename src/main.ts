import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import {directivePlugin} from "@/directives";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(directivePlugin)
app.mount('#app')
