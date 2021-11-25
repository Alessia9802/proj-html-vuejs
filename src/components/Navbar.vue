<template>
  <div class="menu">
    <a href="#">
      {{ title }}
    </a>
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
</style>
