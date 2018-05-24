<template lang="html">
  <div class="articles">
    <el-container>
      <el-header height="80px"><Head isActive="3"></Head></el-header>
      <el-main>
        <Banner></Banner>
        <Articles></Articles>
      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
import Banner from '@/components/mainpage/Banner'
import Articles from '@/components/article/Articles'
export default {
  name:'articles',
  components:{
    Head,
    Banner,
    Articles
  },
  data(){
    return{

    }
  },
  methods:{
    shopCart(){
			let that=this;
			that.$ajax({
				method:"get",
				url:"http://vue.tyqprivateweb.cn:35002/vue/article.php",
			})
		},

  }
}
</script>


<style>
.articles .el-container{
    width: 1000px;
    margin: 0 auto;
}
.articles .el-header{
  padding: 0;
}
.articles .el-main{
  padding: 0;
}
.articles .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.articles .el-tabs__item.is-active{
  color: red;
}
.articles .el-tabs__active-bar{
  display: none;
}
.articles #tab-first{
  margin-right: 30px;
}
</style>
