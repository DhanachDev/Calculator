<template>
<div class="_result-wrapper">
    <div class="_filter-wp">
        <div class="_label">Results </div>
        <div class="_input">
            <input type="text" :placeholder="placeholder" v-model="searchInput">
        </div>
        <div class="_filter">
            <select name="filter_cal" v-model="option">
                <option value="all">All</option>
                <option v-for="o in options" :key="o.id" :value="o.name">{{o.name}}</option>
            </select>
        </div>
    </div>
    <div class="_body">

        <div class="_empty" v-if="!storeResult.length">
            Not found any results!
        </div>
        <div class="_clear-btn" @click="showModal=true" v-else>
            Clear
        </div>
        <ConfirmDialog v-if="showModal" :message="'Are you sure you want to clear the result(s)? This action cannot be undone.'" @confirm="confirmClearResult" />

        <div class="_result-wrapper">
            <ResultItem v-for="(result,index) in showResult()" :key="index" :result="result" />
        </div>

    </div>
</div>
</template>

<script>
import ResultItem from './share/resultItem'
import ConfirmDialog from '@/components/share/confirmDialog'
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    components: {
        ResultItem,
        ConfirmDialog
    },
    props: {
        options: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    computed: {
        ...mapGetters({
            storeResult: 'GET_STORE_RESULT'
        })
    },
    data() {
        return {
            placeholder: 'Search by result, date',
            showModal: false,
            option: 'all',
            searchInput: ''
        }
    },
    methods: {
        ...mapActions({
            clearStoreResult: "clearStoreResult"
        }),
        confirmClearResult(answer) {
            this.showModal = !this.showModal
            if (answer == 'ok') {
                this.clearStoreResult()
            }
        },
        showResult() {
            let arr = JSON.parse(JSON.stringify(this.storeResult))
            let si = this.searchInput
            if (this.option != 'all') {
                arr = arr.filter(el => el.name == this.option)
            }
            if (si.length) {
                arr = arr.filter(el => el.result.includes(si) || el.firstNumber.includes(si) || el.secondNumber.includes(si) || el.dateTime.includes(si) || (el.firstNumber + el.operate + el.secondNumber).includes(si))
            }
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
._result-wrapper {
    ._filter-wp {
        display: flex;
        // align-items: center;
        flex-direction: column;
        font-size: 1.5rem;
        color: gray;

        ._label {
            margin-bottom: 10px;
        }

        div {
            padding-right: 15px;
        }

        ._input {
            flex: 1;
            margin-bottom: 10px;
        }

        ._filter {
            flex: .3;
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
        min-height: 165px;
        padding: 35px;
        -webkit-box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);
        box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);

        ._empty {
            padding: 20px;
            font-size: 2rem;
            color: gray;
        }

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

@media (min-width: 1140px) {
    ._filter-wp {
        flex-direction: row !important;
    }

}
</style>
