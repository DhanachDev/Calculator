<template>
<div>
    <p class="_name">Calculator {{name}}</p>
    <div class="_c-wrapper">
        <div class="_c">
            <div class="_head">
                <div class="_result">
                    {{result}}
                </div>
                <div class="_action">
                    <template v-if="firstNumber">
                        {{firstNumber}} <span>{{operate}}</span> {{secondNumber}}
                    </template>
                </div>
            </div>
            <div class="_cal-body">
                <button type="button" class="plus-sign operate" value="+" @click="operate = firstNumber.length ? '+' : ''">+</button>
                <button type="button" value="c" class="clear-value" @click="setDefault()">c</button>
                <button type="button" value="x" class="operate" @click="operate = firstNumber.length ? 'x' : ''">x</button>
                <button type="button" value="-" class="operate" @click="operate = firstNumber.length ? '-' : ''">-</button>

                <button type="button" value="7" @click="clicked('7')">7</button>
                <button type="button" value="8" @click="clicked('8')">8</button>
                <button type="button" value="9" @click="clicked('9')">9</button>

                <button type="button" value="4" @click="clicked('4')">4</button>
                <button type="button" value="5" @click="clicked('5')">5</button>
                <button type="button" value="6" @click="clicked('6')">6</button>

                <button type="button" value="1" @click="clicked('1')">1</button>
                <button type="button" value="2" @click="clicked('2')">2</button>
                <button type="button" value="3" @click="clicked('3')">3</button>

                <button type="button" class="zero" value="0" @click="clicked('0')">0</button>
                <button type="button" class="decimal" value="." @click="clicked('.')">.</button>

                <button type="button" class="equal-sign" value="=" @click="getResult()">=</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            result: "0",
            operate: '',
            firstNumber: '',
            secondNumber: ''
        }
    },
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        ...mapActions({
            pushStoreResult: "pushStoreResult",
            calculate: "calculate"
        }),
        setDefault() {
            this.operate = this.firstNumber = this.secondNumber = ''
            this.result = "0"
        },
        clicked(number) {
            if (this.operate == '') {
                this.firstNumber += (number == '.' ? (this.firstNumber.length ? number : '0.') : number)
            } else {
                this.secondNumber += (number == '.' ? (this.secondNumber.length ? number : '0.') : number)
            }
        },
        async getResult() {
            if (this.firstNumber.length && this.secondNumber.length) {
                let expr = this.getExpr(Number(this.firstNumber), Number(this.secondNumber), this.operate)
                axios.get('https://api.mathjs.org/v4/?expr=' + expr).then(res => {
                    this.result = "" + res.data
                    let current_datetime = new Date()
                    let dateTime = ("0" + current_datetime.getDate()).slice(-2) + "/" + ("0" + (current_datetime.getMonth() + 1)).slice(-2) + "/" + current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + "." + current_datetime.getSeconds()
                    this.pushStoreResult({
                        name: this.name,
                        result: this.result,
                        operate: this.operate,
                        firstNumber: this.firstNumber,
                        secondNumber: this.secondNumber,
                        dateTime: dateTime
                    })
                })

            }

        },
        getExpr(fn, sn, op) {
            let txt = "";
            switch (op) {
                case '+': {
                    txt = fn + '%2B' + sn
                    break;
                }
                case '-': {
                    txt = fn + '-' + sn;
                    break;
                }
                case 'x': {
                    txt = fn + '*' + sn;
                    break;
                }
                case '/': {
                    txt = fn + '/' + sn;
                    break;
                }
                default: {
                    txt = fn + '+' + sn;
                    break;
                }
            }
            return txt
        }
    }
}
</script>

<style lang="scss" scoped>
._name {
    font-size: 2rem;
    text-align: left;
    color: gray;
}

._c-wrapper {
    min-width: 335px;

    ._c {
        width: 100%;
        border: 1px solid #f7f7f7;
        border-radius: 20px;
        background-color: white;
        min-height: 350px;
        padding: 35px;
        -webkit-box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);
        box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);

        ._head {
            ._result {
                text-align: left;
                font-size: 3rem;
                border-bottom: 1px solid #dadada;
                color: gray;
                word-break: break-all;
            }

            ._action {
                padding: 5px 0;
                text-align: left;
                color: gray;
                font-size: 2rem;
                word-break: break-all;
                min-height: 60px;

                span {
                    color: #e72dd1;
                }
            }
        }

        ._cal-body {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px 10px;

            button {
                height: 60px;
                border-radius: 10px;
                border: none;
                background-color: #a7d4fa;
                font-size: 2rem;
                color: gray;
                -webkit-box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);
                box-shadow: -1px 1px 20px -14px rgba(0, 0, 0, 0.44);
                outline: none;
            }

            button:active {
                background-color: rgb(255, 166, 0);
                color: white;
            }

            .equal-sign {
                grid-row: 3 / 6; //start / end
                height: 100%;
                grid-column: 4 / 4; //start / end
            }

            .plus-sign {
                grid-row: 1 / 3;
                height: 100%;
                grid-column: 4 / 4;
            }

            .zero {
                grid-column: 1 / 3;
            }
        }
    }
}
</style>
