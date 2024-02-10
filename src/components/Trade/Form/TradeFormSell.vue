<template>
    <form action="">
        <div class="container-trade_main--form"
            :class="[this.trade.changeBTC ? 'border-correct_value' : '',
            this.trade.spend === 0 || this.trade.spend > 0 && this.trade.spend < 0.00036736 || this.trade.spend > 3 ? 'trade-error_sum--border' : '']">
            <h3>Balance: <span>{{ BALANCE[BALANCE.mainCrypto + 'balance'] }}</span> {{ this.BALANCE.mainCrypto }}</h3>
            <h2>Spend</h2>
            <div class="container-trade_main--form-item">
                <div class="container-trade_main--form-item_value">
                    <input type="number"
                        :class="this.trade.spend === 0 || this.trade.spend > 0 && this.trade.spend < 0.00036736 || this.trade.spend > 3 ? 'error-sum_color' : ''"
                        @input="changetag('spend')" min="0.00036736" max="3" step="any" placeholder="Please enter amount"
                        required v-model="trade.spend" @focusin="trade.changeBTC = true"
                        @focusout="trade.changeBTC = false">
                </div>
                <div class="container-trade_main--form-value" @click="dropdownCrypto()">
                    <div class="value">
                        <i class="fa-brands fa-btc"></i>
                        {{ BALANCE.mainCrypto }}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                            fill="currentColor"></path>
                    </svg>
                    <div class="container-trade_main--form-drop">
                        <ul v-if="dropCoins">
                            <li v-for="(item, key) in BALANCE.listCrypto" @click="changeCrypto(item)" :key="key">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="trade-error_sum">
                <p v-if="this.trade.spend === 0 || this.trade.spend > 0 && this.trade.spend < 0.00036736">Min amount
                    0.00036736 BTC.</p>
                <p v-if="this.trade.spend > 3">Max amount {{ this.BALANCE[this.BALANCE.mainCrypto + 'balance'] }} {{ this.BALANCE.mainCrypto }}.</p>
            </div>
        </div>
        <div class="container-trade_main--form"
            :class="[trade.changeUSD ? 'border-correct_value' : '',
            this.trade.receive === 0 || this.trade.receive > 0 && this.trade.receive < 15 || this.trade.receive > 138000 ? 'trade-error_sum--border' : '']">
            <h2>Receive</h2>
            <div class="container-trade_main--form-item">
                <div class="container-trade_main--form-item_value">
                    <input type="number"
                        :class="this.trade.receive === 0 || this.trade.receive > 0 && this.trade.receive < 15 || this.trade.receive > 138000 ? 'error-sum_color' : ''"
                        @input="changetag('receive')" step="any" placeholder="0.00" required v-model="trade.receive"
                        @focusin="trade.changeUSD = true" @focusout="trade.changeUSD = false">
                </div>
                <div class="container-trade_main--form-value" @click="dropdownCurrency()">
                    <div class="value">
                        <i class="fa-solid fa-dollar-sign"></i>
                        {{ BALANCE.mainCurrency }}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                            fill="currentColor"></path>
                    </svg>
                    <div class="container-trade_main--form-drop">
                        <ul v-if="dropCurrency">
                            <li v-for="(item, key) in BALANCE.listCurrency" @click="changeCurrency(item)" :key="key">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="trade-error_sum"
                v-if="trade.receive === 0 || this.trade.receive > 0 && this.trade.receive < 15 || this.trade.receive > 138000">
                The limit per transaction is between 15.00 - 138,000.00 USD. Please adjust the <br> amount.
            </div>
        </div>
        <div class="container-trade_main--btn">
            <button>Sell</button>
        </div>
    </form>
</template>


<script>
import { mapGetters } from 'vuex';


export default {
    data: () => {
        return {
            trade: {
                spend: null,
                receive: null,
                changeUSD: false,
                changeBTC: false,
            },
            dropCoins: false,
            dropCurrency: false,
        }
    },
    methods: {
        changetag(value) {
            if (value == 'spend') {
                this.trade.receive = this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
                    : this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency]
                this.trade.receive = this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null : Math.round(this.trade.receive * 1000000) / 1000000
            }
            if (value == 'receive') {
                this.trade.spend = this.trade.receive * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
                    : this.trade.receive / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency]
                this.trade.spend = this.trade.receive / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null : Math.round(this.trade.spend * 1000000) / 1000000
            }
        },
        changeCrypto(elem) {
            this.BALANCE.mainCrypto = elem;

            this.trade.receive = this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
                : this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency]
            this.trade.receive = this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null : Math.round(this.trade.receive * 1000000) / 1000000
        },
        changeCurrency(elem) {
            this.BALANCE.mainCurrency = elem;

            this.trade.receive = this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
                : this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency]
            this.trade.receive = this.trade.spend * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null : Math.round(this.trade.receive * 1000000) / 1000000
        },
        dropdownCurrency() {
            this.dropCurrency = !this.dropCurrency
        },
        dropdownCrypto() {
            this.dropCoins = !this.dropCoins
        },
    },
    computed: {
        ...mapGetters(['PRICE', 'BALANCE']),
        
    },
    mounted() {
        this.$store.dispatch('GET_CRYPTO_PRICE');
        this.$store.dispatch('GET_BALANCE')
    },
}
</script>
<style lang="scss" scoped>
.trade-error_sum {
    p {
        color: rgb(246, 70, 93);
        font-size: 12px;
    }

    &--border {
        border: 2px solid #ff0000 !important;
    }
}
</style>
