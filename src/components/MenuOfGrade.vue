<template>
  <div class="menuOfGrade">
    <p class="menutitle">판매자 평점</p>
    <div id="gradeProgressArea">
    <div id="progessArea">
        <p class="gradeSubTitle">주문이행</p>
        <progress id="orderProgress" class="gradeMenuProgress" :class="gradeProgressClass[0]" :value="gradeProgress[0]" max="100" style="{backgroundColor:'red'}"></progress>
        <p class="gradeSubTitle">발송일준수</p>
        <progress id="deliverProgress" class="gradeMenuProgress" :class="gradeProgressClass[1]" :value="gradeProgress[1]" max="100"></progress>
        <p class="gradeSubTitle">24시간 문의응대</p>
        <progress id="csProgress" class="gradeMenuProgress" :class="gradeProgressClass[2]" :value="gradeProgress[2]" max="100"></progress>
    </div>
    <div id="gradeCalcArea">
        <p class="bold" :class="gradeProgressClass[0]">{{ gradeResult[0] }}</p>
        <p>{{ gradeProgress[0] }}%</p>
        <p class="bold" :class="gradeProgressClass[1]">{{ gradeResult[1] }}</p>
        <p>{{ gradeProgress[1] }}%</p>
        <p class="bold" :class="gradeProgressClass[2]">{{ gradeResult[2] }}</p>
        <p>{{ gradeProgress[2] }}%</p>
    </div>
    </div>
    <hr>
    <ul id="gradeMenuUpdate">
    <li>업데이트 : {{ gradeMenuUdateDate }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'menuOfGrade',
  components: {
  },
  data () {
    return {
      menu: ['상품 Q&A', '오늘발송요청', '발송지연', '상품 미도착'],
      menuCounts: [2, 4, 6, 8],
      menulink: [],
      gradeMenuUdateDate: new Date().toLocaleDateString(),
      gradeProgress: [92, 64, 38],
      gradeProgressClass: ['greenProgress', 'greenProgress', 'greenProgress'],
      gradeResult: ['', '', '']
    }
  },
  watch: {
    gradeProgress: {
      handler (newProgress) {
        for (let i = 0; i < newProgress.length; i++) {
          if (newProgress[i] <= 40) {
            this.gradeProgressClass[i] = 'redProgress'
            this.gradeResult[i] = '경고'
          } else if (newProgress[i] <= 65) {
            this.gradeProgressClass[i] = 'yellowProgress'
            this.gradeResult[i] = '주의'
          } else {
            this.gradeProgressClass[i] = 'greenProgress'
            this.gradeResult[i] = '우수'
          }
        }
      },
      immediate: true // 초기 값으로도 동작하도록 설정
    }
  }
}

</script>
