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
      <div class="dropdown">
        <div id="myDropdown" class="dropdown-content show">
          <ul>
            <li>
              <a href="#"> {{ first_voice }} </a>
            </li>
            <li>
              <a href="#"> {{ second_voice }} </a>
            </li>
            <li>
              <a href="#">{{ third_voice }}</a>
            </li>
            <li>
              <a href="#">{{ fourth_voice }}</a>
            </li>
            <li>
              <a href="#">{{ fifth_voice }}</a>
            </li>
            <li>
              <a href="#">{{ sixth_voice }}</a>
            </li>
          </ul>
        </div>

        <img
          @click="myFunction()"
          class="menu_icon dropbtn"
          src="../assets/img/menu_hamburger.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- site_header -->
</template>

<script>
export default {
  name: "Header",
  props: {
    first_voice: String,
    second_voice: String,
    third_voice: String,
    fourth_voice: String,
    fifth_voice: String,
    sixth_voice: String,
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

//Build menu open on click

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>
