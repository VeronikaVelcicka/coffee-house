import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    items: [],
    added: []
};
const getters = {
    getAllItems: state => state.items,
    getCoffeeItems: state => state.items.filter(item => item.category === "Coffee"),
    getCakeItems: state => state.items.filter(item => item.category === "Cake"),
    getCartItems: state => {
        return state.added.map(({ id, quantity }) => {
            const product = state.items.find(p => p.id === id)
            return {
                id: id,
                name: product.name,
                quantity
            }
        })
    }
};
const actions = {
    //Fetch ALL
    async fetchItems({commit}) {
        const response = await axios
            .get('https://private-dc766-coffeehouse.apiary-mock.com/menu')
            .catch(e => alert(e.message));
        commit('SET_Items', response.data.items);
    },

    addToCart({ commit }, item){
        commit("ADD_Item", {id: item.id})
    },

    removeItem({ commit }, index) {
        commit("REMOVE_Item", index);
    },

    updateCart({commit}, {item, quantity, isAdd}) {
        commit('UPDATE_CART', {item, quantity, isAdd});
    }
};

const mutations = {
    SET_Items: (state, item) => (state.items = item),

    ADD_Item(state, { id }) {
        const record = state.added.find(p => p.id === id)

        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },

    REMOVE_Item(state, index) {
        state.added.splice(index, 1);
    },

    'UPDATE_CART' (state, {item, quantity, isAdd}) {
        const record = state.added.find(element => element.id === item.id);
        if (record) {
            if (isAdd) {
                record.quantity += quantity;
            } else {
                record.quantity = quantity;
            }
        } else {
            state.added.push({
                ...item,
                quantity
            });
        }
    },
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
