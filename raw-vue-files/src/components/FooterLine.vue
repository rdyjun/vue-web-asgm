<template>
    <div class="FooterLine">
      <p>{{ copyright }}</p>
    </div>
  </template>

<script>

export default {
  name: 'FooterLine',
  data () {
    return {
      copyright: 'Copyright 2022. SungJun Joo all rights reserved.',
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
  .FooterLine {
    position: fixed;
    z-index: 100;
    width: 100vw;
    left: 0;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    background-color: #1E2832;
    color: white;
  }
</style>
