<template>
  <div class="SideBar">
    <nav>
      <ul>
        <li v-for="item in menu" :key="item">{{ item }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      menu: ['상품관리', 'ㅁ']
    }
  }
}
</script>

<style>
  @import '@/style/sidebar.css';
  @import '@/style/wrap.css';
</style>
