import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Signup from "@/components/Signup";
import Signin from "@/components/Signin";
import firebase from "firebase";

let router = new Router({
    routes: [{
            path: "*",
            redirect: "signin",
        },
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld,
            meta: { requiresAuth: true },
        },
        {
            path: "/signup",
            name: "Signup",
            component: Signup,
        },
        {
            path: "/signin",
            name: "Signin",
            component: Signin,
        },
    ],
});

// TODO: Nuxtの時どうするか確認
router.beforeEach((to, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next("signin");
    else if (!requiresAuth && currentUser) next();
    else next();
});

export default router;