<template lang="html">
  	<div class="AllData">
		<el-collapse v-model="activeNames" accordion class="list">
		  <el-collapse-item :title="item.name" :name="index" v-for="(item,index) in titleList">
		  <div>{{item.name}}{{index}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
		  </el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
export default {
  name:'AllData',
  data(){
    return{
		activeNames:2,
		titleList:[{name:"html"},{name:"css"},{name:"js"},{name:'1.1'},{name:'1.2'},{name:'1.3'},{name:'1.4'},{name:'1.5'},{name:'1.6'},{name:'1.7'}],
    }
  }
}
</script>


<style>
.AllData{
  width: 100%;
  padding-bottom: 10px;
}

.AllData .el-collapse-item__header.is-active{
  background-color: #caf6e7;
}
.AllData .el-collapse-item__header.is-active:hover{
  background-color: #caf6e7;
}
.AllData .el-collapse-item__header:hover{
  background-color: #d3d3d3;
}

.AllData .el-collapse-item__content div:hover{
  background-color: #d3d3d3;
}
</style>
