<template>

     <el-scrollbar>
<div  style="display:flex;margin-left:200px;width: 100%;
        overflow-x;      /* 允许水平滚动 */"
>
    <el-space class="game_div" wrap :size="50" style="height:500px">
  <div 
  v-for="game in games" 
  :key="game"
  >
    <transition 
    appear 
    :enter-active-class="game.aniMate"
    :style="game.delay"
    >
        <!--  这样传入不同的delay*/--> 
    <el-card  style="max-width: 200px;background-color:rgba(39, 39, 88, 0.633);border: 0px" >
        <template #header><span style="color:rgb(118, 199, 231);
         font-family:'阿里妈妈东方大楷';">{{game.rank}} {{ game.name }}</span></template>
        
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
        imag: './public/img/game/Sekiro_art_(Re-uploaded).jpg',
        tags:['类魂','动作','手残必备'],
        rank: "壹",
    aniMate: "animate__animated animate__bounceInLeft",
        delay:"animation-delay:0s"
    },
    {

        name: '艾尔登法环',
        imag: './public/img/game/Elden_Ring.png',
        tags: ['魂', 'rpg', '开放世界'],
        rank: "二",
      aniMate: "animate__animated animate__bounceInLeft", 
        delay: "animation-delay:0.2s"
    },
    {
        name: '原神',
        imag: './public/img/game/genshit.jpg',
        tags: ['二次元', '年度最佳', '3a'],
      rank: "三",
    aniMate: "animate__animated animate__bounceInLeft",
    delay: "animation-delay:0.5s"

    },
      {
        name: '明日方舟',
        imag: '',
        tags: ['二次元', '塔防', '足控'],
        aniMate: "animate__animated animate__bounceInLeft",
    delay: "animation-delay:0.7s"

    },
    {

        name: '只狼：影逝二度',
        imag: '',
      tags: ['类魂', '动作', '手残必备'],
        aniMate: "animate__animated animate__bounceInLeft",
    delay: "animation-delay:0.9s"

    },
    {
        name: '只狼：影逝二度',
        imag: 'src/assets/img/游戏/Sekiro_art_(Re-uploaded).jpg',
      tags: ['类魂', '动作', '手残必备'],
        aniMate: "animate__animated animate__bounceInLeft",
    delay: "animation-delay:1.1s"


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

</style>