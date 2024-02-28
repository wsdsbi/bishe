<template>
  <div>
    平台
    <el-button class="top-right-link" type="text" @click="centerDialogVisible = true"
      >登录</el-button
    >
    <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <login-form @closefather='closes'></login-form>
    </el-dialog>
  </div>
</template>
<script>
import LoginForm from '../login/LoginForm.vue';
export default {
  components: { LoginForm },
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods:{
    closes(message){
        this.centerDialogVisible=message
    }
  }
};
</script>
<style>
.top-right-link {
  position: fixed; /* 固定定位 */  
  top: 20px; /* 距离视口顶部10px */  
  right: 20px; /* 距离视口右侧10px */  
  /* 其他样式如需要 */  
}
</style>
