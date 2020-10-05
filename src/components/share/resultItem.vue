<template>
<div class="_result-item">
    <div class="_name-wp">
        <div class="_name">
            Calculator {{result.name}}
        </div>
        <div class="_time">
            {{result.dateTime}}
        </div>
    </div>
    <div class="_result">
        {{result.result}}
    </div>
    <div class="_action">
        {{result.firstNumber}} <span>{{result.operate}}</span> {{result.secondNumber}}
    </div>
</div>
</template>

<script>
export default {
    props: {
        result: {}
    },
}
</script>

<style lang="scss" scoped>
._result-item {
    margin-bottom: 20px;

    ._name-wp {
        display: flex;
        font-size: 2rem;
        flex-direction: column;

        ._name {
            text-align: left;
            color: gray;
        }

        ._time {
            text-align: left;
            color: #a7d4fa;
            flex: 1;
            font-size: 22px;
        }

    }

    ._result {
        text-align: left;
        font-size: 3rem;
        border-bottom: 1px solid #dadada;
        color: gray;
    }

    ._action {
        padding: 5px 0;
        text-align: left;
        color: gray;
        font-size: 2rem;

        span {
            color: #e72dd1;
        }
    }
}

@media (min-width: 1140px) {
    ._filter-wp {
        flex-direction: row !important;
    }

    ._name-wp {
        flex-direction: row !important;

        ._time {
            text-align: right !important;
        }
    }
}
</style>
