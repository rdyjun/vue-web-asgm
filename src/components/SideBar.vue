<template>
  <div class="SideBar">
    <nav id="gnb">
      <a href="/"><div id="logo"><img v-bind:src="logoSrc"></div></a>
      <ul>
          <li v-for="(item, idx) in menu" :key="item" @click="moveToPage(idx)">{{ item }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import logoSrc from '@/assets/logo.png'

export default {
  name: 'SideBar',
  data () {
    return {
      logoSrc: logoSrc,
      menu: ['상품관리', '주문관리', '문의관리', '공지사항'],
      menuclick: ['product', 'order', 'cs', 'notice']
    }
  },
  methods: {
    moveToPage (val) {
      this.$router.push({ path: '/' + this.menuclick[val] })
    }
  }
}
</script>

<style>
  @import '@/style/sidebar.css';
  @import '@/style/wrap.css';
</style>
