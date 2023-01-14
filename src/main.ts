import { Loading, Notify, Quasar } from 'quasar';
import { createApp } from 'vue';
import App from './App.vue';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

createApp(App)
  .use(Quasar, {
    plugins: {
      Loading,
      Notify,
    },
    config: {
      loading: {},
      notify: {},
    },
  })
  .mount('#app');
