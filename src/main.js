import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.less'
import './registerServiceWorker'

createApp(App)
.use(router)
.mount('#app')
