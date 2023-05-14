<template>
  <div class="SideBar">
    <nav>
      <ul>
        <a>
          <li v-for="item in menu" :key="item">{{ item }}</li>
        </a>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      menu: ['상품관리', '주문관리', '고객관리']
    }
  }
}
</script>

<style>
  @import '@/style/sidebar.css';
  @import '@/style/wrap.css';
</style>
