<template>
  <div class="menuOfCalc">
    <p class="menutitle">오늘정산</p>
    <p class="mocsubtitle">정산 대상 금액</p>
    <p id="calcMoney"><span id="calcMoneyNum">{{ calcMoney }}</span> 원</p>
  </div>
</template>
<script>
export default {
  name: 'menuOfCalc',
  components: {
  },
  data () {
    return {
      calcMoney: '3,000,000'
    }
  }
}

</script>

<style>
  .mocsubtitle {
    font-size: 20px;
    margin-top: 140px;
  }
  #calcMoneyNum {
    font-size: 38px;
    font-weight: 700;
  }
  #calcMoney {
    color: dodgerblue;
  }
</style>
