
import { MyState } from '@/interface/storeIF'
const getters = {
    //Home
    hName: (state: MyState) => state.home.hName,
    hAddress: (state: MyState) => state.home.hAddress,
    //权限相关 user
    roles: (state: MyState) => state.user.roles,
    token: (state: MyState) => state.user.token,
    // permission
    addRouters: (state: MyState) => state.permission.addRouters,
    // keepAlive
    keepAliveComponent: (state: MyState) => state.keepAlive.keepAliveComponent
};

export default getters;