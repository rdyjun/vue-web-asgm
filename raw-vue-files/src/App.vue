<template>
  <SideBar v-if="!isLogin" />
  <HeaderLine v-if="!isLogin" />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <FooterLine v-if="!isLogin" />
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeaderLine from '@/components/HeaderLine.vue'
import FooterLine from '@/components/FooterLine.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    HeaderLine,
    FooterLine
  },
  computed: {
    isLogin () {
      return this.$route.path === '/login' || this.$route.path === '/register'
    }
  }
}
</script>

<style>
@import '@/style/wrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 120px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
