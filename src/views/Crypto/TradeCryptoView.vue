<script>
import TradeFormSell from '@/components/Trade/Form/TradeFormSell.vue';
import TradeFormBuy from '../../components/Trade/Form/TradeFormBuy.vue';

export default {
    components: { TradeFormSell, TradeFormBuy }
}
</script>

<template>
    <div class="wrapper header-buy">
        <div class="header-buy_left">
            <span v-if="this.$route.params.type === 'sell'">Sell Crypto</span>
            <span v-else>Buy Crypto</span>
        </div>
        <div class="header-buy_right">
            <button>Fiat Center</button>
            <button>History</button>
            <button>FAQ</button>
        </div>
    </div>
    <div class="wrapper wrapper-container">
        <div class="wrapper wrapper-container">
            <div class="container-info">
                <h1 v-if="this.$route.params.type === 'buy'">Buy Crypto</h1>
                <h1 v-else>Sell Crypto</h1>
                <p>Various payment methods available</p>
                <div class="container-info_steps">
                    <div class="step">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M17 13v3h2v-3h3v-2h-3V8h-2v3h-3v2h3zM3 18a4 4 0 014-4h4a4 4 0 014 4v3H3v-3z"
                                fill="#76808F"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
                                fill="url(#referral-g_svg__paint0_linear)"></path>
                            <defs>
                                <linearGradient id="referral-g_svg__paint0_linear" x1="9" y1="12" x2="9" y2="3"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F0B90B"></stop>
                                    <stop offset="1" stop-color="#F8D33A"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>Sign Up</p>
                    </div>
                    <div class="step">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 20H2V4h20v16zM4 7h7v6H4V7zm9 0h4v2h-4V7z"
                                fill="url(#id-g_svg__paint0_linear)"></path>
                            <path d="M7.5 12a2 2 0 100-4 2 2 0 000 4zM11 17v-4H4v4h7zM13 11h7v2h-7v-2zM20 15h-7v2h7v-2z"
                                fill="#76808F">
                            </path>
                            <defs>
                                <linearGradient id="id-g_svg__paint0_linear" x1="12" y1="20" x2="12" y2="4"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F0B90B"></stop>
                                    <stop offset="1" stop-color="#F8D33A"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>Verify Account</p>
                    </div>
                    <div class="step">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 35" height="57" width="57">
                            <path fill="url(#paint0_linear_25350_1637)"
                                d="M10.8097 6.35702C15.0308 6.35702 18.4528 9.77897 18.4528 14.0002C18.4528 18.2214 15.0308 21.6433 10.8097 21.6433C6.58846 21.6433 3.1665 18.2214 3.1665 14.0002C3.1665 9.77897 6.58846 6.35702 10.8097 6.35702ZM10.8097 17.2758L7.53402 14.0002L10.8097 10.7245L14.0853 14.0002L10.8097 17.2758Z"
                                clip-rule="evenodd" fill-rule="evenodd" />
                            <path fill="#76808F"
                                d="M3.1665 14.1667H29.8332V29.3334H6.1665C4.50965 29.3334 3.1665 27.9903 3.1665 26.3334V14.1667Z" />
                            <rect fill="#F6CB2B" height="5.33333" width="6.66667" y="18.9766" x="23.1665" />
                            <path fill="url(#paint1_linear_25350_1637)"
                                d="M24.512 2.52368C27.451 2.52368 29.8335 4.90621 29.8335 7.84521C29.8335 10.7842 27.451 13.1667 24.512 13.1667C21.573 13.1667 19.1904 10.7842 19.1904 7.84521C19.1904 4.90621 21.573 2.52368 24.512 2.52368ZM24.512 10.1259L22.2313 7.84521L24.512 5.56456L26.7926 7.84521L24.512 10.1259Z"
                                clip-rule="evenodd" fill-rule="evenodd" />
                            <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" y2="6.35702" x2="10.8097" y1="21.6433"
                                    x1="10.8097" id="paint0_linear_25350_1637">
                                    <stop stop-color="#F0B90B" />
                                    <stop stop-color="#F8D33A" offset="1" />
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" y2="2.52368" x2="24.512" y1="13.1667"
                                    x1="24.512" id="paint1_linear_25350_1637">
                                    <stop stop-color="#F0B90B" />
                                    <stop stop-color="#F8D33A" offset="1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p v-if="this.$route.params.type === 'buy'">Buy Crypto</p>
                        <p v-else>Sell Crypto</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-trade">
            <div class="container-trade_header">
                <router-link class="container-trade_header--item"
                    :class="this.$route.params.type === 'buy' ? 'container-trade_header--item-active' : ''"
                    to="/crypto/buy">
                    Buy
                </router-link>
                <router-link class="container-trade_header--item"
                    :class="this.$route.params.type === 'sell' ? 'container-trade_header--item-active' : ''"
                    to="/crypto/sell">
                    Sell
                </router-link>
            </div>
            <div class="container-trade_main">
                <TradeFormSell v-if="this.$route.params.type === 'sell'" />
                <TradeFormBuy v-else-if="this.$route.params.type === 'buy'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container-trade_header--item {
    color: #8f8f8f;
    border-bottom: 4px solid #8f8f8f;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 50%;
    transition: 0.5s;
}

