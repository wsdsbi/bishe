<template>
  <span style="height: 80px; text-align: right; width: 70px" class="">{{
    checked
  }}</span>
</template>
<script>
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;
const codeLength = 6; // 你可以根据需要设置验证码的长度
let code = "";

for (let i = 0; i < codeLength; i++) {
  const randomIndex = Math.floor(Math.random() * charactersLength);
  code += characters.charAt(randomIndex);
}
const verificationCode = code;
export default {
  data(){
    return{
      checked:verificationCode
    }
  },
  created(){
    this.$emit('sencode', this.checked);
  }
}
</script>