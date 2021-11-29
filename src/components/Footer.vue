<template>
  <div id="site_footer">
    <div class="footer_menu">
      <!-- logo -->
      <img
        class="logo_footer"
        src="../assets/img/avada-music-logo-retina_color.png"
        alt=""
      />
      <!-- menu footer -->
      <div class="menu_footer">
        <div v-for="(item, i) in items" :key="i" class="item_footer">
          <a :href="item.link"> {{ item.title }} </a>
        </div>
      </div>
    </div>
    <div class="footer_social">
      <div class="copyright">
        <p>© Copyright 2012-2020 |</p>
        <p class="rights">
          avada theme by themefusion | all rights deserved | powered by
          wordpress
        </p>
      </div>
      <div class="social">
        <!-- facebook icon -->
        <div class="social_icon">
          <i class="fab fa-facebook-f"></i>
        </div>
        <!-- twitter icon -->
        <div class="social_icon">
          <i class="fab fa-twitter"></i>
        </div>
        <!-- instagram icon -->
        <div class="social_icon">
          <i class="fab fa-instagram"></i>
        </div>
        <!-- youtube icon -->
        <div class="social_icon">
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- site_footer -->
</template>

<script>
export default {
  name: "Footer",
  props: ["title", "items"],
};
</script>

<style lang="scss">
.footer_menu {
  height: 180px;
  background-color: #323844;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
}

.footer_social {
  height: 100px;
  background-color: #252a33;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
}

.logo_footer {
  width: 250px;
}

.menu_footer {
  display: flex;
  .item_footer {
    padding-right: 1rem;
    a {
      text-decoration: none;
      color: #727182;
      font-family: Georgia, "Times New Roman", Times, serif;
    }
  }
}

.copyright {
  color: #727182;
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  font-size: 14px;
}

.rights {
  text-transform: uppercase;
}

.social {
  display: flex;
}

.social_icon {
  width: 50px;
  height: 50px;
  background-color: #323844;
  margin: 0.5rem;
  text-align: center;
  border-radius: 3px;
  line-height: 50px;
}

.social i {
  color: #7d7b8d;
}
</style>
