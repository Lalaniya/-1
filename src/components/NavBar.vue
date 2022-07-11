<template>
  <header>
    <nav>
        <div class="nav-top">
            <img src="http://static2.biyao.com/pc/common/img/master/logo.png" alt="">
            <div>
                <p class="sea">
                    <input type="text" id="search"
                     v-model="value"
                     @keyup.enter="goSearch"
                     placeholder="请输入想要搜索的商品">
                    <label for="search" @click="goSearch"><el-icon><Search /></el-icon></label>
                </p>
                <p class="re">
                    <template v-for="(item,i) in resou" :key="item.Id">
                       <span v-if="i<10">{{item.type_one}}</span>
                    </template>
                </p>
            </div>
        </div>
        <DaoHang></DaoHang>
    </nav>
  </header>
</template>

<script setup>
import DaoHang from './NavBar/DaoHang'
import { useStore } from 'vuex'
import { computed, onBeforeMount, ref } from 'vue'
const store = useStore()
// 热搜获取
onBeforeMount( ()=> {
    store.dispatch('home/getSearchList','防护')
})
const resou = computed( ()=> {
    let x = Math.floor(Math.random()*50+10)
    if (store.state.home.SearchRe.length === 0) {
        return []
    } else {
        return store.state.home.SearchRe
    }
    
    
})
// 搜索获取
let value = ref('')
const goSearch = () => {
    console.log(value.value);
}
</script>

<style lang="scss" scoped>
header{
    height: 145px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    box-shadow: 0 0 10px #efefef;
    nav{
        width: 1080px;
        height: 145px;
        margin: 0 auto;
        .nav-top{
            height: 100px;
            width: 1080px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 129px;
            }
            .sea{
                color: #808080;
                border: 1px solid #cccccc;
                width: 460px;
                height: 42px;
                border-radius: 5px;
                overflow: hidden;
                white-space: nowrap;
                margin-bottom: 5px;
                input{
                    width: 415px;
                    height: 42px;
                    box-sizing: border-box;
                    padding: 8px 10px;
                }
                label{
                    width: 40px;
                    height:42px;
                    text-align: center;
                    border-left: 1px solid #cccccc;
                    vertical-align: middle;
                    line-height: 45px;
                    font-size: 25px;
                    font-weight: 500;
                    display: inline-block;
                }
            }
            .re{
                margin-top: 5px;
                width: 450px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>