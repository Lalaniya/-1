<template>
  <div class="login">
    <div class="title">
        <router-link custom to="/login/sign_up" v-slot="{navigate,isActive}">
            <p @click="navigate" :class="{red:isActive}">登录</p>
        </router-link>
        <router-link custom to="/login/sign_in" v-slot="{navigate,isActive}">
            <p @click="navigate" :class="{red:isActive}">注册</p>
        </router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.login{
    width: 600px;
    height: 500px;
    margin: 50px auto;
    box-shadow: 0 0 10px #e6e6e6;
    .title{
        display: flex;
        width: 200px;
        font-size: 25px;
        font-weight: 600;
        margin:0px auto;
        padding-top: 50px;
        justify-content: space-between;
        .red{
            color: rgb(94, 216, 73);
        }
    }
}
</style>