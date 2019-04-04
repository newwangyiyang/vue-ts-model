import { RouteConfig } from 'vue-router';

/**
 *定义HomeState的类型
 *
 * @export
 * @interface HomeState
 */
export interface HomeState {
    hName: string
    hNum: number
    hAddress: string
}
/**
 *定义UserState的类型
 *
 * @export
 * @interface UserState
 */
export interface UserState {
    name: string
    roles: string[]
    token: string
}
/**
 *定义PermissionState类型
 *
 * @export
 * @interface PermissionState
 */
export interface PermissionState {
    routers: RouteConfig[] // 所有的路由信息
    addRouters: RouteConfig[] // 新增的路由信息
}
/**
 *vuex中State的所有参数类型
 *
 * @export
 * @interface MyState
 */
export interface MyState {
    home: HomeState
    user: UserState
    permission: PermissionState
}