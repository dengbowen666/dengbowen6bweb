<template>

     <el-scrollbar>
<div  style="display:flex;margin-left:400px;width: 100%;
        overflow-x;      /* 允许水平滚动 */"
>
    <el-space class="game_div" wrap :size="50" style="height:500px">
  <div 
  v-for="game in games" 
  :key="game"
  >
    <transition 
    appear :enter-active-class="game.aniMate"
    >
    <el-card  style="max-width: 200px;background-color:rgba(39, 39, 88, 0.633);" >
        <template #header><span style="color:rgb(118, 199, 231);
         font-family:'阿里妈妈东方大楷';">{{game.rank}}——{{ game.name }}</span></template>
        
        <img
          :src=game.imag
          style="width: 100%"
        />
    <el-tag 
    v-for="ta in game.tags" 
    :key="ta"
    style=
    "background-color:rgb(194, 194, 236);
    color:rgb(19, 14, 14);

    "
    >{{ ta }}</el-tag>
      
      </el-card>
    </transition>
   </div>
   </el-space>

 </div>
    </el-scrollbar>

</template>
<script setup>

import { computed, ref } from 'vue';
const games = ref([
    {
        name: '只狼：影逝二度',
        imag: 'src/assets/img/游戏/Sekiro_art_(Re-uploaded).jpg',
        tags:['类魂','动作','手残必备'],
        rank: "壹",
        aniMate: "animate__animated animate__bounceInLeft animate__delay"
    },
    {

        name: '艾尔登法环',
        imag: 'src/assets/img/游戏/Elden_Ring.png',
        tags: ['魂', 'rpg', '开放世界'],
        rank: "二",
        aniMate: "animate__animated animate__bounceInLeft animate__delay"
    },
    {
        name: '原神',
        imag: 'src/assets/img/游戏/原神.jpg',
        tags: ['二次元', '年度最佳', '3a'],
rank: "三"

    },
      {
        name: '明日方舟',
        imag: 'src/assets/img/游戏/Sekiro_art_(Re-uploaded).jpg',
        tags: ['二次元', '塔防', '足控']

    },
    {

        name: '只狼：影逝二度',
        imag: 'src/assets/img/游戏/Sekiro_art_(Re-uploaded).jpg',
        tags: ['类魂', '动作', '手残必备']

    },
    {
        name: '只狼：影逝二度',
        imag: 'src/assets/img/游戏/Sekiro_art_(Re-uploaded).jpg',
        tags: ['类魂', '动作', '手残必备']


    }






])




</script>
<style scoped>
.game_div :hover{
 transform:scale(1.1);
transition: transform 0.6s ease;
}
.title{
color:rgb(71, 121, 162);
font-family:'阿里妈妈东方大楷';
}
:root {
  --animate-delay: 0.5s;
}
</style>