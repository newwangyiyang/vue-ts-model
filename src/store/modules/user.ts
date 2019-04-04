import { UserState } from '@/interface/storeIF';
import { Commit } from 'vuex';

const state: UserState = {
    name: '',
    roles: [],
    token: ''
}

const user = {
    state,
    mutations: {
        SET_USER_MUTATIONS(state: UserState, res: UserState) {
            state.name = res.name;
            state.roles = res.roles;
        }
    },
    actions: {
        async getUserInfo({commit}: {commit: Commit}) {
            // const res = await getUserInfo(); // 此处应该是请求后台接口来获取数据
            // commit('initUserInfo', res);
            const res: UserState = {name: '王一扬', roles: ['user'], token: '32132131'}
            commit('SET_USER_MUTATIONS', res)
        }
    }
};

export default user;