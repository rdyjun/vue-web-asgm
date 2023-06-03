<template>
    <div class="HeaderLine">
      <form>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <input id="search-box" type="text" placeholder="검색할 내용을 입력하세요.">
      </form>
      <div id="user">
        <p id="username">{{ userName }} 님</p>
        <button id="mypage">
          마이페이지
        </button>
        <span class="part"> | </span>
        <button id="logout" @click="logout">
          로그아웃
        </button>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'HeaderLine',
  data () {
    return {
      userName: '홍길동'
    }
  },
  methods: {
    logout () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
  @import '@/style/header.css';
  @import '@/style/wrap.css';
</style>
