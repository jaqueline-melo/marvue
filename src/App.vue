<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="#ffffff00"
    >
      <v-row
        class="white--text"
        justify="center"
      >
        <router-link
          to="/"
          tab="span"
          class="white--text"
        >
          <span>Home</span>
        </router-link>|
        <router-link
          to="/about"
          tab="span"
          class="white--text"
        >
          <span>About</span>
        </router-link>
      </v-row>
    </v-app-bar>

    <v-content
      class="content"
    >
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({})
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Marvel-Regular";
  src: url("./fonts/Marvel-Regular.ttf");
}

.content {
  background-color: rgb(180, 12, 12);
  background-image: linear-gradient(
      -150deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(125, 185, 232, 0) 15%,
      rgba(125, 185, 232, 0) 100%
    ),
    linear-gradient(
      150deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(125, 185, 232, 0) 15%,
      rgba(125, 185, 232, 0) 100%
    ),
    linear-gradient(
      -50deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(125, 185, 232, 0) 15%,
      rgba(125, 185, 232, 0) 100%
    ),
    linear-gradient(
      50deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(125, 185, 232, 0) 15%,
      rgba(125, 185, 232, 0) 100%
    );
}

.bar {
  background-color: #ffffff00;
}
</style>
