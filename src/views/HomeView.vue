<template>
  <div class="home">
    <HeaderLine />
    <SideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeaderLine from '@/components/HeaderLine.vue'

export default {
  name: 'HomeView',
  components: {
    SideBar,
    HeaderLine
  }
}

</script>
