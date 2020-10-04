<template>
<div class="_result-item">
    <div class="_name-wp">
        <div class="_name">
            Calculator A
        </div>
        <div class="_time">
            09/09/2020 13:30.25
        </div>
    </div>
    <div class="_result">
        20
    </div>
    <div class="_action">
        1 <span>x</span> 20
    </div>
</div>
</template>

<style lang="scss" scoped>
._result-item {
    margin-bottom: 20px;

    ._name-wp {
        display: flex;
        font-size: 2rem;

        ._name {
            text-align: left;
            color: gray;
        }

        ._time {
            text-align: right;
            color: #a7d4fa;
            flex: 1;
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
</style>
