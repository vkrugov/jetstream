<template>
    <div>
        <div v-if="profile">
            <p>
                Name: {{ profile.name }}
            </p>
            <p>
                Email: {{ storeProfile.email }}
            </p>
        </div>
        <hr/>
        <br /><br /><br /><br />
        <div>
            <button class="btn btn-success" @click="getNumber">Get random number</button>
        </div>
        <div>
            <p v-if="number">
                Random Number: {{ number }}
            </p>
        </div>
        <hr/>
        <br /><br /><br /><br />
        <div>
            <router-link :to="{name: 'myTeam'}">My team (Router-link - doesn't work)</router-link>
            <br>
            <inertia-link :href="route('myTeam')">My team (inertia-link)</inertia-link>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import {GET_NUMBER, SET_PROFILE} from "../store/actions/test.actions";
export default {

    computed: mapState({
        storeProfile: (state) => state.test.profile,
        number: (state) => state.test.number,
    }),
    props: {
        profile: {
            default: null
        }
    },
    methods: {
        getNumber() {
            this.$store.dispatch(GET_NUMBER);
        },
        setProfile() {
            this.$store.commit(SET_PROFILE, this.profile)
        }
    },
    created() {
        this.setProfile();
    },
}
</script>

<style scoped>

</style>
