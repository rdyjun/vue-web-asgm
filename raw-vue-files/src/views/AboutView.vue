<template>
  <div class="about">
    <h1>자기소개</h1>
    <div id="aboutTop">
      <div class="imageContainer">
        <img :src="imgSrc">
      </div>
      <div class="personalInfo">
        <div v-for="val in userDataTitle" :key="val"><p class="str">{{ val }}</p><p>{{ userData[val] }}</p></div>
      </div>
    </div>
    <div class="infoContainer">
      <div class="goals">
        <h2>꿈 또는 목표</h2>
        <p>{{ dream }}</p>
      </div>
      <div class="skills">
        <h2>기술</h2>
        <p>{{ skills }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgSrc from '@/assets/img.jpeg'

export default {
  name: 'AboutView',
  data () {
    return {
      imgSrc: imgSrc,
      userData:
        {
          이름: '주성준',
          학과: '컴퓨터소프트웨어',
          학번: '20222296',
          나이: '24',
          Github: 'rdyjun'
        },
      userDataTitle: ['이름', '학과', '학번', '나이', 'Github'],
      dream: '전공 과정에서 배운 내용을 토대로 데이터를 공부하여, 데이터 엔지니어가 되는 것이 저의 첫 번째 목표입니다. 이에 그치지 않고, 데이터와 관련된 다양한 분야를 배우고 실무에 적용해보고 싶으며, 머신러닝, 딥러닝 교육 등을 통해 더욱 정확하고 올바른 데이터를 관리 & 통계 & 예상 데이터 생성 하는 것이 목표 입니다.',
      skills: '페이지 설명에 앞서 로그인 페이지의 주소가 /login으로,\nnpm run serve 실행 시 첫 페이지가 메인(/) 페이지로 이동됩니다.\n배포한 페이지의 주소는 https://rdyjun.github.io/vue-web-asgm/ 입니다.\n우측 상단의 로그아웃 버튼을 통해 로그인 페이지로 이동할 수 있습니다.\n로그인 페이지에 적용된 기능으로, watch를 통해 입력되는 비밀번호 데이터를 감시하여 8글자 미만이라면 빨간색으로 힌트를 출력하도록 하였습니다. \n또한 methods를 통해 아이디, 비밀번호 입력란에 마우스 클릭(onFocus) 했을 때 힌트를 주고자 box-shadow에 컬러를 주었습니다. \n로그인 버튼, 회원가입 버튼, 깃허브, 카카오톡, 구글 버튼에 모두 methods에 정의된 moveToMainWithAlert 함수를 사용하여\nalert출력 후 메인 페이지로 이동하도록 하였습니다.\n\n회원가입도 마찬가지로 가입 버튼을 누르면 메인 페이지로 이동하게 구성하였으며,\n데이터를 입력하지 않을 경우 가입 버튼을 누를 수 없게 됩니다.\n\n로그인을 통해 메인 페이지로 이동하게되면, 여러 데이터들이 출력됩니다.\n왼쪽에 gnb와 상단에 헤더, 하단에 푸터가 존재합니다.\n메인으로 HomeView가 출력되며, 배열을 통해 상단에 발송정보를 출력하였습니다.\n하단에는 각 카테고리별 데이터를 출력하는 카드이며,\n모두 컴포넌트로 분리하여 작업하였습니다. 각 데이터는 배열로 만들어졌으며,\nv-for를 통해 출력하였습니다. 판매자 평점의 경우 데이터 수정 시 watch로 색상이 변경되도록 하였습니다.\n\n헤더에는 로그아웃 기능만 구현되었으며, 로그아웃 버튼 클릭 시 로그인 페이지로 넘어갑니다.\n\n사이드바는 각 페이지로 이동하게되며, 로고 클릭 시 다시 HomeView로 이동합니다.\n사이드바 메뉴에 마우스를 올리면 색이 애니메이션 되면서 바뀝니다.\n\n상품관리 페이지 클릭 시 상품을 관리하는 페이지로 이동되며 vue에서 관리되는 data를 table 형식으로 출력합니다.\ncheckbox input박스는 맨 위 checkbox를 클릭 시 전체 선택 및 전체 해제 됩니다. 이 역시 watch 입니다.\n\n주문관리에는 주문 목록을 출력하며, 상단의 각 카테고리(결제완료 및 상품준비 등)를 누르면\n각 카테고리의 데이터만 필터되어 출력됩니다. 또한 우측의 숫자 select 박스를 통해 출력될 개수입니다.\n개수가 넘어간다면 새 페이지를 만들게 됩니다.\n\n공지사항 페이지는 주문 페이지와 비슷하게 구성되었으며, 시작일과 종료일, 카테고리 지정을 통해 필터가 가능합니다.\n필터 제거를 통해 모두 제거할 수 있습니다.'
    }
  }
}
</script>

<style>
@import '@/style/about.css';

</style>
