<template>
    <nav>
        <h1>Kávový domeček</h1>

        <div class="modal">
            <Cart :items="getCartItems" @clicked="addToCart(item)"/>
        </div>
    </nav>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Top",
        computed: {
            ...mapGetters(['getCartItems']),
        },
        methods: {
            ...mapActions(['addToCart']),

            onClickButton (event) {
                this.$emit('clicked', event)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    nav {
        background-color: $primary-color;
        height: 56px;

        h1 {
            margin-left: 56px;
            margin-top: 16px;
            position: absolute;
            float: left;
        }
    }

    .cart {
        float: right;
        margin-right: 56px;
        position: relative;
    }

    .modal {
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

</style>