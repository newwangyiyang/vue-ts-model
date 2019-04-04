/**
 *定义前端获取图片参数接口
 *
 * @export
 * @interface WebFile
 */
export interface WebFileParams {
    file: File
    content: string
}
/**
 * 动态路由传递参数
 *
 * @export
 * @interface AsyncRouteParams
 */
export interface AsyncRouteParams {
    roles: string[]
}