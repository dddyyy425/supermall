import { request } from "./request"

//getHomeMultidata函数的返回值是request()函数的返回值，即Promise对象
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}