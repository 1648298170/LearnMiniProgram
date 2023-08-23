import Taro from "@tarojs/taro";
import getBaseUrl from "./baseUrl";
import interceptors from "./interceptors";


// 添加拦截器
interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

const request =async (params: any)=> {
    let { url, data, method, headers } = params;
    let baseUrl = getBaseUrl();
    let contentType = 'application/json;charset=UTF-8';
    contentType = headers?.contentType || contentType;
    const option = {
        url:baseUrl + url,//请求地址
        data:JSON.stringify(data),  //传参
        method:method, //请求方式
        // timeout:50000,//超时时间
        header:{//请求头
            'Cookie':Taro.getStorageSync('Cookies'),
            'conten-type':contentType,
            'Authorization':'Bearer '+Taro.getStorageSync('Authorization')
        }
    };

    return Taro.request(option);
}

export default request;