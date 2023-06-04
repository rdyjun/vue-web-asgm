<template>
    <div class="menuOfCs">
      <p class="menutitle">취소/반품/교환</p>
        <ul>
            <li v-for="(item, idx) in menu" :key="item">
                <p id="mocmenus">{{ item }}</p><p id="moomenucounts">{{ menuCounts[idx] }}</p>
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
      menu: ['취소신청', '반품신청', '교환신청'],
      menuCounts: [4, 1, 3]
    }
  }
}

</script>

<style>
  .menuOfCs ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .menuOfCs ul li:last-child {
      border: none;
  }
  #mocmenus {
    width: 80%;
    text-align: left;
    font-size: 24px;
    font-weight: 500;
    line-height: 100px;
}
</style>
