<script>
export default {
}
</script>


<template>
    <header>
        <div class="header-logo">
            <router-link to="/">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M42.9435 4.92656C37.918 1.41273 31.8558 -0.306828 25.7338 0.044961C19.6118 0.39675 13.7866 2.7994 9.19664 6.86575C4.60672 10.9321 1.51949 16.4254 0.432408 22.4603C-0.654676 28.4953 0.321701 34.7205 3.20421 40.1329C6.08672 45.5452 10.7075 49.8296 16.3219 52.2954C21.9364 54.7613 28.2175 55.2652 34.1533 53.7258C40.089 52.1864 45.3336 48.6935 49.042 43.8098C52.7504 38.9261 54.7067 32.9362 54.5955 26.8051L34.699 27.1658C34.7291 28.8278 34.1988 30.4515 33.1936 31.7753C32.1884 33.0991 30.7667 34.046 29.1577 34.4632C27.5487 34.8805 25.8461 34.7439 24.3242 34.0755C22.8023 33.4071 21.5497 32.2457 20.7684 30.7786C19.987 29.3115 19.7223 27.624 20.017 25.9881C20.3117 24.3522 21.1485 22.8632 22.3927 21.7609C23.6369 20.6586 25.216 20.0073 26.8755 19.912C28.535 19.8166 30.1782 20.2827 31.5405 21.2352L42.9435 4.92656Z"
                            fill="#023B92" />
                        <path
                            d="M42.9435 4.92656C37.918 1.41273 31.8558 -0.306828 25.7338 0.044961C19.6118 0.39675 13.7866 2.7994 9.19664 6.86575C4.60672 10.9321 1.51949 16.4254 0.432408 22.4603C-0.654676 28.4953 0.321701 34.7205 3.20421 40.1329C6.08672 45.5452 10.7075 49.8296 16.3219 52.2954C21.9364 54.7613 28.2175 55.2652 34.1533 53.7258C40.089 52.1864 45.3336 48.6935 49.042 43.8098C52.7504 38.9261 54.7067 32.9362 54.5955 26.8051L40.2415 27.0653C40.2942 29.9723 39.3667 32.8123 37.6085 35.1277C35.8502 37.4432 33.3636 39.0993 30.5493 39.8292C27.735 40.559 24.757 40.3201 22.095 39.151C19.433 37.9819 17.2422 35.9506 15.8756 33.3844C14.5089 30.8183 14.046 27.8667 14.5614 25.0054C15.0768 22.144 16.5405 19.5396 18.7167 17.6116C20.8929 15.6836 23.6548 14.5445 26.5574 14.3777C29.46 14.2109 32.3343 15.0262 34.717 16.6922L42.9435 4.92656Z"
                            fill="#024FC1" />
                        <path
                            d="M42.9435 4.92656C37.918 1.41273 31.8558 -0.306828 25.7338 0.044961C19.6118 0.39675 13.7866 2.7994 9.19664 6.86575C4.60672 10.9321 1.51949 16.4254 0.432408 22.4603C-0.654676 28.4953 0.321701 34.7205 3.20421 40.1329C6.08672 45.5452 10.7075 49.8296 16.3219 52.2954C21.9364 54.7613 28.2175 55.2652 34.1533 53.7258C40.089 52.1864 45.3336 48.6935 49.042 43.8098C52.7504 38.9261 54.7067 32.9362 54.5955 26.8051L46.6197 26.9497C46.6984 31.2893 45.3137 35.5289 42.6889 38.9856C40.0641 42.4422 36.352 44.9145 32.1507 46.0041C27.9494 47.0937 23.5036 46.737 19.5298 44.9917C15.5559 43.2463 12.2853 40.2139 10.2451 36.3831C8.20485 32.5522 7.51378 28.146 8.28321 23.8745C9.05264 19.603 11.2378 15.7149 14.4865 12.8367C17.7352 9.95856 21.8584 8.25797 26.1915 8.00898C30.5246 7.75998 34.8154 8.97708 38.3724 11.4642L42.9435 4.92656Z"
                            fill="#0267FF" />
                    </svg>
            </router-link>
        </div>
        <div class="header-menu">
            <nav class="header-menu_main">
                <li>
                    <button>Products <i class="fa-solid fa-chevron-down"></i></button>
                    <ul class="drop">
                        <li><a href="https://www.binance.com/en/price/bitcoin" target="_blank">BTC</a></li>
                        <li><a href="https://www.binance.com/en/price/ethereum" target="_blank">ETH</a></li>
                        <li><a href="https://www.binance.com/en/price/xrp" target="_blank">XRP</a></li>
                    </ul>
                </li>
                <li>
                    <button>Company <i class="fa-solid fa-chevron-down"></i></button>
                    <ul class="drop">
                        <li><a href="https://www.binance.com/ru" target="_blank">Binance</a></li>
                        <li><a href="https://ripple.com/" target="_blank">Ripple</a></li>
                        <li><a href="https://www.coinbase.com/ru/" target="_blank">Coinbase</a></li>
                        <li><a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank">Bitcoin</a></li>
                        <li><a href="https://www.bitfinex.com/" target="_blank">Bitfinex</a></li>
                        <li><a href="https://www.getmonero.org/" target="_blank">Monero</a></li>
                        <li><a href="https://tether.to/ru/" target="_blank">Tether</a></li>
                        <li><a href="https://steemit.com/" target="_blank">Steemit</a></li>
                    </ul>
                </li>
                <li>
                    <button>Learn <i class="fa-solid fa-chevron-down"></i></button>
                    <ul class="drop">
                        <li><a href="#">News</a></li>
                        <li><a href="#">Academy</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Glossary</a></li>
                    </ul>
                </li>
                <router-link class="nav-buy_crypto" to="/crypto/buy">Buy Crypto</router-link>
            </nav>
        </div>
        <div class="header-menu_user">
            <router-link to="/login"><button class="btn btn-log">Log In</button></router-link>
            <router-link to="/register"><button class="btn btn-sign">Sign Up</button></router-link>
        </div>
    </header>

</template>

<style lang="scss">

</style>