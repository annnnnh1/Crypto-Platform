
<template>
  <form action="">
    <div class="container-trade_main--form"
      :class="[
        this.trade.changeBTC ? 'border-correct_value' : '',
        this.trade.spend === 0 || this.trade.spend > 0 && this.trade.spend < 15 || this.trade.spend > 138000 ? 'trade-error_sum--border' : '']">
      <h2>Spend</h2>
      <div class="container-trade_main--form-item" tabindex="0">
        <div class="container-trade_main--form-item_value">
          <input type="number" @input="changetag('spend')" v-model="trade.spend"
            :class="this.trade.spend === 0 || this.trade.spend > 0 && this.trade.spend < 15 || this.trade.spend > 138000 ? 'error-sum_color' : ''"
            min="15.00" placeholder="15.00 - ?" step="any" required @focusin="trade.changeBTC = true"
            @focusout="trade.changeBTC = false">
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
        v-if="trade.spend === 0 || this.trade.spend > 0 && this.trade.spend < 15 || this.trade.spend > 138000">
        The limit per transaction is between 15.00 - {{ [100000 *
          this.CURRENCY_PRICE[BALANCE.mainCurrency]].toLocaleString('en') }} {{ BALANCE.mainCurrency }}. Please adjust the <br>
        amount.
      </div>
    </div>
    <div class="container-trade_main--form" :class="[
      trade.changeUSD ? 'border-correct_value' : '',
      this.trade.receive < 0 || this.trade.receive > 3 ? 'trade-error_sum--border' : '']">
      <h2>Receive</h2>
      <div class="container-trade_main--form-item">
        <div class="container-trade_main--form-item_value">
          <input type="number" @input="changetag('receive')" v-model="trade.receive"
            :class="this.trade.receive < 0 || this.trade.receive > 3 ? 'error-sum_color' : ''" step="any" required
            placeholder="0.00" @focusin="trade.changeUSD = true" @focusout="trade.changeUSD = false">
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
                <router-link :to="'/crypto/buy/' + `${item}`">{{ item }}</router-link>
                <!-- {{ item }} -->
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="trade-error_sum" v-if="this.trade.receive < 0 || this.trade.receive > 3">
        <!-- [100000 * this.CURRENCY_PRICE[BALANCE.mainCurrency] / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency]] -->
        The limit per transaction is between 0 - {{ Math.round([100000 * this.CURRENCY_PRICE[BALANCE.mainCurrency]] /
          this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] * 100000000) / 100000000 }} {{ BALANCE.mainCrypto}}. Please adjust the amount.
      </div>
    </div>
    <div class="container-trade_main--btn">
      <button>Buy</button>
    </div>
  </form>
</template>
  
<script>
import { mapGetters } from 'vuex';


export default {
  components: {
  },
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
          : Math.round(this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] * 100000000) / 100000000

      }
      if (value == 'receive') {
        this.trade.spend = this.trade.receive * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
          : Math.round(this.trade.receive * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] * 100) / 100
      }
    },
    changeCrypto(elem) {
      this.BALANCE.mainCrypto = elem;

      this.trade.receive = this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
        : Math.round(this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] * 1000000) / 1000000
    },
    changeCurrency(elem) {
      this.BALANCE.mainCurrency = elem;

      this.trade.receive = this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] === 0 ? null
        : Math.round(this.trade.spend / this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] * 1000000) / 1000000
    },
    dropdownCurrency() {
      this.dropCurrency = !this.dropCurrency
    },
    dropdownCrypto() {
      this.dropCoins = !this.dropCoins
    },
  },
  computed: {
    ...mapGetters(['PRICE', 'BALANCE', 'CURRENCY_PRICE']),
  },
  mounted() {
    this.$store.dispatch('GET_CRYPTO_PRICE');
    this.$store.dispatch('GET_BALANCE');
    this.$store.dispatch('GET_CURRENCY_PRICE');
  },
}
</script>
  
  
<style lang="scss" scoped>
  .border-correct_value {
    border: 2px solid #0267ff !important;
  }

  .error-sum_color {
    color: #f6465d !important;
  }

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
