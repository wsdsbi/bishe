<template>
  <div style="color: black; text-decoration: none; font-size: large" v-loading="loading">
    线下订单创建
    <el-form ref="form" :model="form" label-width="80px" style="height: 589px">
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0">金属类型</el-tag>
        <el-select v-model="form.type" placeholder="请选金属类型">
          <el-option label="黄金" value="黄金"></el-option>
          <el-option label="铂金" value="铂金"></el-option>
          <el-option label="白银" value="白银"></el-option>
          <el-option label="铂" value="铂"></el-option>
          <el-option label="钴" value="钴"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0">金属重量</el-tag>
        <el-select v-model="form.height" placeholder="重量">
          <el-option label="1kg-10kg" value="1"></el-option>
          <el-option label="10kg-20kg" value="10kg"></el-option>
          <el-option label="20kg-30kg" value="20kg"></el-option>
          <el-option label="30kg-40kg" value="30kg"></el-option>
          <el-option label="需要测量" value="需要测量"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0">回收站点</el-tag>
        <el-select v-model="form.station" placeholder="回收站点">
          <el-option label="陈松回收站" value="陈松回收站"></el-option>
          <el-option label="小婴回收站" value="小婴回收站"></el-option>
          <el-option label="华强回收站" value="华强回收站"></el-option>
          <el-option label="阿里回收站" value="阿里回收站"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0">预估价格</el-tag>
        <el-input type="textarea" v-model="form.price" style="width: 70%"></el-input>
      </el-form-item>

      <el-form-item label="">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0">备注信息</el-tag>
        <el-input type="textarea" v-model="form.desc" style="width: 70%"></el-input>
      </el-form-item>

      <el-form-item style="height: 70px">
        <el-tag type="success" style="position: absolute; top: 5px; left: 0">回收信息</el-tag>

        <div class="demo-input-suffix">
          <el-input placeholder="请输入回收地址" prefix-icon="el-icon" v-model="form.address"
            style="position: fixed; left: 800px; width: 180px">
          </el-input>
          <div class="block">
            <el-date-picker v-model="form.date" type="date" placeholder="选择回收日期"
              style="position: fixed; left: 1400px; width: 180px" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
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
        type: "",
        height: "",
        price: "",
        address: "",
        station: "",
        date: "",
        desc: "",
        owned: false,
        account: localStorage.getItem("account"),
        createtime: new Date().toLocaleString(),
        updatetime: new Date().toLocaleString(),
        status: 0
      },
      loading: false,
    };
  },
  methods: {
     onSubmit() {
      try {
        this.$confirm("创建预约", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(async () => {
          this.loading = true;
          if (this.form.type != '' && this.form.bargin != '' && this.form.price != '' && this.form.height != '' && this.form.desc != '') {
            await request.post('/insert_face_order', this.form)

          }
         setTimeout(() => {
            this.loading = false;

            this.$notify.success({
              title: "提交成功",
              message: "提交成功，已经预约" + this.date,
            });
          }, 2000);
        });
      } catch {

      }

    },
  },
};
</script>
<style></style>