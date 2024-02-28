<template>
  <div>
    平台
    <router-view></router-view>
  </div>
</template>
<script>
import LoginForm from '../login/LoginForm.vue';
import UserStatus from '../user_status/UserStatus.vue';
export default {
  components: { LoginForm, UserStatus },
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods:{
    closes(message){
        this.centerDialogVisible=message
    }
  },
  async created(){
    //const re= await request.post('/login',{account})
  }
};
</script>
<style>



</style>
