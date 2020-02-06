<template>
  <v-container>
    <v-layout
      text-cente
      wrap
    >
      <v-flex
        xs12
      >
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  components: {}
}
</script>
