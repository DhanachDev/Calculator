<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <Calculator name="A"></Calculator>
                </div>
                <div class="col-12 col-xl-6">
                    <Calculator name="B"></Calculator>
                </div>
            </div>

        </div>

        <div class="col-12 col-lg-6">
            Result store
        </div>
    </div>
</div>
</template>

<script>
import Calculator from './calculator'
export default {
    name: 'HelloWorld',
    components: {
        Calculator
    },
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
.column {
    padding: 20px;
}
</style>
