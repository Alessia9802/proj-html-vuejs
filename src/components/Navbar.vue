<template>
  <div class="menu">
    <!-- close menu -->
    <img class="close" src="../assets/img/icon_x.png" alt="" />
    <div class="sub_menu">
      <div v-for="(item, i) in items" :key="i" class="menu_item">
        <a :href="item.link"> {{ item.title }} </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["title", "items"],
};
</script>

<style lang="scss">
.close {
  width: 40px;
  height: 40px;
  filter: invert(100%);
}

.menu_item a {
  text-decoration: none;
  color: white;
}

.menu {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #ea4a56;
}
</style>
