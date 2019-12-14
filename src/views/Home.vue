<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>MARVUE</h1>
    <Welcome msg="Best boilerplate Vuejs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
