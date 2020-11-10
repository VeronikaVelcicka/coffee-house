<template>
    <div class="card">
        <img :src="item.image"/>
        <h2 id="name">{{ item.name }}</h2>
        <h3>{{ item.description }}</h3>
        <h2 id="price">{{ item.price }} Kč</h2>
        <button @click="onClickButton(item)">+</button>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            onClickButton (event) {
                this.$emit('clicked', event)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .card {
        width: 180px;
        height: 250px;
        box-shadow: 0 3px 7px $item-shadow-color;
        border-radius: 4px;
        margin-left: 17px;

        img {
            width: 180px;
            height: 120px;
        }

        button {
            width: 33px;
            height: 33px;
            font: bold 21px $primary-font;
            color: white;
            background-color: $btn-color;
            border-radius: 3px;
            border: none;
            float: right;
            margin: 2px 14px 13px 0;
            cursor: pointer;
        }

        #name {
            margin: 10px;
        }

        h3 {
            margin: 0 10px;
            height: 42px;
        }

        #price {
            float: left;
            margin: 8px 0 20px 10px;
        }

    }

</style>