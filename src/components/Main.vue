<template>
  <div id="site_main">
    <!-- section music is life -->

    <div class="music_life">
      <div class="rectangle"></div>
      <h1>Music is life</h1>
      <div class="line_break"></div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          quaerat quisquam eum, ex perspiciatis blanditiis quidem odit minima
          nostrum quae aspernatur reprehenderit similique necessitatibus veniam
          repellat quod?
        </p>
      </div>
    </div>
  </div>
  <!-- site_main -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.music_life {
  text-align: center;
  color: white;
  height: 250px;
  background-color: #323844;
  margin: auto;
  position: relative;
}

.description {
  width: 900px;
  position: absolute;
  left: 50%;
  margin-left: -450px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.music_life p {
  padding-top: 2rem;
}

h1 {
  font-size: 40px;
  padding-top: 50px;
  padding-bottom: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.line_break {
  width: 300px;
  height: 2px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  background-color: #3e4657;
}

.rectangle {
  position: absolute;
  left: 50%;
  margin-left: -175px;
  width: 350px;
  height: 15px;
  background-color: #ea4a56;
}
</style>
