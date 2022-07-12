<template>
  <div class="car">
    <div
      class="show"
      v-show="list.length===0"
    >
      <router-link
        to="/home"
        custom
        v-slot="{navigate}"
      >
        <h1 @click="navigate">还没有商品去添加吧！</h1>
      </router-link>
    </div>
    <table class="carlist">
      <thead>
        <tr>
          <th>选择</th>
          <th>商品名称</th>
          <th>商品价格</th>
          <th>照片</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in list"
          :key="item.Id"
        >
          <td><input
              type="checkbox"
              v-model="checkbox"
              :value="item"
            ></td>
          <td>{{item.title}}</td>
          <td>{{item.priceStr}}</td>
          <td><img
              :src="item.imageUrl"
              alt=""
            ></td>
          <td>
            <el-button
              type="primary"
              @click="tianjia(item.Id)"
            >+</el-button>
            <input
              type="number"
              :value="item.count"
              class="num"
            >
            <el-button
              type="success"
              :disabled="item.count <= 1 ? true : false"
              @click="jianshao(item.Id)"
            >-</el-button>
          </td>
          <td>
            <el-button
              type="success"
              @click="del(item.Id)"
            >
              <el-icon>
                <Delete />
              </el-icon>
            </el-button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th
            class="che"
            colspan="2"
          ><input
              type="checkbox"
              v-model="bool"
              @change="cheboxz"
            >全选</th>
          <th colspan="3">合计：<span class="pri">{{price}}</span></th>
          <th class="jie">
            <el-button type="danger">去结算</el-button>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { GetCarList, Getjianshao, Getjiajia , Getdel } from '@/util'
import { useStore } from 'vuex'
import { computed, onBeforeMount, ref, watch } from 'vue'
const store = useStore()
let list = ref([])
let checkbox = ref([])
let bool = ref(false)
onBeforeMount(() => {
  let token = store.state.home.token
  let result = GetCarList(token)
  result.then(res => {
    if (res.status === 200) {
      list.value = res.data
    }
  })
})
// 全选
watch(checkbox, () => {
  if (checkbox.value.length === list.value.length) {
    bool.value = true
  } else {
    bool.value = false
  }
},{
  deep:true
})
const cheboxz = () => {
  if (bool.value) {
    checkbox.value = list.value
  } else {
    checkbox.value = []
  }
}
watch(bool,() => {
  if (bool.value) {
    checkbox.value = list.value
  }
})
watch(list,()=>{
  if (bool.value) {
    checkbox.value = list.value
  }
})
// 计算价格
const price = computed(() => {
  let num = 0
  checkbox.value.forEach(item => {
    num += item.count * item.priceStr
  })
  return num
})
let token = localStorage.getItem('token')
// 添加
const tianjia = (id) => {
  let result = Getjiajia(id, token)
  result.then(res => {
    if (res.data.code === 1) {
      let result = GetCarList(token)
      result.then(res => {
        if (res.status === 200) {
          list.value = res.data
        }
      })
    }
  })
}
// 减少
const jianshao = (id) => {
  let result = Getjianshao(id, token)
  result.then(res => {
    if (res.data.code === 1) {
      let result = GetCarList(token)
      result.then(res => {
        if (res.status === 200) {
          list.value = res.data
        }
      })

    }
  })
}
// 删除
const del = (id) => {
  let result = Getdel(id, token)
  result.then(res => {
    if (res.data.code === 1) {
      let result = GetCarList(token)
      result.then(res => {
        if (res.status === 200) {
          list.value = res.data
        }
      })

    }
  })
}
</script>

<style lang="scss" scoped>
.car {
  width: 1080px;
  margin: 50px auto;
  .show {
    width: 1080px;
    height: 500px;
    text-align: center;
    line-height: 500px;
    cursor: pointer;
  }
  .carlist {
    width: 1080px;
    background-color: #95d475;
    text-align: center;
    td {
      padding: 15px;
    }
    img {
      width: 45px;
    }
    .num {
      width: 50px;
      height: 30px;
      margin: 0 5px;
      text-align: center;
      font-size: 18px;
    }
  }
  table,
  th,
  td {
    border-collapse: collapse;
    border: 1px solid #afdd98;
  }
  .che {
    padding: 10px;
  }
  .jie {
    width: 130px;
  }
  .pri {
    color: #409eff;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>