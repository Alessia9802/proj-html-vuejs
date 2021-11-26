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
    <!-- section latest band news -->
    <div class="macro_area">
      <div class="caption">
        <h1 class="title_band">Latest Band News</h1>
        <div class="line_break"></div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quaerat quisquam eum, ex perspiciatis blanditiis quidem odit minima
            nostrum quae aspernatur reprehenderit similique necessitatibus
            veniam repellat quod?
          </p>
        </div>
      </div>
      <!-- griglia -->
      <div class="container">
        <div class="sidebar">
          <div class="tech">
            <!-- <img src="../assets/img/blog_music_techo.jpg" alt="" /> -->
          </div>
          <div class="columns">
            <div class="guitar"></div>
            <div class="collection"></div>
          </div>
          <div class="concert_rock"></div>
        </div>
        <div class="next_bar">
          <div class="old_school"></div>
          <div class="legend"></div>
        </div>
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
  color: white;
  text-align: center;
}

.music_life p,
.macro_area p {
  padding-top: 2rem;
}

h1 {
  font-size: 40px;
  padding-top: 50px;
  padding-bottom: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  text-align: center;
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

.macro_area {
  background-color: #252a33;
  height: 1500px;
  position: relative;
}

.container {
  position: absolute;
  margin-top: 8rem;
  background-color: red;
  width: 1000px;
  height: 1200px;
  left: 50%;
  margin-left: -500px;
  display: flex;
}

.tech,
.concert_rock {
  width: 650px;
  height: 250px;
  background-color: salmon;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.columns {
  display: flex;
}
.guitar {
  width: 310px;
  height: 600px;
  background-color: seagreen;
  margin: 1rem 1rem 1rem 0;
}

.collection {
  width: 310px;
  height: 600px;
  background-color: rgb(46, 97, 139);
  margin: 1rem 1rem 2rem 1rem;
}

.old_school,
.legend {
  height: 565px;
  width: 300px;
  background-color: steelblue;
  margin: 0 1rem 2rem;
}
</style>
