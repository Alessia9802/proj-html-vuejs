<template>
  <div id="app">
    <Header :items="menu" />
    <Main />
    <Footer :items="menu" />
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
  data() {
    return {
      menu: [
        {
          title: "Home",
          link: "#",
        },
        {
          title: "Meet the Band",
          link: "#",
        },
        {
          title: "Live Dates",
          link: "#",
        },
        {
          title: "Latest News",
          link: "#",
        },
        {
          title: "Albums",
          link: "#",
        },
        {
          title: "Fans",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
</style>
