import { KeepAliveStoreIF } from '@/interface/storeIF';


let state: KeepAliveStoreIF = {
    keepAliveComponent: []
}

export default {
    state,
    mutations: {
        UPDATE_KEEPALIVECOMPONENTS(state: KeepAliveStoreIF, {k, b}: {k: string, b: boolean}) {
            b && !state.keepAliveComponent.includes(k) && state.keepAliveComponent.push(k)
            const index = state.keepAliveComponent.indexOf(k)
            !b && index !== -1 && state.keepAliveComponent.splice(index, 1)
        }
    }
}