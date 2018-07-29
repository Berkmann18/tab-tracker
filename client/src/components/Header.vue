<template>
    <v-toolbar
            fixed
            class="cyan"
    >
        <v-toolbar-title
                class="mr-4"
                to="home"
        >
            <v-btn
                    to="home"
                    flat
                    dark
                    class="v-toolbar__title"
            >
                Tab Tracker
            </v-btn>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                    flat
                    dark
            >
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items>
            <!--<router-link to="register" tag="button" class="btn flat white&#45;&#45;text">Sign up</router-link>-->
            <v-btn
                    v-if="!$store.state.isUserLoggedIn"
                    to="register"
                    flat
                    dark
            >
                Sign up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                    v-if="!$store.state.isUserLoggedIn"
                    to="login"
                    flat
                    dark
            >
                Login
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'page-header'
}
</script>

<style scoped>
</style>
