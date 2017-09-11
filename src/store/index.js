import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        results: []
    },
    getters: {
        results(state) {
            return state.results.map(item => {
                item.url = 'https://en.wikipedia.org/wiki/' + item.title
                return item
            })
        }
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        }
    },
    actions: {
        search({ commit }, query) {
            const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + query

            jsonp(url, (error, response) => {
                if (error) {
                    throw error
                }
                const results = response.query.search

                commit('set', { type: 'results', items: results })
            })
        }
    }
})

export default store