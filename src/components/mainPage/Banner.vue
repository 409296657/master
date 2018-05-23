<template lang="html">
  <div class="Banner">
    <el-carousel trigger="click" height="360px">
      <el-carousel-item v-for="item in items" :key="item.id" >
        <div class="img">
          <img :src="item.src">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>


</template>

<script>
export default {
  name:'Banner',
  data(){
    return{
      items:[
        {src:'./static/images/banne_1.jpg',id:1},
        {src:'./static/images/banne_2.jpg',id:2},
      ]
    }
  },
  methods:{

  }
}
</script>


<style>
.Banner{
  padding-top: 15px;
}
.Banner .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.Banner .el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.Banner .el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
.Banner .img img{
  width: 100%;
}

</style>
