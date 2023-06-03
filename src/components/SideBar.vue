<template>
  <div class="SideBar">
    <nav id="gnb">
      <a><div id="logo"><img v-bind:src="logoSrc"></div></a>
      <ul>
        <a>
          <li v-for="item in menu" :key="item">{{ item }}</li>
        </a>
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
      menu: ['상품관리', '주문관리', '문의관리', '공지사항']
    }
  }
}
</script>

<style>
  @import '@/style/sidebar.css';
  @import '@/style/wrap.css';
</style>
