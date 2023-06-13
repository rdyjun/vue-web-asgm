<template>
    <div class="menuOfOrder">
      <p class="menutitle">주문/발송</p>
        <ul>
            <li v-for="(item, idx) in menu" :key="item">
                <p id="moomenus">{{ item }}</p><p id="moomenucounts">{{ menuCounts[idx] }}</p>
            </li>
        </ul>
    </div>
  </template>

<script>

export default {
  name: 'menuOfOrder',
  components: {
  },
  data () {
    return {
      menu: ['입금대기중', '결제완료', '배송준비중', '배송중', '배송완료'],
      menuCounts: [5, 56, 0, 120, 420]
    }
  }
}

</script>
