import { createPinia, defineStore } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist-uni'
import state from './state'
import getters from './getters'
import actions from './actions'
const store = createPinia()
store.use(piniaPluginPersist)
const useStore = defineStore('useStore', {
    state,
    getters,
    actions,
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'my_user',
                storage: localStorage,
            },
        ],
    },
})
export { store, useStore }
