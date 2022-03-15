import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OktaVue from '@okta/okta-vue'
import { oktaAuth } from './okta';
import '../src/index.css';
import "@material-tailwind/react/tailwind.css";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'



createApp(App)
    .use(router)
    .use(OktaVue, {
        oktaAuth,
        onAuthRequired: () => {
            router.push('/login')
        },
        onAuthResume: () => {
            router.push('/login')
        },
    })
    .mount('#app')