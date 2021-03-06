import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);

import testPage from "./test.vue";

// import account routes

import accountRoutes from "../../Modules/Accounts/Resources/assets/js/router";
import productRoutes from "../../Modules/Products/Resources/assets/js/router";
const defaultRoutes = [{ path: "/testpage", component: testPage }];

var routes = [];
routes = routes.concat(defaultRoutes, accountRoutes, productRoutes);

export default new Router({
    mode: "history",
    routes
});
