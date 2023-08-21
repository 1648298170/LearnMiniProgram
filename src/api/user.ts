import request from "../network/request";

export const getCaptchaCode =async ()=>{
    
    return await request({
        url:'/user/code',
        method:'get',
        data:{
            _:Math.random()
        },
        headers:{
            contentType:'image/svg+xml;charset=UTF-8'
        }
    })
}

export const verifyCaptchaCode =async (params:any)=>{
    return await request({
        url:'/user/verifyCode',
        method:'post',
        data:params,
    })
}

export default {
    getCaptchaCode,
    verifyCaptchaCode
};