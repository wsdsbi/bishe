<template>
  
  <el-menu
    class="el-menu-vertical-demo"
    
  >
    <el-submenu index="1"  >
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>原子指标</span>
      </template>
      <el-menu-item  index="1-1" ><router-link to="indicator_create" style="color: black;text-decoration: none;font-size: large;">原子指标创建</router-link></el-menu-item>
      <el-menu-item index="1-1" ><router-link to="indicator_control" style="color: black;text-decoration: none;font-size: large;">原子指标管理</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="atom_static" style="color: black;text-decoration: none;font-size: large;">原子指标星图</router-link></el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>数据监控</span>
      </template>
      <el-menu-item index="2-1"><router-link to="table_test" style="color: black;text-decoration: none;font-size: large;">烟囱测试</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="indicator_montor" style="color: black;text-decoration: none;font-size: large;">全球房源点</router-link></el-menu-item>
      <el-menu-item index="2-3">Kilin</el-menu-item>
    </el-submenu>

  </el-menu>
</template>
<script>
export default {
  
};
</script>
<style>
</style>