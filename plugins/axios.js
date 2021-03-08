/*
 * @Author: your name
 * @Date: 2021-03-08 20:11:53
 * @LastEditTime: 2021-03-08 20:33:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /localProject/iviewShuyuan/plugins/axios.js.js
 */

//https://www.jianshu.com/p/83caaa542b23   配置
export default function ({store, redirect, req, router, app: { $axios }})  {
    // 数据访问前缀
    // $axios.defaults.baseURL = 'http://XXX/api';
    // request拦截器
    $axios.onRequest(config => {
    });
    // response拦截器，数据返回后，可以先在这里进行一个简单的判断
    $axios.interceptors.response.use(
        response => {
            return response
        },
        error => {
        })
}