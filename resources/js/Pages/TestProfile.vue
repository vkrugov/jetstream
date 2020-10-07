<template>
    <div>
        <div>
            <p>
                Name: {{ profile.name }}}
            </p>
            <p>
                Email: {{ profile.email }}}
            </p>
        </div>
        <hr/>
        <div>
            <button class="btn btn-success" @click="getNumber">Get random number</button>
        </div>
        <div>
            <p>
                Random Number: {{ number }}
            </p>
        </div>
    </div>
</template>

<script>
import Button from "../Jetstream/Button";
import {mapState} from "vuex";
import {GET_NUMBER} from "../store/actions/test.actions";
export default {
    name: "TestProfile",
    components: {Button},
    computed: mapState({
        number: (state) => state.test.number,
    }),
    props: {
        profile: {}
    },
    methods: {
        getNumber() {
            this.$store.dispatch(GET_NUMBER);
        }
    }
}
</script>

<style scoped>

</style>
