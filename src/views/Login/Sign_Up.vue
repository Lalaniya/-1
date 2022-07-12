<template>
  <div class="inp">
    <div class="users">
      <input
        type="text"
        class="user"
        placeholder="手机号或邮箱"
        v-model="phone"
      >
      <p class="userz">账号</p>
      <input
        type="password"
        class="password"
        placeholder="密码"
        v-model="password"
      >
      <p class="pass">密码</p>
    </div>
    <p class="chele">
      <input
        type="checkbox"
        id="radio"
        v-model="bool"
      >
      <label for="radio">记住我</label>
    </p>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import router from '@/router'
import {SignUp} from '@/util'
import {ref} from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const Rphone = /^1[3|4|5|7|8]\d{9}$/
const Rpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/
let phone = ref('') 
let password = ref('')
let bool = ref(false)
const login = () => {
  if (!Rphone.test(phone.value)) {
    alert('手机号错误')
  } else if (!Rpassword.test(password.value)) {
    alert('密码格式错误')
  } else {
    let result = SignUp(phone.value,password.value)
    result.then(res => {
      if (res.status===200) {
          if (res.data.code===0) {
            alert('密码错误')
          } else {
            localStorage.setItem('token',res.data.token)
            store.commit('home/SETTOKEN',res.data.token)
            router.replace('/home')
          }

      }
    })
  }
}
</script>

<style lang="scss" scoped>
.inp {
  width: 360px;
  height: 300px;
  margin: 20px auto;
  background-color: rgba(116, 116, 116, 0.131);
  padding-top: 15px;
  position: relative;
  .users {
    width: 300px;
    height: 100px;
    border-radius: 10px;
    margin: 0px auto;
    overflow: hidden;
    input {
      width: 300px;
      height: 50px;
      box-sizing: border-box;
      padding-left: 50px;
      //   position: relative;
    }
    p {
      position: relative;
      z-index: 10px;
      top: -36px;
      left: 8px;
      display: inline-block;
    }
    .password {
      position: relative;
      top: -22px;
      border-top: 1px solid #c8c8c8;
    }
    .pass {
      top: -56px;
    }
  }
  .chele {
    margin-left: 30px;
    margin-top: 10px;
    input {
      margin-left: 10px;
      margin-right: 5px;
    }
  }
  button {
    width: 300px;
    height: 50px;
    border-radius: 25px;
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    margin-left: 30px;
    font-size: 18px;
    color: #ffffff;
    background-color: #3194d0;
    font-weight: 500;
  }
}
</style>