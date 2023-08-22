import Taro from "@tarojs/taro";
import { HTTP_STATUS } from "./codeConfig";
import { pageToLogin } from "./utils";

const customInterceptor = (chain: any) => {
    const requestParams = chain.requestParams;
    Taro.showLoading({ title: '加载中' });
    Taro.hideLoading();
    return chain.proceed(requestParams).then(res => {
        // if(res.statusCode === HTTP_STATUS.NOT_FOUND){
        //     return Promise.reject({desc:'请求资源不存在'});
        // }else if(res.statusCode === HTTP_STATUS.BAD_GATEWAY){
        //     return Promise.reject({desc:'服务端出现了问题'});
        // }else if(res.statusCode === HTTP_STATUS.FORBIDDEN){
        //     Taro.setStorageSync("Authorization","");
        //     // TODO根据自身业务修改
        //     pageToLogin();
        //     return Promise.reject({desc:'没有权限访问'});
        // }else if(res.statusCode === HTTP_STATUS.AUTHENTICATE){
        //     Taro.setStorageSync("Authorization","");
        //     return Promise.reject({desc:'需要鉴权'});
        // }else if(res.statusCode === HTTP_STATUS.SERVER_ERROR){
        //     return Promise.reject({desc:'服务器错误'});
        // }else if(res.statusCode === HTTP_STATUS.SUCCESS){
        //     if(res.data.code ===400){
        //         return res.data;
        //     }else if(res.data.code=='-100'){
        //         //非法登录
        //         pageToLogin();
        //     }else{
        //         return Promise.reject(res.data);
        //     }
        //     return res.data;
        // }
        let { cookies, data } = res;
        if(data.data&&data.data.token){
            Taro.setStorageSync('token',data.data.token);
        }
        if (cookies) {
            Taro.setStorageSync('Cookies', cookies[0])
        }
        return data;
    }).catch(error => {
        Taro.hideLoading();
        return Promise.reject(error);
    })
}

// Taro 提供了两个内置的拦截器
// logInterceptor - 用于打印请求的相关信息
//timeoutInterceptor - 在请求超时时抛出错误
//const interceptors = [customInterceptor,Taro.interceptors.logInterceptor,Taro.interceptors.timeoutInterceptor]
const interceptors = [customInterceptor];

export default interceptors;