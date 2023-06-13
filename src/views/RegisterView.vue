<template>
    <div class="registerView">
      <h1>회원가입</h1>
      <form @submit="submitForm">
        <label for="username"><p>아이디:</p><input type="text" id="username" v-model="username" required></label>
        <label for="password"><p>비밀번호:</p><input type="password" id="password" v-model="password" required :class="{ 'red': password.length < 8 }"></label>
        <span v-if="password.length < 8" id="registerHint">비밀번호는 8글자 이상 입력해야 합니다.</span>

        <label for="confirmPassword"><p>비밀번호 확인:</p><input type="password" id="confirmPassword" v-model="confirmPassword" required></label>

        <label for="name"><p>이름:</p><input type="text" id="name" v-model="name" required></label>
        <label for="phone"><p>전화번호:</p><input type="text" id="phone" v-model="phone" required></label>

        <label for="email"><p>이메일:</p><input type="email" id="email" v-model="email" required></label>
        <input id="userRegisterBtn" type="submit" @click="submitForm('/login')" value="가입">
      </form>
    </div>
  </template>

<script>
export default {
  name: 'RegisterView',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    submitForm (s) {
      this.$router.push({ path: s })
    }
  }
}
</script>
<style>
  @import '@/style/register.css';
  @import '@/style/wrap.css';
</style>
