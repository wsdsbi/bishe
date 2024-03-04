<template>
  <div style="width: 100%; ">
    <el-form ref="form" :model="form" label-width="80px" a>
        <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">数据分域</el-tag>
        <el-select v-model="form.active" placeholder="请选择数据域">
          <el-option label="订单" value="order"></el-option>
          <el-option label="流量" value="flow"></el-option>
          <el-option label="房屋" value="house"></el-option>
          <el-option label="用户" value="user"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">数据分层</el-tag>
        <el-select v-model="form.regin" placeholder="数据分层">
          <el-option label="dwd" value="dwd"></el-option>
          <el-option label="dws" value="dws"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">数仓表名</el-tag>
        <el-select v-model="form.tablename" placeholder="请选择数仓表">
          <el-option  
        v-for="option in tableOptions"  
        :key="option.clom"  
        :label="option.clom"  
        :value="option.clom">  
      </el-option>  
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">原子指标</el-tag>
        <el-select v-model="form.indicator" placeholder="请选择原子指标">
          <el-option  
        v-for="option in clomOptions"  
        :key="option.clom"  
        :label="option.clom"  
        :value="option.clom">  
      </el-option> 
        </el-select>
      </el-form-item>
      <el-form-item label="" >
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">指标描述</el-tag>
        <el-input type="textarea" v-model="form.comment" style="width: 70%; "></el-input>
      </el-form-item>
      <el-form-item>
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">本人可见</el-tag>
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
            tablename:'',
            indicator:'',
            comment: '',
            owned:false,
            account:localStorage.getItem('account')
        },
        tableOptions:[],
        clomOptions:[]
      }
    },
    methods: {
      async onSubmit() {
        console.log(this.form)
        try {
        if(this.form.active!=''&&this.form.regin!=''&& this.form.tablename!=''&&this.form.indicator!=''&&this.form.desc!=''){
          
          const re= await (await request.post('/insert_indicator_control',this.form)).data
          this.$notify.success({
          title: "提交",
          message: "提交"+re,
        })
      }
          } catch (error) {
            this.$notify.error({
            title: "提交失败",
            message: "该指标已存在"
          })
        }
      }
      
    },
    watch: {
        async 'form.regin'(){
          this.tableOptions=''
          this.tableOptions=(await request.post('/get_tab_info',{'regin':this.form.regin,'table':this.form.tablename})).data;
          this.form.table=''
          this.form.indicator=''
        },
        async 'form.tablename'(){
          this.clomOptions=''
          this.clomOptions=(await request.post('/get_tab_clom',{'regin':this.form.regin,'table':this.form.tablename})).data;
          this.form.indicator=''
        },
      }
}
</script>