<template>
    <div style="color: black;text-decoration: none;font-size: large;" v-loading="loading">
  单指标烟囱测试
    <el-form ref="form" :model="form" label-width="80px" style="height: 589px">
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >数据分域</el-tag
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
          >数据分层</el-tag
        >
        <el-select v-model="form.regin" placeholder="数据分层">
          <el-option label="dwd" value="dwd"></el-option>
          <el-option
            label="testmybatisplus"
            value="testmybatisplus"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >数仓表名</el-tag
        >
        <el-select v-model="form.tablename" placeholder="请选择数仓表">
          <el-option label="自动建表" value="自动建表"> </el-option>
          <el-option label="null" value="null"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >测试指标</el-tag
        >
        <el-select v-model="form.indicator" placeholder="请选择测试指标">
          <el-option label="自动配置" value="自动配置"> </el-option>
          <el-option label="null" value="null"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >测试描述</el-tag
        >
        <el-input
          type="textarea"
          v-model="form.comment"
          style="width: 70%"
        ></el-input>
      </el-form-item>
      <div style="height: 50px">
        <el-switch
          style="position: fixed; left: 600px"
          v-model="value1"
          active-color="#13ce66"
          active-text="sum()"
        >
        </el-switch>
        <el-switch
          style="position: fixed; left: 750px"
          v-model="value2"
          active-color="#13ce66"
          active-text="count()"
        >
        </el-switch>
        <el-switch
          style="position: fixed; left: 900px"
          v-model="value3"
          active-color="#13ce66"
          active-text="avg()"
        >
        </el-switch>
        <el-switch
          style="position: fixed; left: 1050px"
          v-model="value4"
          active-color="#13ce66"
          active-text="count(distinct)"
        >
        </el-switch>
        <el-switch
          style="position: fixed; left: 1250px"
          v-model="value4"
          active-color="#13ce66"
          active-text="count(null)"
        >
        </el-switch>
        <el-switch
          style="position: fixed; left: 1400px"
          v-model="value4"
          active-color="#13ce66"
          active-text="max()"
        >
        </el-switch>
        <el-switch
          style="position: fixed; left: 1550px"
          v-model="value4"
          active-color="#13ce66"
          active-text="min()"
        >
        </el-switch>
      </div>
      <el-form-item style="height: 70px">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >维度限制</el-tag
        >
        <div style="position: absolute; top: 1px; left: 220px; color: #131212">
          where
        </div>
        <div class="demo-input-suffix">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon"
            v-model="value5"
            style="position: fixed; left: 700px; width: 180px"
          >
          </el-input>
          <el-input
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            v-model="value6"
            style="position: fixed; left: 1000px; width: 180px"
          >
          </el-input>
          <el-switch
          style="position: fixed; left: 1350px;bottom:260px"
          v-model="value7"
          active-color="#13ce66"
          active-text="不为null"
        >
        </el-switch>
        </div>
      </el-form-item>
      <el-form-item>
        <el-tag type="success" style="position: absolute; top: 5px; left: 0"
          >添加警报</el-tag
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
export default {
  data() {
    return {
      form: {
        active: "",
        regin: "",
        tablename: "",
        indicator: "",
        comment: "",
        owned: false,
        account: localStorage.getItem("account"),
        createtime: new Date().toLocaleString(),
        updatetime: new Date().toLocaleString(),
      },
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      value5: '',
      value6: '',
      value7: '',
      loading:false
    };
  },
  methods:{
    onSubmit(){
        this.$confirm('创建测试', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.loading=true
          setTimeout(() => {
            this.loading=false
            this.$notify.success({
            title: "提交成功",
            message: "提交成功，测试已发布"
          })
        }, 2000);
        
        })
    }
  }
};
</script>
<style>
</style>