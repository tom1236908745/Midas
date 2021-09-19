import Vue from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    /* databaseURL: "YOUR_DOMAIN.firebaseio.com", */
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false;

/* new Vue({
    render: (h) => h(App),
}).$mount("#app"); */
firebase.auth().onAuthStateChanged((user) => {
    /* eslint-disable no-new */
    if (!app) {
        new Vue({
            el: "#app",
            router,
            components: { App },
            template: "<App/>",
        });
    }
});