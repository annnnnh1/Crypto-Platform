<template >
    <div class="container-trade_main--form-value" @click="dropdownCrypt()">
        <div class="value">
            <i class="fa-brands fa-btc"></i>
            {{ BALANCE.currentCrypto }} 
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                fill="currentColor"></path>
        </svg>
        <div class="container-trade_main--form-drop">
        <ul v-if="dropdownCoins">
            <li v-for="(item, key) in BALANCE.listCrypto" 
                @click="changeCrypto(item)" :key="key">
                {{ item }}
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
            ...mapGetters(['BALANCE'])
        },
        mounted() {
            this.$store.dispatch('GET_BALANCE');
        },

    data: () => {
        return {
            dropdownCoins: false,
        };
    },
    methods: {
        changeCrypto(elem) {
            this.BALANCE.currentCrypto = elem;
            this.trade.spend = ''
        },
        dropdownCrypt() {
            this.dropdownCoins = !this.dropdownCoins
        },
    }

}
</script>