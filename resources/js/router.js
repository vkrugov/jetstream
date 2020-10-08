import VueRouter from "vue-router";

import MyTeam from "./Pages/MyTeam";

const router =  new VueRouter ({
    routes: [
        {
            path: '/my-team',
            component: MyTeam,
            name: 'myTeam'
        },
    ],
    mode: 'history'
});

export default router
