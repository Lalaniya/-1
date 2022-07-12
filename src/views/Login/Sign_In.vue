<template>
  <div class="signin">
    <!-- <label for="user">昵称</label><input
      v-model="name"
      type="text"
      id="user"
      placeholder="昵称"
    > -->
    <br>
    <label for="word">手机号</label><input
      v-model.number="phone"
      type="text"
      id="word"
      placeholder="手机号"
    >
    <br>
    <label for="pass">密码</label><input
      v-model="password"
      type="password"
      id="pass"
      placeholder="由数字字母组成长度在8-15"
    >
    <br>
    <button @click="subimt">注册</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {LoginUser } from '@/util'
import { useRouter } from 'vue-router'
// let name = ref('')
let phone = ref('')
let password = ref('')
const Rphone = /^1[3|4|5|7|8]\d{9}$/
const Rpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/
const router = useRouter()
const subimt = () => {
  if (!Rphone.test(phone.value)) {
    alert('手机号错误')
  } else if (!Rpassword.test(password.value)) {
    alert('密码格式错误')
  } else {
    let result = LoginUser(phone.value,password.value)
    result.then(res=>{
        console.log(res);
        if (res.status===200) {
            switch (res.data.code) {
                case 0:
                alert("用户已存在")
                    break;
                case 1:
                alert('成功')
                router.push('/login/sign_up')
                    break;
            }
        }
    })
  }
}


</script>

<style lang="scss" scoped>
.signin {
  width: 300px;
  margin: 30px auto;
  height: 300px;
  padding: 25px 30px;
  background-color: rgba(188, 188, 188, 0.405);
  input {
    width: 220px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding-left: 15px;
  }
  label {
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  button {
    width: 300px;
    height: 50px;
    border-radius: 25px;
    margin-top: 20px;
    background-color: #42c02e;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>