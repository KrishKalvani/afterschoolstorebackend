import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
        console.log('SWBackend registered: ', registration);
      }).catch(registrationError => {
        console.log('SWBackend registration failed: ', registrationError);
      });
    });
}