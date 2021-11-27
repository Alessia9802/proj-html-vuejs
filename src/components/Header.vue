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
      <img
        @click="isOpen = !isOpen"
        class="menu_icon"
        src="../assets/img/menu_hamburger.png"
        alt=""
      />
      <transition name="fade" appear>
        <div class="menu" v-if="isOpen">
          <!-- close menu -->
          <div class="close_menu">
            <img
              class="logo_sub"
              src="../assets/img/avada-music-logo-retina.png"
              alt=""
            />
            <img
              @click="isOpen = !isOpen"
              class="close"
              src="../assets/img/icon_x.png"
              alt=""
            />
          </div>
          <div class="sub_menu">
            <div v-for="(item, i) in items" :key="i" class="menu_item">
              <a :href="item.link"> {{ item.title }} </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- background text -->
    <div class="background_text">
      <h1>Untold Stories</h1>
      <p class="song">There is an untold stories behind every favorite song</p>
      <button class="latest_album">Latest album</button>
      <button class="live">Live dates</button>
    </div>
  </div>

  <!-- site_header -->
</template>

<script>
export default {
  name: "Header",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
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
  position: relative;
}

.top_nav > .logo {
  width: 400px;
  padding: 1.5rem;
}

.top_nav .menu_icon,
.close {
  width: 70px;
  height: 70px;
  filter: invert(100%);
  padding: 1rem;
  margin: 20px 30px;
}

ul > li {
  list-style: none;
  a {
    text-decoration: none;
    color: white;
  }
}

.logo_sub {
  width: 400px;
  padding: 1.5rem;
}

.menu_item a {
  text-decoration: none;
  color: white;
  line-height: 80px;
  font-size: 30px;
}

.menu {
  position: absolute;
  height: 100vh;
  width: 98.9vw;
  background-color: #ea4a56;
}

.close_menu {
  display: flex;
  justify-content: space-between;
}

.sub_menu {
  text-align: center;
  font-family: "Montserrat";
  font-size: 30px;
}

.fade-enter-active,
.fade-enter-leave {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  transition: all 0.5s ease-out;
  opacity: 0;
}

.background_text .song {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.background_text {
  text-align: center;
  color: white;
  h1 {
    font-size: 110px;
    margin-top: 5rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  p {
    /* padding: 1rem; */
    font-size: 25px;
    margin-bottom: 40px;
    /* font-family: "abhaya-libre"; */
  }
  button {
    width: 180px;
    padding: 1rem 1.5rem;
    margin: 5px;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
  }
  .latest_album {
    background-color: #ea4a56;
    color: white;
  }
  .live {
    border: 2px solid white;
    color: white;
    background: unset;
  }

  .live:hover {
    border: 2px solid black;
    color: black;
    background-color: white;
  }
}
</style>
