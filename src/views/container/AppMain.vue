<template>
  <div style="width: 100%; ">
    <el-form ref="form" :model="form" label-width="80px" a>
        <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">数据域</el-tag>
        <el-select v-model="form.regin" placeholder="请选择数据域">
          <el-option label="订单" value="order"></el-option>
          <el-option label="流量" value="flow"></el-option>
          <el-option label="房屋" value="house"></el-option>
          <el-option label="用户" value="user"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">数仓表</el-tag>
        <el-select v-model="form.table" placeholder="请选择数仓表">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">原子指标</el-tag>
        <el-select v-model="form.indicator" placeholder="请选择原子指标">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" >
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">描述</el-tag>
        <el-input type="textarea" v-model="form.desc" style="width: 70%; "></el-input>
      </el-form-item>
      <el-form-item>
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">仅本人看见</el-tag>
        <el-switch v-model="form.owned"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/utitl/axios';
import check_login from '@/utitl/LoginCheck.js';
export default {
    data() {
      return {
        form: {
            regin:'',
            table:'',
            indicator:'',
            desc: '',
            owned:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form.table);
      },
      
    },
    watch: {
        'form.table'(){
            request.post('/get_table',{'regin':this.form.regin,'table':this.form.table})
        }
      },
    /* beforeCreate(){
        if(!check_login()){
            this.$router.push('/')
        }
    } */
}
</script>