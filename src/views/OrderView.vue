<template>
    <div class="order">
      <div id="orderTop">
        <div v-for="status in orderStatuses" :key="status" class="status-item">
          <h2 @click="filterOrdersByStatus(status)">
            {{ status }} ({{ getOrderCountByStatus(status) }})
          </h2>
        </div>
        <select v-model="ordersPerPage">
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
      <table id="orderTable">
        <thead>
          <tr>
            <th>주문상태</th>
            <th>주문번호</th>
            <th>결제일시</th>
            <th>구매자명</th>
            <th>구매자ID</th>
            <th>수취인명</th>
            <th>상품번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in displayedOrders" :key="index">
            <td>{{ order.orderStatus }}</td>
            <td>{{ order.orderNumber }}</td>
            <td>{{ order.paymentDate }}</td>
            <td>{{ order.buyerName }}</td>
            <td>{{ order.buyerID }}</td>
            <td>{{ order.recipientName }}</td>
            <td>{{ order.productNumber }}</td>
            <td>{{ order.productName }}</td>
            <td>{{ order.quantity }}</td>
            <td>{{ order.price }}</td>
          </tr>
        </tbody>
      </table>
      <div id="orderPageNumber" :style="{width: paginationWidthAuto + 'px'}">
        <button class="orderPageNumberBtn" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }" @click="setCurrentPage(page)">{{ page }}</button>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'OrderView',
  data () {
    return {
      orderStatuses: ['결제완료', '상품준비중', '배송중', '배송완료', '취소주문'],
      orders: [
        { orderStatus: '결제완료', orderNumber: '10001', paymentDate: '2023-06-01 14:20:30', buyerName: '김철수', buyerID: 'KimCS01', recipientName: '김철수', productNumber: 'P01', productName: '볼펜', quantity: 2, price: 2000 },
        { orderStatus: '상품준비중', orderNumber: '10002', paymentDate: '2023-06-01 16:45:00', buyerName: '이영희', buyerID: 'LeeYH02', recipientName: '이영희', productNumber: 'P02', productName: '연필', quantity: 3, price: 1500 },
        { orderStatus: '배송중', orderNumber: '10003', paymentDate: '2023-06-02 11:05:20', buyerName: '박지성', buyerID: 'ParkJS03', recipientName: '박지성', productNumber: 'P03', productName: '공책', quantity: 5, price: 2500 },
        { orderStatus: '배송완료', orderNumber: '10004', paymentDate: '2023-06-02 14:45:30', buyerName: '최은영', buyerID: 'ChoiEY04', recipientName: '최은영', productNumber: 'P04', productName: '마우스', quantity: 1, price: 10000 },
        { orderStatus: '취소주문', orderNumber: '10005', paymentDate: '2023-06-03 09:20:30', buyerName: '김철수', buyerID: 'KimCS01', recipientName: '김철수', productNumber: 'P05', productName: '키보드', quantity: 1, price: 20000 },
        { orderStatus: '결제완료', orderNumber: '10006', paymentDate: '2023-06-03 10:30:45', buyerName: '김영희', buyerID: 'KimYH06', recipientName: '김영희', productNumber: 'P06', productName: '형광펜', quantity: 4, price: 1000 },
        { orderStatus: '상품준비중', orderNumber: '10007', paymentDate: '2023-06-03 12:15:00', buyerName: '이지성', buyerID: 'LeeJS07', recipientName: '이지성', productNumber: 'P07', productName: '화이트', quantity: 2, price: 3000 },
        { orderStatus: '배송중', orderNumber: '10008', paymentDate: '2023-06-03 15:25:30', buyerName: '박철수', buyerID: 'ParkCS08', recipientName: '박철수', productNumber: 'P08', productName: '지우개', quantity: 3, price: 500 },
        { orderStatus: '배송완료', orderNumber: '10009', paymentDate: '2023-06-03 17:45:10', buyerName: '최지성', buyerID: 'ChoiJS09', recipientName: '최지성', productNumber: 'P09', productName: '마스크', quantity: 10, price: 2000 },
        { orderStatus: '취소주문', orderNumber: '10010', paymentDate: '2023-06-04 09:30:30', buyerName: '김영희', buyerID: 'KimYH06', recipientName: '김영희', productNumber: 'P10', productName: '커터칼', quantity: 1, price: 3000 },
        { orderStatus: '결제완료', orderNumber: '10011', paymentDate: '2023-06-04 10:30:45', buyerName: '이수영', buyerID: 'LeeSY11', recipientName: '이수영', productNumber: 'P07', productName: '화이트', quantity: 1, price: 3000 },
        { orderStatus: '상품준비중', orderNumber: '10012', paymentDate: '2023-06-04 11:45:00', buyerName: '박지성', buyerID: 'ParkJS03', recipientName: '박지성', productNumber: 'P10', productName: '커터칼', quantity: 2, price: 3000 },
        { orderStatus: '배송중', orderNumber: '10013', paymentDate: '2023-06-04 14:15:30', buyerName: '최은영', buyerID: 'ChoiEY04', recipientName: '최은영', productNumber: 'P06', productName: '형광펜', quantity: 3, price: 1000 },
        { orderStatus: '배송완료', orderNumber: '10014', paymentDate: '2023-06-04 17:05:10', buyerName: '김철수', buyerID: 'KimCS01', recipientName: '김철수', productNumber: 'P01', productName: '볼펜', quantity: 2, price: 2000 },
        { orderStatus: '취소주문', orderNumber: '10015', paymentDate: '2023-06-04 18:30:30', buyerName: '이영희', buyerID: 'LeeYH02', recipientName: '이영희', productNumber: 'P02', productName: '연필', quantity: 1, price: 1500 },
        { orderStatus: '결제완료', orderNumber: '10016', paymentDate: '2023-06-05 09:00:45', buyerName: '박철수', buyerID: 'ParkCS08', recipientName: '박철수', productNumber: 'P08', productName: '지우개', quantity: 4, price: 500 },
        { orderStatus: '상품준비중', orderNumber: '10017', paymentDate: '2023-06-05 10:30:00', buyerName: '최지성', buyerID: 'ChoiJS09', recipientName: '최지성', productNumber: 'P03', productName: '공책', quantity: 3, price: 2500 },
        { orderStatus: '배송중', orderNumber: '10018', paymentDate: '2023-06-05 12:15:30', buyerName: '김영희', buyerID: 'KimYH06', recipientName: '김영희', productNumber: 'P04', productName: '마우스', quantity: 1, price: 15000 },
        { orderStatus: '배송완료', orderNumber: '10019', paymentDate: '2023-06-05 14:05:10', buyerName: '이수영', buyerID: 'LeeSY11', recipientName: '이수영', productNumber: 'P05', productName: '키보드', quantity: 1, price: 30000 },
        { orderStatus: '취소주문', orderNumber: '10020', paymentDate: '2023-06-05 15:30:30', buyerName: '박지성', buyerID: 'ParkJS03', recipientName: '박지성', productNumber: 'P10', productName: '커터칼', quantity: 2, price: 3000 },
        { orderStatus: '결제완료', orderNumber: '10021', paymentDate: '2023-06-06 10:30:45', buyerName: '최은영', buyerID: 'ChoiEY04', recipientName: '최은영', productNumber: 'P06', productName: '형광펜', quantity: 3, price: 1000 },
        { orderStatus: '상품준비중', orderNumber: '10022', paymentDate: '2023-06-06 11:45:00', buyerName: '김철수', buyerID: 'KimCS01', recipientName: '김철수', productNumber: 'P07', productName: '화이트', quantity: 1, price: 3000 },
        { orderStatus: '배송중', orderNumber: '10023', paymentDate: '2023-06-06 14:15:30', buyerName: '이영희', buyerID: 'LeeYH02', recipientName: '이영희', productNumber: 'P08', productName: '지우개', quantity: 5, price: 500 },
        { orderStatus: '배송완료', orderNumber: '10024', paymentDate: '2023-06-06 17:05:10', buyerName: '박철수', buyerID: 'ParkCS08', recipientName: '박철수', productNumber: 'P09', productName: '마스크', quantity: 10, price: 2000 },
        { orderStatus: '취소주문', orderNumber: '10025', paymentDate: '2023-06-06 18:30:30', buyerName: '최지성', buyerID: 'ChoiJS09', recipientName: '최지성', productNumber: 'P02', productName: '연필', quantity: 2, price: 1500 },
        { orderStatus: '결제완료', orderNumber: '10026', paymentDate: '2023-06-07 09:00:45', buyerName: '김영희', buyerID: 'KimYH06', recipientName: '김영희', productNumber: 'P01', productName: '볼펜', quantity: 3, price: 2000 },
        { orderStatus: '상품준비중', orderNumber: '10027', paymentDate: '2023-06-07 10:30:00', buyerName: '이수영', buyerID: 'LeeSY11', recipientName: '이수영', productNumber: 'P03', productName: '공책', quantity: 4, price: 2500 },
        { orderStatus: '배송중', orderNumber: '10028', paymentDate: '2023-06-07 12:15:30', buyerName: '박지성', buyerID: 'ParkJS03', recipientName: '박지성', productNumber: 'P04', productName: '마우스', quantity: 2, price: 15000 },
        { orderStatus: '배송완료', orderNumber: '10029', paymentDate: '2023-06-07 14:05:10', buyerName: '최은영', buyerID: 'ChoiEY04', recipientName: '최은영', productNumber: 'P05', productName: '키보드', quantity: 1, price: 30000 },
        { orderStatus: '취소주문', orderNumber: '10030', paymentDate: '2023-06-07 15:30:30', buyerName: '김철수', buyerID: 'KimCS01', recipientName: '김철수', productNumber: 'P10', productName: '커터칼', quantity: 1, price: 3000 }
      ],
      currentPage: 1,
      ordersPerPage: 20,
      filteredStatus: ''
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.orders.length / this.ordersPerPage)
    },
    displayedOrders () {
      const start = (this.currentPage - 1) * this.ordersPerPage
      const end = start + this.ordersPerPage
      return this.orders.slice(start, end).filter(order => this.filteredStatus === '' ? true : order.orderStatus === this.filteredStatus)
    },
    paginationWidthAuto () {
      const maxPage = Math.ceil(this.orders.length / this.ordersPerPage)
      return maxPage * 36 + (maxPage - 1) * 16
    }
  },
  methods: {
    getOrderCountByStatus (status) {
      return this.orders.filter(order => order.orderStatus === status).length
    },
    setCurrentPage (page) {
      this.currentPage = page
    },
    filterOrdersByStatus (status) {
      this.filteredStatus = status
    }
  }
}
</script>

<style>
    @import '@/style/order.css';
</style>
