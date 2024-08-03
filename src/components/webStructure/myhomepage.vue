<template>
  <KinesisContainer 
  
  style="display:flex;
flex-direction:column;"
>
      <KinesisElement  :strength="30" style="margin:auto;font-family:阿里妈妈东方大楷 Regular;font-size:40px;">欢迎来到为拉妮变成狼人模样的个人博客</KinesisElement>

      <el-divider style="margin:auto;width: 600px;margin-top: 20px;margin-bottom: 20px;"><el-icon style="background-color: aquamarine;"><Star /></el-icon></el-divider>
      <KinesisElement  style="margin:auto;font-family:阿里妈妈东方大楷 Regular;font-size:20px;color: rgb(137, 163, 154);">黑发不知勤学早，</KinesisElement>
      <KinesisElement  style="margin:auto;font-family:阿里妈妈东方大楷 Regular;font-size:30px;color: rgb(189, 212, 204);">白首方悔读书迟！</KinesisElement>
    </KinesisContainer>

  <div  style="margin-top: 160px;"> <router-link to="/myhomepage" style="margin: auto;">
    日历
  </router-link></div>


  <el-carousel :interval="4000" type="card" height="340px" style="margin-left:145px ;margin-right: 145px;">
    <el-carousel-item v-for="item in carouseData" :key="item">
          <img :src="item.url" alt="" height="340px"/>
        </el-carousel-item>
  </el-carousel>

</template>

<script setup>
import {ref} from 'vue'
const carouseData = ref([
{url:'src/assets/img/轮播图/firewoman.jpg'},
{ url: 'src/assets/img/轮播图/R.jpg' },
{ url: 'src/assets/img/轮播图/tree.jpg' },
])

</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


.img {
    width: 100%; /* 图片宽度填满容器宽度 */
    height: 100%; /* 图片高度填满容器高度 */
    object-fit: contain ;
     max-width: 100%;
    max-height: 100%;
}

</style>
