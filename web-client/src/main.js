import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createRouter, createWebHistory } from "vue-router";

import mainpage from './components/MainPage/mainpage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: mainpage }
    ],
});

const app = createApp(App);
app.use(router);
app.config.productionTip = false;
app.mount("#app");