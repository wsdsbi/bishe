<template>
  <div style="width: 100%">
    <el-form ref="form" :model="form" label-width="80px" a>
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >数据域</el-tag
        >
        <el-select v-model="form.active" placeholder="请选择数据域">
          <el-option label="订单" value="order"></el-option>
          <el-option label="流量" value="flow"></el-option>
          <el-option label="房屋" value="house"></el-option>
          <el-option label="用户" value="user"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >数仓分层</el-tag
        >
        <el-select v-model="form.regin" placeholder="请选择层级">
          <el-option label="testmybatisplus" value="testmybatisplus"></el-option>
          <el-option label="dwd" value="dwd"></el-option>
          <el-option
            label="dws"
            value="dws"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >数仓表</el-tag
        >
        <el-select v-model="form.table" placeholder="请选择数仓表">
          <el-option
            v-for="item in tab_option"
            :key="item.clom"
            :label="item.clom"
            :value="item.clom"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >原子指标</el-tag
        >
        <el-select v-model="form.indicator" placeholder="请选择原子指标">
          <el-option
            v-for="item in option"
            :key="item.clom"
            :label="item.clom"
            :value="item.clom"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >描述</el-tag
        >
        <el-input
          type="textarea"
          v-model="form.desc"
          style="width: 70%"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >仅本人看见</el-tag
        >
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
export default {
    data() {
      return {
        form: {
            active:'',
            regin:'',
            table:'',
            indicator:'',
            desc: '',
            owned:''
        },
        option:[],
        tab_option:[]
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form.table);
      },
      
    },
    watch: {
        async 'form.table'(){
          this.option=  (await request.post('/get_tab_clom',{'regin':this.form.regin,'table':this.form.table})).data
          console.log(this.option[0].clom);
          
        },
        async 'form.regin'(){
          this.tab_option=  (await request.post('/get_tab_info',{'regin':this.form.regin,'table':this.form.table})).data
          console.log(this.tab_option[0].clom);
          
        },
      }
      
}
</script>