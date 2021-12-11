import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createRouter, createWebHistory } from "vue-router";

import mainPage from './components/MainPage/mainpage.vue';
import databasePage from './components/DatabasePage/databasePage.vue';
import announcementsPage from './components/AnouncementsPage/announcementsMainPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: mainPage },
        { path: '/database', component: databasePage },
        { path: '/announcements', component: announcementsPage }
    ],
});

const app = createApp(App);
app.use(router);
app.config.productionTip = false;
app.mount("#app");