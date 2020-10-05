<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="row">
                <div class="_pad-box col-12 col-xl-6" v-for="c in calculator" :key="c.id">
                    <Calculator :name="c.name"></Calculator>
                </div>
            </div>

        </div>

        <div class="_pad-box col-12 col-lg-6">
            <Result :options="calculator"></Result>
        </div>
    </div>
</div>
</template>

<script>
import Calculator from './calculator'
import Result from './result'
export default {
    components: {
        Calculator,
        Result
    },
    props: {
        msg: {
            type: String,
            default: "Vue project"
        }
    },
    data() {
        return {
            calculator: [{
                    id: 1,
                    name: "A"
                },
                {
                    id: 2,
                    name: "B"
                }
            ],
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.column {
    padding: 20px;
}

.row {
    ._pad-box {
        padding-top: 30px;
        padding-bottom: 30px;
    }
}

@media (min-width: 1140px) {
    ._pad-box {
        padding: 0 30px;
    }

    .container-fluid {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 60px;
    }

    .row {
        ._pad-box {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
    }
}
</style>
