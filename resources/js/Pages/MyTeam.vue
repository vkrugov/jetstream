<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                My Team
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    My Team: {{ user.current_team.name }}
                    <br />
                    <div v-if="users">
                        <div v-for="user in users" :key="user.id">
                            <p>
                                name: {{ user.name }}
                            </p>
                            <p>
                                email: {{ user.email }}
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from './../Layouts/AppLayout'

export default {
    props: {
        users: {
            required: true
        },
        user: {
            required: true
        },
    },
    components: {
        AppLayout
    }
}
</script>

<style scoped>

</style>
