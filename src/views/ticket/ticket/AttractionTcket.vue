<template>
    <div>
        <div class="top">
        <TopLeft style="margin-right: 14px;"></TopLeft>
        <TopRight></TopRight>
        </div>
     <DomesticTick></DomesticTick>
     <Coorperation></Coorperation>
     <bottomComponent></bottomComponent>
    </div>
   
</template>

<script setup lang="ts">
import bottomComponent from '@/components/bottomComponent.vue';
import Coorperation from '@/components/ticket/coorperation.vue';
import DomesticTick from '@/components/ticket/DomesticTicket/DomesticTick.vue';
import TopLeft from '@/components/ticket/topLeft.vue';
import TopRight from '@/components/ticket/topRight.vue';


</script>

<style lang="less" scoped>
.top{
    display: flex;
}
</style>