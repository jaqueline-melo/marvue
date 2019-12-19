<template>
  <div class="about">
    <h1>MARVUE</h1>
    <Welcome msg="Best boilerplate Vuejs" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'About',
  components: {
    Welcome
  }
}
</script>

<style scoped>
.about{
  height: 100vh;
}
</style>
