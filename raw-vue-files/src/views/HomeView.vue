<template>
  <div class="home">
    <div id="status">
      <ul>
        <li v-for="(item, idx) in menu" :key="item">{{ item }}<span class="menucount">{{ menuCounts[idx] }}</span></li>
      </ul>
    </div>
    <div id="grademenu" class="card1">
      <menuOfGrade />
    </div>
    <div id="ordermenu" class="card1">
      <menuOfOrder />
    </div>
    <div id="csmenu" class="card1">
      <menuOfCs />
    </div>
    <div id="calculmenu" class="card1">
      <menuOfCalc />
    </div>
  </div>
</template>

<script>
import menuOfGrade from '@/components/MenuOfGrade.vue'
import menuOfOrder from '@/components/MenuOfOrder.vue'
import menuOfCs from '@/components/MenuOfCs.vue'
import menuOfCalc from '@/components/MenuOfCalc.vue'

export default {
  name: 'HomeView',
  components: {
    menuOfGrade,
    menuOfOrder,
    menuOfCs,
    menuOfCalc
  },
  data () {
    return {
      menu: ['상품 Q&A', '오늘발송요청', '발송지연', '상품 미도착'],
      menuCounts: [2, 4, 6, 8],
      menulink: []
    }
  }
}

</script>

<style>
  @import '@/style/home.css';
  @import '@/style/menuofgrade.css';
  @import '@/style/menuoforder.css';
  @import '@/style/wrap.css';
</style>
