import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);

import testPage from "./test.vue";

const routes = [{ path: "/testpage", component: testPage }];

export default new Router({
    mode: "history",
    routes
});
