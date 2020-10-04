<template>
<div class="hello">
    // pointless comments
    // add comment to develop branch after update feature
    // add comment to develop branch
    // add comment to test-feature-branch-2
    <h1>{{msg}} </h1>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: "Vue project"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
