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
            <img
              class="img_tech"
              src="../assets/img/blog_music_techo.jpg"
              alt=""
            />
          </div>
          <div class="columns">
            <div class="guitar">
              <img
                class="img_guitar"
                src="../assets/img/blog-post3-600x900.jpg"
                alt=""
              />
            </div>
            <div class="collection">
              <img
                class="img_collection"
                src="../assets/img/blog-post4-600x900.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="concert_rock">
            <img
              class="img_rock"
              src="../assets/img/blog_flavor_rock-1200x600.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="next_bar">
          <div class="old_school">
            <img
              class="img_old"
              src="../assets/img/blog-post1-600x900.jpg"
              alt=""
            />
          </div>
          <div class="legend">
            <img
              class="img_legend"
              src="../assets/img/blog-post2-600x900.jpg"
              alt=""
            />
          </div>
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
  /* background-color: red; */
  width: 1035px;
  height: 1200px;
  left: 50%;
  margin-left: -500px;
  display: flex;
}

.tech,
.concert_rock {
  width: 650px;
  height: 260px;
  background-color: #323844;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.tech > .img_tech {
  width: 100%;
  height: 100%;
}

.concert_rock > .img_rock {
  width: 100%;
  height: 100%;
}

.columns {
  display: flex;
}
.guitar {
  width: 310px;
  height: 600px;
  background-color: #323844;
  margin: 1rem 1rem 1rem 0;
}

.guitar > .img_guitar {
  width: 100%;
}

.collection {
  width: 310px;
  height: 600px;
  background-color: #323844;
  margin: 1rem 1rem 2rem 1rem;
}

.collection > .img_collection {
  width: 100%;
}

.old_school,
.legend {
  height: 575px;
  width: 300px;
  background-color: #323844;
  margin: 0 1rem 2rem;
}

.old_school > .img_old {
  width: 100%;
}

.legend > .img_legend {
  width: 100%;
}
</style>
