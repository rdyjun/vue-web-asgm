<template>
    <div class="login">
        <div id="loginForm">
            <img id="loginLogo" :src="logoSrc">
            <form>
                <div class="inputBox">
                    <input @focus="onFocus" @blur="onBlur" type="text" placeholder="ID" required>
                </div>
                <div class="inputBox" @focus="onFocus">
                    <input @focus="onFocus" @blur="onBlur" type="text" v-model="password" placeholder="PASSWORD" required>
                </div>
                <p class="hint" >{{hint}}</p>
                <div id="otherLoginButton">
                  <button><img :src="githubSrc">Github</button>
                  <button><img :src="kakaoSrc">Kakao</button>
                  <button><img :src="googleSrc">Google</button>
                </div>
                <input type="submit" value="로그인" @click="moveToMain('/')">
                <input type="submit" id="registerBtn" value="회원가입" @click="moveToMain('/register')">
            </form>
            <p id="loginCopyright">Copyright 2022. SungJun Joo all rights reserved.</p>
        </div>
    </div>
</template>

<script>
import logoSrc from '@/assets/logo.gif'
import githubSrc from '@/assets/github.png'
import kakaoSrc from '@/assets/kakao.png'
import googleSrc from '@/assets/google.png'

export default {
  name: 'LoginView',
  data () {
    return {
      logoSrc: logoSrc,
      githubSrc: githubSrc,
      googleSrc: googleSrc,
      kakaoSrc: kakaoSrc,
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
    },
    moveToMain (s) {
      this.$router.push({ path: s })
    }
  }
}
</script>

<style>
    @import '@/style/login.css';
</style>
