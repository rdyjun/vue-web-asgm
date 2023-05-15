<template>
    <div class="HeaderLine">
      <a><img v-bind:src="logoSrc"></a>
    </div>
  </template>

<script>
import logoSrc from '@/assets/logo.png'

export default {
  name: 'HeaderLine',
  data () {
    return {
      logoSrc: logoSrc
    }
  }
}
</script>

<style>
  @import '@/style/header.css';
  @import '@/style/wrap.css';
</style>
