<template>
  <div style="width: 100%; height: 100%;">
    <el-form ref="form" :model="form" label-width="80px" style="height: 795px;">
        <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">金属类型</el-tag>
        <el-select v-model="form.type" placeholder="请选择金属类型">
          <el-option label="黄金" value="黄金"></el-option>
          <el-option label="铂金" value="铂金"></el-option>
          <el-option label="白银" value="白银"></el-option>
          <el-option label="铂" value="铂"></el-option>
          <el-option label="钴" value="钴"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">交易形式</el-tag>
        <el-select v-model="form.bargin" placeholder="交易形式">
          <el-option label="线上" value="online"></el-option>
          <el-option label="线下" value="face"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">金属重量</el-tag>
        <el-select v-model="form.height" placeholder="金属重量">
          <el-option label="1kg-10kg" value="1"></el-option>
          <el-option label="10kg-20kg" value="10kg"></el-option>
          <el-option label="20kg-30kg" value="20kg"></el-option>
          <el-option label="30kg-40kg" value="30kg"></el-option>
          <el-option label="需要测量" value="需要测量"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" >
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">出售价格</el-tag>
        <el-input type="textarea" v-model="form.price" style="width: 15%;height: 40px; "></el-input>
      </el-form-item>
      <el-form-item label="" >
        <el-tag type="success"  style="position: absolute; top: 5px; left: 0;">金属描述</el-tag>
        <el-input type="textarea" v-model="form.desc" style="width: 70%; "></el-input>
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
            type:'',
            bargin:'',
            height:'',
            price:'',
            desc: '',
            status:1,
            owned:false,
            account:localStorage.getItem('account'),
            createtime:new Date().toLocaleString(),
            updatetime:new Date().toLocaleString()
        },
      }
    },
    methods: {
      async onSubmit(){
        console.log(this.form)
        try {

        if(this.form.type!=''&&this.form.bargin!=''&& this.form.price!=''&&this.form.height!=''&&this.form.desc!=''){
          const re= await (await request.post('/create_metal_order',this.form)).data
          this.$notify.success({
          title: "提交",
          message: "提交"+re,
        })
      }
      else{
        this.$notify.error({
            title: "提交失败",
            message: "不能为空"
      })
    }
          } catch (error) {
            this.$notify.error({
            title: "提交失败",
            message: "该指标已存在"
          })
        }
      }
      }
}
</script>