<template>
    <div class="product">
      <div id="productTop">
        <p v-for="(item, idx) in productTopMenu" :key="item">
          {{ item }} : <span class="menucount">{{ productTopMenuCounts[idx] }}</span> 건
        </p>
        <div id="productUpdateButton">
          <select>
            <option>상태변경</option>
            <option>판매시작</option>
            <option>판매중지</option>
          </select>
          <button class="productButton">상품 추가</button>
          <button class="productButton" :click="updateAlert">수정 저장</button>
        </div>
      </div>
      <div id="productBottom">
        <table id="productList">
          <colgroup>
            <col width="5%" />
            <col width="10%" />
            <col width="10%" />
            <col width="5%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr class="productHead">
              <th><input type="checkbox" class="main_checkbox" v-model="selectAll"></th>
              <th v-for="item in productTableHead" :key="item">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="productRow" v-for="(itm, idx) in products" :key="itm">
              <td><input type="checkbox" class="main_checkbox"></td>
              <td><button id="itemUpdateButton">수정</button></td>
              <td>{{ itm.status ? "판매중" : "판매중단" }}</td>
              <td>{{ idx + 1 }}</td>
              <td>{{ itm.name }}</td>
              <td><input class="priceInput" type="number" v-model="itm.price"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'ProductView',
  components: {
  },
  data () {
    return {
      productTopMenu: ['전체상품 수', '판매중', '판매중지', '품절'],
      productTopMenuCounts: [11, 5, 3, 3],
      products: [
        { name: '볼펜', price: 17000, status: true },
        { name: '연필', price: 800, status: true },
        { name: '공책', price: 1800, status: true },
        { name: '마우스', price: 8000, status: false },
        { name: '키보드', price: 15000, status: true },
        { name: '형광펜', price: 2000, status: true },
        { name: '화이트', price: 1500, status: true },
        { name: '지우개', price: 500, status: true },
        { name: '마스크', price: 1000000, status: true },
        { name: '커터칼', price: 700, status: true },
        { name: '풀', price: 500, status: true }
      ],
      productTableHead: ['수정', '판매상태', '상품코드', '상품명', '가격'],
      selectAll: false
    }
  },
  methods: {
    updateAlert () {
      alert('정상적으로 수정되었습니다 !')
    }
  },
  watch: {
    selectAll () {
      if (this.selectAll) {
        const checkboxes = document.getElementsByClassName('main_checkbox')
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true
        }
      } else {
        const checkboxes = document.getElementsByClassName('main_checkbox')
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
        }
      }
    }
  }

}

</script>

  <style>
    @import '@/style/product.css';
    @import '@/style/wrap.css';
  </style>
