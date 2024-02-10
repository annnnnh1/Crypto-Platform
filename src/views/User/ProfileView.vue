<template>
    <div class="user-info_header">
        <div class="user-info_left">
            <div class="user-info_left--photo">
                <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666327467_10-mykaleidoscope-ru-p-ulibka-shimpanze-pinterest-13.jpg"
                    alt="">
            </div>
            <div class="user-info_left--name">
                <p>User-1234567890</p>
                <div class="settings">
                    <button><i class="fa-solid fa-gear"></i></button>
                </div>
            </div>
            <div class="user-border"></div>
        </div>
        <div class="user-info_right">
            <div class="user-info_header--id">
                <span>User ID</span>
                <div class="user-info_id">
                    <p>809242438</p>
                </div>
            </div>
            <div class="user-info_header--level">
                <span>VIP Level</span>
                <div class="user-info_level">
                    <p>Regular User</p>
                </div>
            </div>
            <div class="user-info_header--following">
                <span>Following</span>
                <div class="user-info_following">
                    <p>0</p>
                </div>
            </div>
            <div class="user-info_header--followers">
                <span>Followers</span>
                <div class="user-info_followers">
                    <p>0</p>
                </div>
            </div>
        </div>
    </div>
    <div class="user-info_coins">
        <div class="user-info_coins--header">
            <div class="user-info_coins--header-left">
                <span>Balance</span>
            </div>
            <div class="user-info_coins--header-right">
                <router-link class="btn user-info_coins--header-btn" to="/crypto/buy">Buy</router-link>
                <router-link class="btn user-info_coins--header-btn" to="/crypto/sell">Sell</router-link>
            </div>
        </div>
        <div class="user-info_coins--balance">
            <div class="user-info_coins_sum" style="cursor: pointer;">
                <p>{{ BALANCE[BALANCE.mainCrypto + 'balance'] }}</p>
            </div>
            <div class="user-info_coins--namecrypto" @click='dropdownBalance()'>
                <p>{{ BALANCE.mainCrypto }}</p>
                <i class="fa-solid fa-angle-down"></i>
                <div class="user-info_coins--namecrypto-drop">
                    <ul v-if="dropdownCoins">
                        <li v-for="(item, key) in BALANCE.listCrypto" 
                            @click="changeCrypto(item)" :key="key">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="user-info_coins--balance-currency">
            <p>≈</p>
            <!-- <p>${{ this.BALANCE[this.BALANCE.mainCrypto + 'balance'] * this.PRICE[this.BALANCE.mainCrypto][this.BALANCE.mainCurrency] }}</p> -->
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {

        data: () => {
            return {
                dropdownCoins: false,
            };
        },
        computed: {
            ...mapGetters(['PRICE', 'BALANCE'])
        },
        mounted() {
            this.$store.dispatch('GET_PRICE');
            this.$store.dispatch('GET_BALANCE');
        },
        methods: {
            changeCrypto(elem) {
                this.BALANCE.mainCrypto = elem;
            },
            dropdownBalance() {
                this.dropdownCoins = !this.dropdownCoins
            },
    }
}
</script>

<style lang="scss">
.user-info_header {
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 50px;

    &--id,
    &--level,
    &--following,
    &--followers {
        width: 150px;
        line-height: 30px;
    }
}

.user-info_left {
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 20px;

    &--photo {
        img {
            width: 80px;
            height: 80px;
            border-radius: 15px;
            cursor: pointer;
        }
    }

    &--name {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;

        p {
            color: #fff;
            font-weight: bold;
        }

        .settings button {
            color: #848E9C;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                color: #efecef;
            }
        }
    }
}

.user-info_right {
    display: flex;

    span {
        color: #848E9C;
    }

    p {
        color: #efecef;
        font-size: 14px;
    }
}

.user-border {
    height: 60px;
    right: -20px;
    color: #2B3139;
    border-left: 1px solid;
}

.user-info_coins {
    padding: 24px;
    border: 0.5px #2B3139 solid;
    border-radius: 15px;
    width: 1000px;
    margin: 0 auto;
    margin-top: 50px;

    &--header {
        display: flex;
        justify-content: space-between;

        &-right {
            display: flex;
            gap: 20px;
        }

        &-btn {
            background: #494e55;
            color: #efecef;
            border-radius: 10px;
            transition: 0.5s;

            &:hover {
                background: #676f7a;
            }
        }

        &-left {
            span {
                color: #efecef;
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
            }
        }
    }

    &--balance {
        display: flex;
        align-items: baseline;
        gap: 10px;

        &-currency {
            display: flex;
            gap: 8px;
            color: #efecef;
            font-size: 14px;
            margin-top: 10px;
        }
    }

    &_sum {
        font-size: 32px;
        color: #efecef;
        font-family: Rajdhani;
        line-height: 40px;
        font-weight: 600;
    }

    &--namecrypto {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        transition: 0.5s;
        position: relative;

        &:hover i {
            color: #efecef;
        }

        p {
            color: #efecef;
            font-size: 14px;
        }

        i {
            color: #848E9C;
            font-size: 12px;
            transition: 0.3s;

        }

        &-drop {
            ul {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: absolute;
                top: 15px;
                left: 13px;
                background: #070735;
                width: 80px;
                border-radius: 10px;
                padding: 10px;
                box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
                z-index: 50;
                cursor: default;
            }


            li {
                // padding: 5px 0 0 10px;
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

}
</style>