<template>
    <div class="top-right-link">
        hello user
        <el-button size="mini" @click="exit">退出登录</el-button>
    </div>
</template>
<script>
export default {
    methods:{
      exit(){
        localStorage.setItem('status','0')
        this.$emit('change_status','0')
        if(this.$route.path!="/"){
        this.$router.push("/");
        }
      }
    }
}
</script>
<style>
.top-right-link {
  position: fixed; /* 固定定位 */  
  top: 1px; /* 距离视口顶部10px */  
  right: 20px; /* 距离视口右侧10px */  
  /* 其他样式如需要 */  
}
</style>