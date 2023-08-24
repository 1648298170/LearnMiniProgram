import request from "../network/request";
import Taro from "@tarojs/taro";

export const getCaptchaCode =async ()=>{
    let cookie = Taro.getStorageSync('Cookies')
    return await request({
        url:'/user/code',
        method:'get',
        data:{
            _:Math.random()
        },
        headers:{
            Cookie:cookie,
            contentType:'image/svg+xml;charset=UTF-8'
        }
    })
}

export const verifyCaptchaCode =async (params:any)=>{
    return await request({
        url:'/user/login',
        method:'post',
        data:params,
    })
}

export const getUserList =async (params:any)=>{
    return await request({
        url:'/user/page/list',
        method:'get',
        data:params,
    })
}
export const getTokenData =async ()=>{
    return await request({
        url:'/user/get/token',
        method:'get',
        data:{
            _:Date.now(),
        },
    })
}
export const logout =async ()=>{
    return await request({
        url:'/user/logout',
        method:'post',
        data:{
            _:Date.now(),
        },
    })
}

export default {
    getCaptchaCode,
    verifyCaptchaCode,
    getUserList,
    getTokenData,
    logout
};