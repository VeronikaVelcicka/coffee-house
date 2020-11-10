<template>
    <div>
        <Top :items="getCartItems" />

        <h4>– Káva</h4>
        <div class="row">
            <MenuItem v-for="item in getCoffeeItems" :key="item.id" :item="item" @clicked="addToCart(item)" />
        </div>

        <h4>– Dezerty</h4>
        <div class="row">
            <MenuItem v-for="item in getCakeItems" :key="item.id" :item="item" @clicked="addToCart(item)" />
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Menu",
        created() {
            this.fetchItems();
        },
        computed: {
            ...mapGetters(['getCoffeeItems', 'getCakeItems', 'getCartItems']),
        },
        methods: {
            ...mapActions(['fetchItems', 'addToCart']),
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .row {
        display: inline-flex;
        padding: 0 5px;
    }

    h4 {
        margin: 21px 8px 12px 8px;
    }
</style>