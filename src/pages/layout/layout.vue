<template>
    <div>
        <nut-button @click="getUsers()">获取用户列表</nut-button>
        <nut-button type="danger" @click="Logout()">退出登录</nut-button>
    </div>
</template>

<script setup lang="ts">
import { onMounted,reactive } from 'vue';
import { getUserList, logout } from '../../api/user';
import Taro from '@tarojs/taro';

let data  = reactive<any>({})

const getUsers = async () => {
    data = await getUserList({});
    console.log("list>>", data.data)
}

const Logout = async ()=>{
    try{
        let res = await logout();
        console.log(res);
        Taro.clearStorageSync();
        Taro.reLaunch({
            url:'/pages/login/login'
        })
    }catch(e){
        Taro.showToast(e)
    }
}

onMounted(() => {
    getUsers();

})

</script>
