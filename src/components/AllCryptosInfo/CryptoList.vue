<script>
export default {
props: {
    item: Object
}
}
</script>


<template>

    <div class="wrapper cryptolist-info">
        <div class="cryptolist-nameinfo">
            <div class="cryptolist-logo">
                <i class="fa-brands fa-btc"></i>
            </div>
            <div class="cryptolist-surname">
                <p>{{this.item.surname}}</p>
            </div>
            <div class="cryptolist-name">
                <p>{{this.item.name}}</p>
            </div>
        </div>
        <div class="cryptolist-price">
            <p>${{ this.item.price }}</p>
        </div>
        <div class="cryptolist-change">
            <p>{{this.item.change}}%</p>
        </div>
        <div class="cryptolist-volume">
            <p>${{this.item.volume}}</p>
        </div>
        <div class="cryptolist-market">
            <p>{{this.item.market}}</p>
        </div>
        <div class="cryptolist-buy">
            <router-link to="crypto/buy">
                <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">

</style>