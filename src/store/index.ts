import { getTokenData } from "../api/user";
import { defineStore } from "pinia";


export const useStore = defineStore('stroe',{
    state:()=>{
        return {
            // 存储用户信息
            userInfo:{},
        }
    },
    actions:{
        /**
         * 获取token解析后的用户信息
         **/ 
        async getTokenInfo(){
            let {data} = await getTokenData();
            this.userInfo = data;
        }
    }
})