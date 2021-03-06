import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import store from "./store";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import axios from "axios";
import VueAxios from "vue-axios";
import VCalendar from "v-calendar";

import mainPage from "./components/MainPage/mainpage.vue";
import databasePage from "./components/DatabasePage/databasePage.vue";
import announcementsPage from "./components/AnouncementsPage/announcementsMainPage.vue";
import openPositionPage from "./components/OpenPositionsPage/positionsPageMain.vue";
import reservationMainPage from "./components/ReservationPage/reservationMainPage.vue";
import loginPage from "./components/AuthenticationPage/loginPage.vue";
import signupPage from "./components/AuthenticationPage/signupPage.vue";
import profilePage from "./components/ProfilePage/profilePage.vue";
import adminMainPage from "./components/AdminPanel/adminMainPage.vue";
import trafficViewPage from "./components/TrafficViewPage/trafficViewPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: mainPage },
        { path: "/database", component: databasePage },
        { path: "/announcements", component: announcementsPage },
        { path: "/openpositions", component: openPositionPage },
        { path: "/reservations", component: reservationMainPage },
        { path: "/login", component: loginPage },
        { path: "/signup", component: signupPage },
        { path: "/profile", component: profilePage },
        { path: "/admin", component: adminMainPage },
        { path: "/traffic", component: trafficViewPage },
    ],
});

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VCalendar, {});
app.use(VueAxios, axios);
app.config.productionTip = false;
app.mount("#app");