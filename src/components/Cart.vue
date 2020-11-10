<template>
    <div class="cart">
        <div class="title">
            <h1>Vaša objednávka</h1>
        </div>
        <hr class="firstLine">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <h3>{{ item.quantity }}x {{ item.name }}</h3>
                <div class="rightAllign">
                    <button class="left" @click="increase(item)"><a>+</a></button>
                    <button class="right" @click="decrease(item, index)"><a>-</a></button>
                </div>
            </li>
        </ul>
        <hr class="secondLine">
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Cart",
        props: {
            items: {}
        },
        computed: {
            ...mapGetters(['getCartItems']),
        },
        methods: {
            ...mapActions(['addToCart', 'updateCart', 'removeItem']),

            increase(item) {
                this.$store.dispatch("updateCart", {
                    item: item,
                    quantity: item.quantity + 1,
                    isAdd: false
                });
            },

            decrease(item, index) {
                this.$store.dispatch("updateCart", {
                    item: item,
                    quantity: item.quantity - 1,
                    isAdd: false
                });
                if (item.quantity < 2) {
                    this.$store.dispatch("removeItem", index);
                }
            },

            onClickButton(event) {
                this.$emit('clicked', event)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .cart {
        width: 243px;
        min-height: 250px;
        box-shadow: 0 3px 11px $cart-shadow-color;
        background-color: white;

        .title {
            padding: 14px 0 15px 0;
            margin: 0;
        }

        h1 {
            color: $cart-name-color;
            text-align: center;
            padding: 0;
            margin: 0;
        }

        h3 {
            color: $cart-name-color;
            font-family: $description-font;
            font-size: 14px;
            font-weight: bold;
            display: inline;
        }

        a {
            color: $text-color;
            font-family: $number-font;
            font-size: 14px;
        }
    }

    button {
        width: 21px;
        height: 21px;
        border: 1px solid $text-color;
        background-color: white;
        cursor: pointer;
    }

    .left {
        border-radius: 3px 0 0 3px;
    }

    .right {
        border-radius: 0 3px 3px 0;
    }

    .rightAllign {
        float: right;
    }

    ul {
        list-style-type: none;
        margin: 32px 16px 10px 16px;
        padding: 0;
    }

    li {
        padding: 7px 0;
    }

    .firstLine {
        border-top: 1px solid $primary-color;
        margin: 0 16px;
    }

    .secondLine {
        margin: 32px 16px;
        border-top: 1px solid $line-color
    }

</style>