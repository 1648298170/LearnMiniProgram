<template>
    <div>
        <nut-button @click="getUsers()">获取用户列表</nut-button>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {getUserList} from '../../api/user';



const getUsers= ()=>{
    let list = getUserList({});
    console.log("list>>",list)
}

onMounted(()=>{

})

</script>
