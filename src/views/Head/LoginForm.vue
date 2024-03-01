<template>
  <div class="top-right-link">
    <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
    <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      width="40%"
      center
    >
      <el-form
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号">
          <el-input type="text" v-model="account" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <div style="display: flex; align-items: center">
          <el-form-item label="验证码" style="margin-right: 10px">
            <el-input v-model="check" style="width: 190px"></el-input>
          </el-form-item>
          <check-code @sencode="initcode"></check-code>
        </div>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
          <el-button @click="close">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import request from "../../utitl/axios.js";
import CheckCode from "../../components/CheckCode.vue";

export default {
  components: { CheckCode },
  data() {
    return {
      centerDialogVisible: false,
      account: "",
      password: "",
      check: "",
      checked: "",
    };
  },
  methods: {
    close() {
      this.centerDialogVisible = false;
    },
    resetForm() {
      (this.account = ""), (this.password = ""), (this.check = "");
    },
    async submitForm() {
      if (this.check != this.checked) {
        this.$notify.error({
          title: "错误",
          message: "验证码错误",
        });
      } else {
        const re = await request.post("/login", {
          account: this.account,
          password: this.password,
        });
        if(re.data) {
          localStorage.setItem("account", this.account);
          localStorage.setItem("password", this.password);
          localStorage.setItem("status", '1');
          this.centerDialogVisible = false;
          this.$emit('reset','1')
          if(this.$route.path!="/login"){
          this.$router.push("/login");
          }
        } else {
          this.$notify.error({
            title: "错误",
            message: "账号或者密码错误",
          })
          this.password = ""
        }
      }
    },
    initcode(code) {
      this.checked = code;
    },
  },
};
</script>
<style>
.top-right-link {
  position: fixed; /* 固定定位 */
  top: 9px; /* 距离视口顶部10px */
  right: 20px; /* 距离视口右侧10px */
  /* 其他样式如需要 */
}
</style>
