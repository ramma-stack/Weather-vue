import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            localStorageValue: localStorage.getItem('temperatureUnit') || 'C',
        }
    },
    mutations: {
        updateLocalStorageValue(state) {
            state.localStorageValue = state.localStorageValue === 'C' ? 'F' : 'C';
            localStorage.setItem('temperatureUnit', state.localStorageValue);
        },
    }
})

export default store;