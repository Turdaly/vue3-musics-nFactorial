import '@/assets/main.css'

import { DatePicker } from 'ant-design-vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'ant-design-vue/dist/reset.css';
import GoogleSignInPlugin from "vue3-google-signin"

import App from '@/App.vue'
import router from './router'

const app = createApp(App)

app.use(GoogleSignInPlugin, {
  clientId: '831532239330-semai7l90imp972ggtfbl7s72gunlqra.apps.googleusercontent.com',
});

app.use(createPinia())
app.use(router)
app.use(DatePicker);
app.mount('#app')
