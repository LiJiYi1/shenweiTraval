<template>
<div>
         <el-card class="search">
         <!-- 标题 -->
         <TitleComponent></TitleComponent>
         <!-- 城市地点 -->
         <PositionSelect style="margin-top:10px;"></PositionSelect>
         <!-- 用车日期 -->
         <DateComponent @getTime="getTime"></DateComponent>
         <!-- 只看站内取还 -->
         <div>
            <el-checkbox fill="#229eff" v-model="checked1" label="只看站内取还" size="large" />
         </div>
             <el-card class="poetry" @click="scene">
        <div class="right">
        <div class="r-t"> 
            <h1 style="font-size:80px">{{time1}}</h1>
            <div style="border: 6px solid white;padding:10px;width:80px;font-size:20px">{{time}}</div>
        </div>
        <div class="r-b"> 
            <div>墙角数枝梅,凌寒独自开</div>
            <div style="font-size: 12px;"><el-icon><Location /></el-icon>中国.武汉.东湖梅园</div>
         </div>
         <div class="cover"></div>
        </div>
      
             </el-card>
         <!-- 查询按钮 -->
         <el-button @click="search" :color="color" style="width: 200px;height:60px;margin-left:225px;border-radius:20px">查询</el-button>
      </el-card>
    <TicketRecommon></TicketRecommon>
    <BottomComponent></BottomComponent>
 </div>
   
</template>

<script setup lang="ts">
import BottomComponent from '@/components/bottomComponent.vue';
import moment from 'moment';
import { onMounted,onBeforeUnmount,ref } from 'vue';
import TicketRecommon from '@/components/ticketRecommon.vue';
import { useColorStore } from '@/store/modules/color';
import { storeToRefs } from 'pinia';
import DateComponent from '@/components/RentCar/dateComponent.vue';
import PositionSelect from '@/components/RentCar/positionSelect.vue';
import TitleComponent from '@/components/RentCar/titleComponent.vue';
import { ElMessage } from 'element-plus';
//获得一个响应式的颜色
let {color}=storeToRefs(useColorStore())
//当前时间
let time=ref(moment().format("YYYY.MM"))
let time1=ref(moment().format("DD"))
let timer=ref()
//只看站内取还
let checked1=ref('')
//取车城市地点,还车城市地点,异地还车,取车还车时间
let pos=ref('1')
let pos1=ref('1')
let pos2=ref('1')
let pos3=ref('1')
let isDiff=ref('1')
let Time=ref()
let Time1=ref()
const getTime=(time:string[])=>{
Time.value=time[0]
Time1.value=time[1]
}
onMounted(()=>{
timer.value=setInterval(()=>{
    time.value=moment().format("YYYY.MM")
    time1.value=moment().format("DD")
},200)
})
const search=()=>{
    if(pos.value&&pos1.value&&pos2.value&&pos3.value&&isDiff&&Time.value&&Time1.value){  
    const start=new Date(Time1.value)
    let year=start.getFullYear()
    let month=start.getMonth()+1
    let date=start.getDate()
    let startTime=`${year}-${month}-${date}`
    window.open(`https://booking.1hai.cn/order/firststep?arg=UlCezvxeY6LXto1r9n4fyRDP9g0waJjsnk4kjwoHNfiUTo5RfPjA4iyoukJi1k7KhOCUuiDqM2JfGhTcESL0tJeBBgqk/coJBFO7OMM$EITzMvv$WGf6dXwuJGJi0IBBnEHBWL/nkiS5E0Q$HJzd2uFV0rsoS8ucTlOKOuRWQ0lh$Gd3SeS5CzqjLig6ivrHJFrZgcQ2UirRFuFsktu9tJbcreMXdLPPVkrQn$JiycSu7moGC9OTa1Jm5g1ndz1sArR3JPo34u7gunKsUAx6Ei7hcLbx0x9REMZ0n0gMZe9zbfRBkK8SSdKTz54f90k1leLffwQOprCxeSh$haYS/Q**`)
   }
else{
     ElMessage({
    message: '缺少必填表单数据!',
    type: 'warning',
  })
}
}
const scene=()=>{
    window.open('https://travelsearch.fliggy.com/index.htm?spm=181.11358650.beautiful.d0.32cb223e0te9xc&searchType=product&keyword=东湖梅园')
}
onBeforeUnmount(()=>{
clearInterval(timer.value)
})
  
</script>

<style lang="less" scoped>
.search{
    width: 60%;
    min-width: 700px;
    overflow: visible;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    position: relative;
    .top{
        display: flex;
        justify-content: space-between;
    }
    .bt{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .poetry{
    user-select: none;
    margin-left: 20px;
    position: absolute;
    left:100%;
    top: 0px;
    min-width: 450px;
    width: 64%;
    height: 100%;
    background: url('@/assets/rentCar/image.png') no-repeat;
    background-position-y: -280px;
    background-size:cover;
    border-radius: 18px;
    .right{
        color: white;
        margin-left:300px;
        .r-t{
             position: absolute;
            top: 40px;
            right: 80px;
            z-index: 2;
            color: rgb(255, 255, 255);
        }
        .r-b{
             position: absolute;
             bottom: 20px;
             right: 60px;
              z-index: 2;
            margin-top: 65px;
            line-height: 25px;
        }
        .cover{     
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    width: 298px;
    height: 100%;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(270deg, rgba(0, 0, 0, .8), transparent 100%);
        }
    }
}
}


.posSearch{
    position: absolute;
    left: 40px;
    top: 140px;
    width: 450px;
    z-index: 3;
    span{
        display: block;
        float: left;
       width: 50px;
       margin-right: 45px;
       line-height: 40px;
       cursor: pointer;
    }
}
.keySearch{
    position: absolute;
    left: 300px;
    top: 140px;
    width: 450px;
    z-index: 3;
    span{
        display: block;
        float: left;
       width: 80px;
       margin-right: 45px;
       line-height: 40px;
       cursor: pointer;
    }
}
</style>