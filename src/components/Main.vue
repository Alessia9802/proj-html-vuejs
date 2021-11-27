<template>
  <div id="site_main">
    <!-- section music is life -->
    <div class="music_life">
      <div class="rectangle"></div>
      <h1>Music is life</h1>
      <div class="line_break"></div>
      <div class="description">
        <p class="text_headline">
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
          <p class="text_headline">
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
            <div class="block card_text">
              <h4>Technology and music</h4>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                obcaecati.
              </p>
            </div>
            <!-- hover effect -->
            <div class="effect_hover">
              <h3 class="hover_title">Technology and music</h3>
            </div>
          </div>
          <div class="columns">
            <div class="guitar">
              <img
                class="img_guitar"
                src="../assets/img/blog-post3-600x900.jpg"
                alt=""
              />
              <div class="side_block card_text">
                <h4>While my guitar gently weeps</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, obcaecati.
                </p>
              </div>
              <!-- hover effect -->
              <div class="effect">
                <h3 class="title">While my guitar gently weeps</h3>
              </div>
            </div>
            <div class="collection">
              <img
                class="img_collection"
                src="../assets/img/blog-post4-600x900.jpg"
                alt=""
              />
              <div class="side_block card_text">
                <h4>It just sounds better</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, obcaecati.
                </p>
              </div>
              <!-- hover effect -->
              <div class="effect">
                <h3 class="title">It just sounds better</h3>
              </div>
            </div>
          </div>
          <div class="concert_rock">
            <img
              class="img_rock"
              src="../assets/img/blog_flavor_rock-1200x600.jpg"
              alt=""
            />
            <div class="block card_text">
              <h4>The flavor of rock</h4>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                obcaecati.
              </p>
            </div>
            <!-- hover effect -->
            <div class="effect_hover">
              <h3 class="hover_title">The flavor of rock</h3>
            </div>
          </div>
        </div>
        <div class="next_bar">
          <div class="old_school">
            <img
              class="img_old"
              src="../assets/img/blog-post1-600x900.jpg"
              alt=""
            />
            <div class="side_block card_text">
              <h4>Taking it back to the old school</h4>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                obcaecati.
              </p>
            </div>
            <!-- over effect -->
            <div class="effect_last">
              <h3>Taking it back to the old school</h3>
            </div>
          </div>
          <div class="legend">
            <img
              class="img_legend"
              src="../assets/img/blog-post2-600x900.jpg"
              alt=""
            />
            <div class="side_block card_text">
              <h4>Sharing the stage with a legend</h4>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <!-- hover effect -->
            <div class="effect_last">
              <h3>
                Sharing the stage with <br />
                a legend
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- View all latest news -->
    <div class="news">
      <p>View all latest news</p>
    </div>
    <!-- Area quote -->
    <div class="quote">
      <div class="text_quote">
        <p>
          "I just listened to it and sai to myself, " Man, I really love this
          album." Still, today, it just sounds so fresh. It sounds full of
          ideas. These guys knew what they were doing. They're good. And they're
          inventive. I haven't heard anything this year that's as inventive. I
          don't really expect to."
        </p>
        <img
          class="play"
          src="../assets/img/band_interview_play_icon.png"
          alt=""
        />
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
  height: 340px;
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

.music_life .text_headline,
.macro_area .text_headline {
  padding-top: 3rem;
  color: #686877;
}

h1 {
  font-size: 60px;
  padding-top: 60px;
  padding-bottom: 40px;
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
  background-color: #0088cc;
}

.macro_area {
  background-color: #252a33;
  height: 1650px;
  position: relative;
}

.container {
  position: absolute;
  margin-top: 10rem;
  width: 1168px;
  height: 1300px;
  left: 50%;
  margin-left: -584px;
  display: flex;
}

.concert_rock > .img_rock {
  width: 100%;
  height: 100%;
}

.columns {
  display: flex;
}
.guitar {
  width: 360px;
  height: 540px;
  background-color: #323844;
  margin: 1rem 1rem 2rem 0;
  position: relative;
}

.effect {
  width: 0px;
  height: 540px;
  position: absolute;
  top: 0;
  padding-top: 250px;
  color: white;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  background-color: #0088cccb;
  visibility: hidden;
}

.guitar:hover .effect,
.collection:hover .effect {
  visibility: visible;
  width: 360px;
  transition: all 0.5s ease;
}

.guitar:hover .side_block,
.collection:hover .side_block {
  visibility: hidden;
}

.side_block {
  background-color: #323844;
  position: absolute;
  bottom: 0;
}

.guitar > .img_guitar {
  width: 100%;
}

.collection {
  width: 360px;
  height: 540px;
  background-color: #323844;
  margin: 1rem 1rem 2rem 1rem;
  position: relative;
}

.collection > .img_collection {
  width: 100%;
}

.old_school,
.legend {
  height: 577.5px;
  width: 385px;
  background-color: #323844;
  margin: 0 1rem 3rem;
  position: relative;
}

.effect_last {
  width: 0px;
  height: 577.5px;
  text-align: center;
  color: white;
  padding-top: 288px;
  top: 0;
  position: absolute;
  font-size: 18px;
  background-color: #0088cccb;
  visibility: hidden;
}

.old_school:hover .effect_last,
.legend:hover .effect_last {
  visibility: visible;
  width: 385px;
  transition: all 0.5s ease;
}

.old_school > .img_old {
  width: 100%;
}

.legend > .img_legend {
  width: 100%;
}

.tech,
.concert_rock {
  width: 750px;
  height: 300px;
  background-color: #323844;
  margin-right: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.effect_hover {
  width: 0;
  height: 300px;
  position: absolute;
  padding-top: 150px;
  text-align: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  background-color: #0088cccb;
  top: 0px;
  visibility: hidden;
}

.tech:hover .effect_hover,
.concert_rock:hover .effect_hover {
  width: 750px;
  transition: all 0.5s ease;
  visibility: visible;
}

.tech > .img_tech {
  width: 100%;
  height: 100%;
}

.block {
  position: absolute;
  width: 100%;
  height: 40%;
  background-color: #323844;
  bottom: 0px;
  visibility: visible;
}

.tech:hover .block,
.concert_rock:hover .block {
  visibility: hidden;
}

.card_text {
  padding: 1rem;
}

h4 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #0088cc;
  padding-bottom: 0.5rem;
}

.text {
  color: #666676;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.news {
  height: 120px;
  background-color: #0088cc;
  color: white;
  text-align: center;
}

.news:hover {
  background-color: white;
  color: black;
}
.news p {
  line-height: 120px;
  font-family: "Montserrat";
  text-transform: uppercase;
}

.quote {
  background-image: url("../assets/img/home-testimonial-parallax.jpg");
  background-size: cover;
  height: 700px;
  color: white;
  text-align: center;
  position: relative;
}
.text_quote {
  width: 700px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.text_quote p {
  line-height: 40px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 26px;
}

.play {
  margin-top: 2rem;
  width: 90px;
}
</style>