.container-trade_header--item-active {
    color: #fff;
    border-bottom: 4px solid #0267FF;
}

.container-info {
    align-items: flex-start;
}

.header-buy {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    span {
        font-size: 32px;
        color: #fff;
    }

    button {
        color: #fff;
        margin-left: 50px;
        transition: 0.3s;

        &:hover {
            color: #c7bcbc;
        }
    }
}

.wrapper-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1000px;
    margin-top: 50px;
}

.container {
    &-info {
        display: flex;
        flex-direction: column;

        h1 {
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            margin-top: 88px;
            color: #fff;
        }

        p {
            margin-top: 24px;
            font-size: 14px;
            color: #fff;
        }

        &_steps {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-top: 20px;

            svg {
                width: 57px;
            }

            .step {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

        }
    }

    &-trade {
        &_header {
            display: flex;
            align-items: center;
            width: 500px;
            font-size: 20px;
            color: #8f8f8f;
        }
    }
}

.container-trade_main--form {
    margin-top: 30px;
    width: 500px;
    background: #0e0e52;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: 0.3s;

    h3 {
        font-weight: 500;
        color: #fff;
        padding: 10px 10px 0px 10px;
        font-size: 14px;
        float: right;
        span {
            font-family: rajdhani;
            font-size: 16px;
        }
    }

    &:hover {
        border: 2px solid #0267ff;
    }

    h2 {
        color: #fff;
        padding: 10px 0 0 20px;
        font-size: 14px;
        font-weight: 300;
    }

    input {
        color: #fff;
        font-size: 24px;
        padding-left: 20px;
        font-family: Rajdhani;
        outline: none;
        background: none;
        border: none;
        height: 80px;
        width: 365px;
        letter-spacing: 1px;
        font-weight: bold;
        
        &::placeholder {
            font-weight: bold;
            font-family: Rajdhani;
            color: #8f8f8f;
        }

    }

    &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        &_value {
            p {
                padding-left: 75px;
                position: absolute;
                top: 25px;
                left: 0;
                font-size: 20px;
                color: #8f8f8f;
                z-index: 5;
            }
        }
    }

    &-value {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-width: 115px;
        cursor: pointer;
        background-color: #000617;
        padding: 8px;
        border-radius: 50px;
        color: #fff;
        height: 40px;
        margin-right: 15px;
        font-weight: bold;

        svg {
            width: 16px;
            height: 16px;
        }
    }
    &-drop {
        ul {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: absolute;
                top: 45px;
                left: 2px;
                background-color: #000617;
                width: 115px;
                height: 95px;
                border-radius: 10px;
                padding: 10px;
                box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
                z-index: 50;
                cursor: default;
                overflow-y: scroll;
            }


            li {
                margin-bottom: 4px;
                z-index: 51;
                color: #8683A4;
                width: 100%;
                transition: 0.2s;
                cursor: pointer;
                font-size: 14px;

                &:hover {
                    color: #fff;
                }

            }
    }

}


.container-trade_main--btn button {
    color: #fff;
    margin-top: 50px;
    width: 100%;
    height: 50px;
    background: #0267FF;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    align-items: center;

    &:hover {
        background: #2478f6;
        box-shadow: 0px 0px 10px #2478f6;

    }
}

.trade-error_sum {
    color: rgb(246, 70, 93);
    font-size: 12px;
    padding: 0 0 10px 15px;
    &--border {
        border: 2px solid #ff0000 !important;
    }

}
</style>