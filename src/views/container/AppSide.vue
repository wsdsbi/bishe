<template>
  
  <el-menu
    class="el-menu-vertical-demo"
    
  >
    <el-submenu index="1"  >
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>线上金属回收</span>
      </template>
      <el-menu-item  index="1-1" ><router-link to="indicator_create" style="color: black;text-decoration: none;font-size: large;">发布金属订单</router-link></el-menu-item>
      <el-menu-item index="1-1" ><router-link to="indicator_control" style="color: black;text-decoration: none;font-size: large;">金属订单市场</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="atom_static" style="color: black;text-decoration: none;font-size: large;">我的金属订单</router-link></el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>线下金属回收</span>
      </template>
      <el-menu-item index="2-2"><router-link to="indicator_montor" style="color: black;text-decoration: none;font-size: large;">周围回收点</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="step_sub" style="color: black;text-decoration: none;font-size: large;">提交预约订单</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="face_order" style="color: black;text-decoration: none;font-size: large;">预约订单管理</router-link></el-menu-item>
    </el-submenu>

  </el-menu>
</template>
<script>
export default {
  
};
</script>
<style>
</style>