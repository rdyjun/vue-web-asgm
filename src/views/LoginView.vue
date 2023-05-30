<template>
    <div class="login">
        <div id="loginForm">
            <img :src="logoSrc">
            <form>
                <div class="inputBox">
                    <input @focus="onFocus" @blur="onBlur" type="text" placeholder="ID" required>
                </div>
                <div class="inputBox" @focus="onFocus">
                    <input @focus="onFocus" @blur="onBlur" type="text" v-model="password" placeholder="PASSWORD" required>
                </div>
                <p class="hint" >{{hint}}</p>
                <input type="submit" value="로그인">
            </form>
        </div>
    </div>
</template>

<script>
import logoSrc from '@/assets/logo.png'

export default {
  name: 'LoginView',
  data () {
    return {
      logoSrc: logoSrc,
      password: '',
      showable: 'hide',
      hint: '비밀번호를 8자 이상 입력해주세요.'
    }
  },
  watch: {
    password () {
      if (this.password.length < 8) {
        this.hint = '비밀번호를 8자 이상 입력해주세요.'
      } else {
        this.hint = ''
      }
    }
  },
  methods: {
    onFocus (event) {
      event.target.parentElement.style.border = '1.5px solid rgb(66, 184, 131)'
      event.target.parentElement.style.boxShadow = '0px 0px 40px rgba(66, 184, 131, 0.2)'
    },
    onBlur (event) {
      event.target.parentElement.style.border = '1.5px solid #DDDDDD'
      event.target.parentElement.style.boxShadow = 'none'
    }
  }
}
</script>

<style>
    @import '@/style/login.css';
</style>
