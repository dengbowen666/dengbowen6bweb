<template>
  <KinesisContainer style="display:flex;
flex-direction:column;
">
      <KinesisElement :strength="30" style="margin:auto">欢迎来到邓博文的个人博客</KinesisElement>

      <el-divider style="margin:20px;"></el-divider>
      <KinesisElement  style="margin:auto">黑发不知勤学早，</KinesisElement>
      <KinesisElement  style="margin:auto">白首方悔读书迟！</KinesisElement>
    </KinesisContainer>

  <div style="margin-top: 200px;"></div>
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
{ url: 'src/assets/img/轮播图/golden.jpg' },
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
