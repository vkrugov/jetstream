<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Test Page
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    Test Profile:
                    <test-profile :profile="profile" />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from './../Layouts/AppLayout'
import Welcome from './../Jetstream/Welcome'
import TestProfile from './TestProfile'

export default {
    props: {
        profile: {
            default: null
        }
    },
    components: {
        AppLayout,
        Welcome,
        TestProfile
    },
}
</script>
