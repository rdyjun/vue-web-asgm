<template>
  <div class="home">
    <HeaderLine />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLine from '@/components/HeaderLine.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderLine
  }
}

</script>
