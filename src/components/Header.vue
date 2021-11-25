<template>
  <div id="site_header">
    <div class="top_nav">
      <!-- logo -->
      <img
        class="logo"
        src="../assets/img/avada-music-logo-retina.png"
        alt=""
      />
      <!-- menu_nav -->

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Meet the Band</a></li>
        <li><a href="#">Live Dates</a></li>
        <li><a href="#">Latest News</a></li>
        <li><a href="#">Albums</a></li>
        <li><a href="#">Fans</a></li>
      </ul>
      <img class="menu_icon" src="../assets/img/menu_hamburger.png" alt="" />
    </div>
  </div>
  <!-- site_header -->
</template>

<script>
export default {};
</script>

<style lang="scss">
#site_header {
  background-size: cover;
  background-image: url("../assets/img/home_slider.jpg");
  height: 100vh;
}

.top_nav {
  justify-content: space-between;
  display: flex;
}

.top_nav > .logo {
  width: 400px;
  padding: 1.5rem;
}

.top_nav .menu_icon {
  width: 40px;
  height: 40px;
  filter: invert(100%);
}

ul > li {
  list-style: none;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
