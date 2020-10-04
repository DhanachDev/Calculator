<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="row">
                <div class="_pad-box col-12 col-xl-6">
                    <Calculator name="A"></Calculator>
                </div>
                <div class="_pad-box col-12 col-xl-6">
                    <Calculator name="B"></Calculator>
                </div>
            </div>

        </div>

        <div class="_pad-box col-12 col-lg-6">
            <Result></Result>
        </div>
    </div>
</div>
</template>

<script>
import Calculator from './calculator'
import Result from './result'
export default {
    name: 'HelloWorld',
    components: {
        Calculator,
        Result
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

@media (min-width: 1140px) {
    ._pad-box {
        padding: 0 30px;
    }

    .container-fluid {
        padding-left: 40px;
        padding-right: 40px;
    }
}
</style>
