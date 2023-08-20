<template>
  <div class="login">
    <div class="h_title">
      <div class="title">
        <span>易瑞生物设备管理平台</span>
        <span style="font-size: 28px;">欢迎使用，请登录</span>
      </div>
    </div>
    <div class="b_content">

      <div class="content">
        <div class="label_area">
          <label>账号</label>
          <input class="label_input" v-model='userInfo.userName' placeholder="请输入账号" />
        </div>
        <div class="label_area">
          <label>密码</label>
          <input class="label_input" v-model='userInfo.password' placeholder="请输入密码" />
        </div>
        <div class="label_area">
          <label>验证码</label>
          <div class="check">
            <input class="check_input" v-model='userInfo.code' placeholder="请输入验证码" />
            <img class="check_pic" @click="resetCode()" :src="codeUrl">
          </div>
        </div>
        <div class="login_">
          <button class="login_btn" @click="submit()">登录</button>
        </div>
      </div>

      <div class="footer">
        <p>jerry技术支持</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import './login.less'
import Taro from '@tarojs/taro';

const codeUrl = ref<string>('/api/user/code');
const resetCode = () => codeUrl.value = codeUrl.value + '?' + Math.random()


const userInfo = reactive({
  userName: '',
  password: '',
  code: ''
})

const submit = async () => {
  const res = await Taro.request({
    url: '/api/user/create',
    data: JSON.stringify(userInfo),
    header: {
      'content-type': 'application/json'
    },
  })

  console.log("res>>>", res)
}


</script>
