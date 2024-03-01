<template>
  <div id="app" >
    <el-container>
  <el-header>
    <app-head></app-head>
  </el-header>
  <el-container>
    <el-aside style="height: 660px;">
      <app-side></app-side>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
<user-montor></user-montor>
  </div>
</template>

<script>
import AppSide from './views/container/AppSide.vue'
import AppHead from './views/container/AppHead.vue'
import AppMain from './views/container/AppMain.vue'
import UserMontor from './views/user_status_monitor/UserMontor.vue'
export default {
  components:{AppSide,AppHead,AppMain,UserMontor}
}
</script>

<style>
.el-header, .el-footer {
  font-family: "Helvetica Neue";
    background-color: #e5ebeb;
    color: #333;
    text-align: center;
    line-height: 60px;
    width:auto;
  }
  
  .el-aside {
    background-color: #f4f5f7;
    color: #333;
    text-align: center;
    height: 200px;
    line-height: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  
  .el-main {
    background-color: #FFFFFF;
    color: #faf9f9;
    text-align: center;
    line-height: 160px;
    height: 660px;
    width: 400px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
