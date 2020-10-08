require('./bootstrap');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import router from "./router";
import store from './store'

Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(VueRouter);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = document.getElementById('app');

new Vue({
    store,
    router,
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
