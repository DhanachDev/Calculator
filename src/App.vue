<template>
<Layout />
</template>

<script>
import Layout from './components/Layout.vue'
import {
    useStore
} from 'vuex'
import {
    mapGetters
} from 'vuex'
export default {
    setup() {
        const store = useStore()
        store.commit("SET_INITIAL")
    },
    components: {
        Layout
    },
    computed: {
        ...mapGetters({
            storeResult: 'GET_STORE_RESULT'
        })
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
</style>
