<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12 title">
          AWESOMEVUE
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 link-parent">
          <ul class="link-group">
            <li><strong>Resources</strong></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Components & Library</a></li>
            <li><a href="#">UI Layout</a></li>
            <li><a href="#">Frameworks</a></li>
            <li><a href="#">UI Utilities</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Dev Tools</a></li>
            <li><a href="#">Scaffold</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container footer">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  text-align: left;
}

.title {
  font-family: "Montserrat";
  font-weight: 700;
  color: #333;
  font-size: 80px;
  line-height: 80px;
  word-break: break-all;
  letter-spacing: 4px;
}

.nav {
  font-weight: 500;
  margin-bottom: 8px;
}

.link-parent {
  padding-bottom: 10px;
}

.link-group {
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  padding-top: 4px;
  height: auto;
  overflow: visible;
}

li {
  position: relative;
  float: left;
  display:block;
  white-space: normal;
  font-weight: 400;
  padding-right: 8px;
}

li, a {
  color: #333;
}

li:hover {
  position: relative;
}

hr {
  padding: 0px;
  margin: 0px;
  border: solid .126rem;
  color: #FFF;
}

body {
  height: 100%;
  background: #ffa800;
  background: -moz-spannear-gradient(-45deg, #ffa800 0%, #ea3f60 100%);
  background: -webkit-spannear-gradient(-45deg, #ffa800 0%,#ea3f60 100%);
  background: linear-gradient(135deg, #ffa800 0%,#ea3f60 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa800', endColorstr='#ea3f60',GradientType=1 );
}

/* unvisited spannk */
item-box > a:link {
  font-weight: 600;
  color: #7B1C99;
}

/* visited spannk */
a:visited {
  color: #333;
}

/* mouse over spannk */
a:hover {
  color: #333;
}

.footer {
  margin-bottom: 10px;
}
</style>
