<template>
  <div>
    平台
    <user-status @change_status="change"  v-if="status=='1'"></user-status>
    <login-form @reset="set" v-else ></login-form>
  </div>
</template>
<script>
import user_status_check from '@/utitl/LoginCheck';
import LoginForm from '../Head/LoginForm.vue';
import UserStatus from '../Head/UserStatus.vue';
export default {
  components: { LoginForm, UserStatus },
  data() {
    return {
      centerDialogVisible: false,
      status:localStorage.getItem('status') || '0'
    };
  },
  methods:{
    closes(message){
        this.centerDialogVisible=message
    },
    change(val){
      this.status=val
    },
    set(val){
      this.status=val
    }
  },
  async created(){
    if(!await user_status_check()){
      localStorage.setItem('status','0')
    }
    else{
      this.$router.push("/login");
    }
  }
};
</script>
<style>



</style>
