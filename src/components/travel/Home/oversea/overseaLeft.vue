<template>
    <div>
      <div class="bt">
      <div class="title"><p></p><span>出境旅游</span></div>
      <img src="@/assets/travel/oversea/lt.png" alt="" style="margin-top:20px">
      <img src="@/assets/travel/oversea/lb.png" alt="">
      </div>
      
    </div>
</template>

<script lang="ts" setup>
 
</script>

<style lang="less" scoped>
.bt{
  font-size: 30px;
    display: flex;
    flex-direction:column;
    width: 20%;
    min-width:225px;
    h2{margin-top: 20px;}
    p{
      width: 30px;
      height: 30px;
      background: url("@/assets/travel/Free/icon/icon2.png") no-repeat;
      background-size: contain;
      margin-right: 10px;
    }
    span{
      font-family:ZCOOL KuaiLe,cursive;
      color: #776EE6;
      display: inline-block;
    }
    .title{
      margin-top: 15px;
      display: flex;
    }
}
</style>