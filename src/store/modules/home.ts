import { HomeState } from '@/interface/storeIF'
import { getAllHcData } from '@/api/home'
import { Commit } from 'vuex';
const state: HomeState = {
    hName: '王一扬Home',
    hNum: 21,
    hAddress: '高新路21号'
}

export default {
    state,
    mutations: {
        SetNewName(state: HomeState, hName: string) {
            state.hName = hName
        }
    },
    actions: {
        async getAllHcDataActions({commit, state} : {commit: Commit, state: HomeState}, pId: string) {
            console.log('传入的参数是pId： ', pId)
            console.log(state.hAddress)
            console.log(state.hNum)
            const res = await getAllHcData()
            console.log(res)
        }
    }
}