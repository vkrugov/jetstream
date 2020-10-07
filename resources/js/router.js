import VueRouter from "vue-router";

import NewTest from "./Pages/NewTest";

const router =  new VueRouter ({
    routes: [
        {
            path: '/new_test',
            component: NewTest,
            name: 'home'
        },
    ],
    mode: 'history'
});

export default router
