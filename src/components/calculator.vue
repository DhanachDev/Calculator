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
                    {{firstDigit}} <span>{{operate}}</span> {{secondDigit}}
                </div>
            </div>
            <div class="_cal-body">
                <button type="button" class="plus-sign" value="+">+</button>
                <button type="button" value="c">c</button>
                <button type="button" value="x">x</button>
                <button type="button" value="-">-</button>

                <button type="button" value="7">7</button>
                <button type="button" value="8">8</button>
                <button type="button" value="9">9</button>

                <button type="button" value="4">4</button>
                <button type="button" value="5">5</button>
                <button type="button" value="6">6</button>

                <button type="button" value="1">1</button>
                <button type="button" value="2">2</button>
                <button type="button" value="3">3</button>

                <button type="button" class="zero" value="0">0</button>
                <button type="button" class="decimal" value=".">.</button>

                <button type="button" class="equal-sign" value="=">=</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            result: 20,
            operate: 'x',
            firstDigit: 1,
            secondDigit: 20
        }
    },
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
._name {
    font-size: 20px;
    text-align: left;
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
