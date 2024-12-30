import { defineNuxtPlugin } from '#app';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css'; // Use the theme of your choice

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ToastPlugin);
});
