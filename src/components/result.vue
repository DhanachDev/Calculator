<template>
<div class="_result-wrapper">
    <div class="_filter-wp">
        <div>Results</div>
        <div class="_input">
            <input type="text" :placeholder="placeholder">
        </div>
        <div class="_filter">
            <select name="" id="">
                <option value="all">All</option>
                <option value="result">Result</option>
                <option value="date">Date</option>
            </select>
        </div>
    </div>
    <div class="_body">
        <div class="_clear-btn">
            Clear
        </div>
        <div class="_result-wrapper">
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
        </div>

    </div>
</div>
</template>

<script>
import ResultItem from './share/resultItem'
export default {
    components: {
        ResultItem
    },
    data() {
        return {
            placeholder: 'Search by result, date'
        }
    }
}
</script>

<style lang="scss" scoped>
._result-wrapper {
    ._filter-wp {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: gray;

        div {
            padding-right: 15px;
        }

        ._input {
            flex: 1;
        }

        input {
            outline: none;
        }

        input,
        select {
            width: 100%;
            border-radius: 17px;
            border: 1px solid #cacaca;
            height: 45px;
            padding: 0 15px;
        }
    }

    ._body {
        position: relative;
        margin: 20px 0;
        width: 100%;
        border: 1px solid #f7f7f7;
        border-radius: 20px;
        background-color: white;
        min-height: 350px;
        padding: 35px;
        -webkit-box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);
        box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);

        ._result-wrapper {
            max-height: 600px;
            overflow-y: auto;
        }

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }

        ._clear-btn {
            position: absolute;
            padding: 10px 25px;
            background-color: #faa7a7;
            color: white;
            border-radius: 20px;
            font-size: 2rem;
            bottom: 25px;
            right: 25px;
            z-index: 2;
            cursor: pointer;
        }

    }
}
</style>
