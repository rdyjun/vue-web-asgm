<template>
    <div class="product">
      <div id="productTop">
        <p id="allProducts">
          전체상품 수 : {{ allProducts }} 건
        </p>
        <p id="sellProducts">
          판매중 : {{ sellProducts }} 건
        </p>
        <p id="stopedProducts">
          판매중지 : {{ stopedProducts }} 건
        </p>
        <p id="soldoutProducts">
          품절 : {{ soldoutProducts }} 건
        </p>
      </div>
      <div id="updateProducts">
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
      allProducts: 11,
      sellProducts: 5,
      stopedProducts: 3,
      soldoutProducts: 3,
      products: [{ 1: ['볼펜', 'sell'] }]
    }
  }
}

</script>

  <style>
    @import '@/style/product.css';
    @import '@/style/wrap.css';
  </style>
