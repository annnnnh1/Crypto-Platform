<script>
import CryptoList from '@/components/AllCryptosInfo/CryptoList.vue';

export default {
    components: {
        CryptoList

    },
    data: function () {
        return {
            list: [
                {
                    id: 1,
                    name: "Bitcoin",
                    surname: "BTC",
                    price: "35,185.68",
                    change: "+0.76",
                    volume: "14,53B",
                    market: "686,5B"
                },
                {
                    id: 2,
                    name: "Ethereume",
                    surname: "ETH",
                    price: "15,185.68",
                    change: "+0.66",
                    volume: "134,53B",
                    market: "247,33B"
                },
                {
                    id: 3,
                    name: "Ripple",
                    surname: "XRP",
                    price: "185.68",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B"
                },
                {
                    id: 4,
                    name: "TetherUS",
                    surname: "USDT",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 5,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 6,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 7,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 8,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 9,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 10,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 11,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 12,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },
                {
                    id: 13,
                    name: "BNB",
                    surname: "BNB",
                    price: "0.51",
                    change: "+0.26",
                    volume: "14,53B",
                    market: "32,91B",
                    stat: "+1.23"
                },

            ],
        }
    },
    
}
</script>

<template>
        <div class="wrapper cryptolist-header">
        <div class="cryptolist cryptolist-header_name">
            <p>Name</p>
        </div>
        <div class="cryptolist cryptolist-header_price">
            <p>Price</p>
        </div>
        <div class="cryptolist cryptolist-header_change">
            <p>Change</p>
        </div>
        <div class="cryptolist-header_volume">
            <p>24h Volume</p>
        </div>
        <div class="cryptolist-header_market">
            <p>Market Cap</p>
        </div>
        <div class="cryptolist-header_buy"></div>
    </div>
    <CryptoList v-for="item in list" :item="item" :key="item.id"/>
</template>

<style lang="scss">

.cryptolist-header {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    background: #000;
    padding: 12px 16px 12px 20px;
    border-radius: 10px;
    opacity: 0.7;

    p {
        color: #fff;
        line-height: 16px;
        font-size: 12px;
    }

    &_name {
        width: 300px;
    }

    &_price {
        width: 175px
    }

    ;

    &_change {
        width: 80px;
    }

    &_volume {
        width: 175px;
        display: flex;
        flex-direction: row-reverse;
    }

    &_market {
        width: 175px;
        display: flex;
        flex-direction: row-reverse;
    }
}

.cryptolist-info {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-around;
    padding-left: 16px;
    border-bottom: 1px solid #474D57;

    p {
        color: #fff;
    }
}

.cryptolist {
    &-nameinfo {
        display: flex;
        gap: 16px;
        width: 300px;
        align-items: center;


    }

    &-logo {
        i {
            color: #ffa500;
        }
    }

    &-price {
        width: 180px
    }

    &-change {
        width: 80px;
    }

    &-volume {
        width: 175px;
        display: flex;
        flex-direction: row-reverse;
    }

    &-market {
        width: 175px;
        display: flex;
        flex-direction: row-reverse;
    }

    &-buy {
        position: relative;

        i {
            color: #f4c800;
        }

        &::before {
            content: "Buy";
            position: absolute;
            top: -35px;
            left: -5px;
            background: #474D57;
            border-radius: 5px;
            padding: 5px;
            opacity: 0;
            visibility: hidden;
            color: #fff;
            font-size: 12px;
        }

        &::after {
            content: '';
            border-top: 10px solid #474D57;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            visibility: hidden;
            position: absolute;
            opacity: 0;
            left: 1px;
            top: -15px;
        }

        &:hover:before,
        &:hover:after {
            opacity: 1;
            visibility: visible;
            margin-bottom: 0px;
        }
    }
}
.cryptolist-name p{
    font-size: 13px;
    color: #8f8f8f;
}
.cryptolist-surname p {
    font-weight: 600;
}
</style>