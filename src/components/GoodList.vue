<template>
  <ul class="box">
    <li class="images"><img
        :src="props.item.imageUrl"
        alt=""
      ></li>
    <li class="script">
      <p>￥{{props.item.priceStr}}</p>
      <div v-html="props.item.mack"></div>
    </li>
    <li class="title"><p>{{props.item.title}}</p><p class="tit">{{props.item.evaluate}}w+好评</p> </li>
  </ul>
</template>

<script setup>
const props = defineProps(["item"])

</script>


<style lang="scss" scoped>
.box {
  width: 530px;
  background-color: #fff;
  margin-bottom: 20px;
  cursor: pointer;
  .images {
    width: 530px;
    height: 272px;
    overflow: hidden;
    img {
      width: 530px;
    }
  }
  li{
    height: 50px;
  }
  .script {
    font-size: 16px;
    color: #f7a701;
    display: flex;
    align-items: center;
    margin-left: 15px;
    p {
      margin-right: 15px;
    }
  }
  .title {
    font-size: 14px;
    color: #4a4a4a;
    display: flex;
    width: 500px;
    justify-content: space-between;
    margin-left: 15px;
    .tit{
      font-size: 12px;
      color: #bbb;
    }
  }
  .sup {
    font-size: 12px;
    line-height: 18px;
    color: #bf9e6b;
    margin-top: 6px;
    margin-left: 15px;
  }
}
</style>