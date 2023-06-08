<template>
    <div class="Notice">
      <div id="noticeFilter">
        <label>시작일:
            <input type="date" v-model="filterStartDate" />
        </label>
        <label>종료일:
            <input type="date" v-model="filterEndDate" />
        </label>
        <label>카테고리:
            <select v-model="filterCategory">
                <option value="">선택</option>
                <option v-for="itm in noticeCategorys" :key="itm" :value="itm">{{ itm }}</option>
            </select>
        </label>
        <button id="resetFilterBtn" @click="resetFilter">필터 제거</button>
      </div>
      <table id="noticeTable">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="notice in paginatedNotices" :key="notice.id">
            <td>{{ notice.id }}</td>
            <td style="text-align: left; padding-left: 24px;">[{{ notice.category }}] {{ notice.title }}</td>
            <td>{{ notice.date }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination" :style="{width: paginationWidthAuto + 'px'}">
        <button class="noticeNumberBtn" v-for="pageNumber in maxPage" :key="pageNumber" @click="changePage(pageNumber)" :disabled="pageNumber === currentPage">
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'NoticeView',
  data () {
    return {
      notices: [
        { id: 1, title: '새로운 판매자 대시보드 기능이 추가되었습니다!', category: '기능 업데이트', date: '2023-05-01' },
        { id: 2, title: '판매자 커뮤니티가 오픈되었습니다!', category: '커뮤니티', date: '2023-05-02' },
        { id: 3, title: '상품 등록 방법이 간소화 되었습니다.', category: '상품 관리', date: '2023-05-03' },
        { id: 4, title: '판매 수수료가 조정되었습니다.', category: '수수료', date: '2023-05-04' },
        { id: 5, title: '오픈마켓 사용자 앱 업데이트 안내', category: '앱 업데이트', date: '2023-05-05' },
        { id: 6, title: '판매자 센터 전화번호 변경 안내', category: '연락처', date: '2023-05-06' },
        { id: 7, title: '상품 사진 업로드 방식 변경 안내', category: '상품 관리', date: '2023-05-07' },
        { id: 8, title: '판매자 이용 약관 변경 안내', category: '약관', date: '2023-05-08' },
        { id: 9, title: '상품 리뷰 관리 기능 업데이트 안내', category: '기능 업데이트', date: '2023-05-09' },
        { id: 10, title: '2024년 새해 목표 및 계획 소개', category: '계획', date: '2023-05-10' },
        { id: 11, title: '판매자 정보 수정 방법 안내', category: '판매자 정보', date: '2023-05-11' },
        { id: 12, title: '상품 가격 조정 방법 안내', category: '상품 관리', date: '2023-05-12' },
        { id: 13, title: '후기 관리 방법 업데이트', category: '리뷰', date: '2023-05-13' },
        { id: 14, title: '판매자 배송 안내 사항 업데이트', category: '배송', date: '2023-05-14' },
        { id: 15, title: '안전한 거래를 위한 팁 공유', category: '안전', date: '2023-05-15' },
        { id: 16, title: '판매자 이용 가이드라인 업데이트', category: '가이드라인', date: '2023-05-16' },
        { id: 17, title: '프로모션 참여 방법 안내', category: '프로모션', date: '2023-05-17' },
        { id: 18, title: '판매량 통계 조회 방법 안내', category: '통계', date: '2023-05-18' },
        { id: 19, title: '상품 카테고리 변경 방법 안내', category: '상품 관리', date: '2023-05-19' },
        { id: 20, title: '블랙프라이데이 이벤트 안내', category: '이벤트', date: '2023-05-20' },
        { id: 21, title: '상품 리턴 및 환불 규정 업데이트', category: '환불', date: '2023-05-21' },
        { id: 22, title: '판매자 대시보드 보안 업데이트 안내', category: '보안', date: '2023-05-22' },
        { id: 23, title: '크리스마스 이벤트 참여 방법 안내', category: '이벤트', date: '2023-05-23' },
        { id: 24, title: '영업이익 공개 및 계획 소개', category: '계획', date: '2023-05-24' },
        { id: 25, title: '신년 이벤트 참여 방법 안내', category: '이벤트', date: '2023-05-25' },
        { id: 26, title: '판매자 피드백 수렴 방법 안내', category: '피드백', date: '2023-05-26' },
        { id: 27, title: '구매자 문의 답변 방법 안내', category: '문의', date: '2023-05-27' },
        { id: 28, title: '보안 위협 대응 및 대비 안내', category: '보안', date: '2023-05-28' },
        { id: 29, title: '중요 공지사항 알림 설정 방법', category: '알림', date: '2023-05-29' },
        { id: 30, title: '공휴일 휴무 안내', category: '휴무', date: '2023-05-30' }
      ],
      filterStartDate: '',
      filterEndDate: '',
      filterCategory: '',
      currentPage: 1,
      noticesPerPage: 20,
      noticeCategorys: [
        '기능 업데이트', '커뮤니티', '상품 관리', '수수료', '앱 업데이트',
        '연락처', '약관', '계획', '판매자 정보', '리뷰',
        '배송', '안전', '가이드라인', '프로모션', '통계',
        '이벤트', '환불', '보안', '피드백', '문의',
        '알림', '휴무'
      ],
      paginationWidth: 48
    }
  },
  computed: {
    filteredNotices () {
      const startDate = this.filterStartDate ? new Date(this.filterStartDate) : null
      const endDate = this.filterEndDate ? new Date(this.filterEndDate) : null
      if (endDate) {
        endDate.setDate(endDate.getDate() + 1)
      }
      return this.notices.filter((notice) => {
        const noticeDate = new Date(notice.date)
        if (startDate === null && endDate === null) {
          return this.filterCategory === '' || notice.category === this.filterCategory
        } else if (startDate === null) {
          return (this.filterCategory === '' || notice.category === this.filterCategory) && noticeDate < endDate
        } else if (endDate === null) {
          return (this.filterCategory === '' || notice.category === this.filterCategory) && noticeDate >= startDate
        } else {
          return (this.filterCategory === '' || notice.category === this.filterCategory) && noticeDate >= startDate && noticeDate < endDate
        }
      })
    },
    paginatedNotices () {
      const start = (this.currentPage - 1) * this.noticesPerPage
      return this.filteredNotices.slice(start, start + this.noticesPerPage)
    },
    maxPage () {
      return Math.ceil(this.filteredNotices.length / this.noticesPerPage)
    },
    paginationWidthAuto () {
      return this.maxPage * 36 + (this.maxPage - 1) * 16
    }
  },
  methods: {
    changePage (pageNumber) {
      this.currentPage = pageNumber
    },
    resetFilter () {
      this.filterStartDate = ''
      this.filterEndDate = ''
      this.filterCategory = ''
    }
  }
}
</script>

<style scoped>
    @import '@/style/notice.css';
</style>
