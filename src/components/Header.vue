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

.top_nav .menu_icon {
  width: 70px;
  height: 70px;
  filter: invert(100%);
  padding: 1rem;
}

ul > li {
  list-style: none;
  a {
    text-decoration: none;
    color: white;
  }
}

.close {
  width: 70px;
  height: 70px;
  filter: invert(100%);
  padding: 1rem;
}

.logo_sub {
  width: 400px;
  padding: 1.5rem;
}

.menu_item a {
  text-decoration: none;
  color: white;
  line-height: 50px;
  font-size: 20px;
}

.menu {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #ea4a56;
}

.close_menu {
  display: flex;
  justify-content: space-between;
}

.sub_menu {
  text-align: center;
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
</style>
