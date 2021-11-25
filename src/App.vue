<template>
  <div id="app">
    <Header
      first_voice="Home"
      second_voice="Meet the Band"
      third_voice="Live Dates"
      fourth_voice="Latest News"
      fifth_voice="Albums"
      sixth_voice="Fans"
    />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
</style>
