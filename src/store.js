import { createStore } from "vuex";

const store = createStore({
    state: () => ({
        username: "",
        firstname: "",
        lastname: "",
        is_authenticated: false,
        userid: "",
        is_admin: 0
    }),

    actions: {},

    mutations: {
        increment(state) {
            state.count++;
        },
        update_username(state, username) {
            state.username = username;
        },
        update_firstname(state, firstname) {
            state.firstname = firstname;
        },
        update_lastname(state, lastname) {
            state.lastname = lastname;
        },
        // authenticate(state, { is_authenticated }) {
        //     localStorage.setItem = { 'is_authenticated': is_authenticated };
        // }
        login(state) {
            state.is_authenticated = true;
        },
        logout(state) {
            state.is_authenticated = false;
        },
    },

    getters: {},
});

export default store;