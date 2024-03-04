<template>
  <el-menu
    class="el-menu-vertical-demo"
  >
    <el-submenu index="1" >
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1" ><router-link to="indicator_create" style="color: black;text-decoration: none;font-size: large;">原子指标创建</router-link></el-menu-item>
      <el-menu-item index="1-1" ><router-link to="indicator_control" style="color: black;text-decoration: none;font-size: large;">原子指标管理</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="atom_static" style="color: black;text-decoration: none;font-size: large;">原子指标星图</router-link></el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>导航二</span>
      </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>

  </el-menu>
</template>
<script>
export default {
  methods: {
    
  }
};
</script>
<style>
</style>