//因为可能创建多个实例(每个函数创建一个实例)，所以就不用export default了
//别人只要调用request函数，就可以发送网络请求

import axios from 'axios'

//axios拦截器
export function request(config) {
    //1.创建axios的实例(不要创建全局，要创建实例)
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2.axios的拦截器  axios.interceptors是拦截全局
    //2.1 请求拦截的作用
    instance.interceptors.request.use(config => {  //config可以随便命名,也可以叫aaa
        //拦截掉了config，得原封不动返回去
        return config
    }, err => {
        //console.log(err);
    })

    //2.2 响应拦截的作用
    //第一个传入的函数是，成功后执行的，且res是响应的数据，第二个是响应失败的
    instance.interceptors.response.use(res => {
        //拦截响应的数据后得返回
        return res.data  //可以直接返回res.data，一般真正要用的是res.data里的数据,这样就没有其他乱七八糟的东西了
    }, err => {
        console.log(err);
    })

    //发送真正的网络请求
    return instance(config)
}
