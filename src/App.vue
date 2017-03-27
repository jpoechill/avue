<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12 title">
          AWESOMEVUE
        </div>
      </div>
    </div>
    <div class="container" style="background-color: white; width: 100%; margin-bottom: 10px; box-shadow: 0px 3px 6px rgba(20, 20, 20, .06);">
      <div class="container">
        <div class="row">
          <div class="col-md-12 link-parent">
            <ul class="link-group">
              <li><router-link to="/components" active-class="active" exact>Components & Libraries</router-link></li>
              <li><router-link to="/devtools" active-class="active" exact>Dev Tools</router-link></li>
              <li><router-link to="/frameworks" active-class="active" exact>Frameworks</router-link></li>
              <li><router-link to="/integrations" active-class="active" exact>Integrations</router-link></li>
              <li><router-link to="/projects" active-class="active" exact>Projects</router-link></li>
              <li><router-link to="/resources" active-class="active" exact>Resources</router-link></li>
              <li><router-link to="/uilayouts" active-class="active" exact>UI Layouts</router-link></li>
              <li><router-link to="/uiutilities" active-class="active" exact>UI Utilities</router-link></li>
              <li><router-link to="/utilities" active-class="active" exact>Utilities</router-link></li>
              <li><router-link to="/scaffold" active-class="active" exact>Scaffold</router-link></li>
            </ul>
          </div>
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
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 20px;
  text-align: left;
}

.title {
  font-family: "Montserrat";
  font-weight: 800;
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
  padding-bottom: 6px;
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
  font-size: 15px;
  position: relative;
  float: left;
  display:block;
  white-space: normal;
  font-weight: 500;
  margin-right: 6px;
}

li, a {
  color: #333;
}

li > a:hover {
  position: relative;
  /*color: #FFF;*/
}

hr {
  padding: 0px;
  margin: 0px;
  border: solid .126rem;
  color: #FFF;
}

body {
  height: auto;
  /*transition: background 4s;*/
  /*min-height: 100vh;*/
  background: #F98B1A;
  background: -moz-spannear-gradient(-45deg, #F98B1A 0%, #EF5A48 100%);
  background: -webkit-spannear-gradient(-45deg, #F98B1A 0%,#EF5A48 100%);
  background: linear-gradient(90deg, #F98B1A 0%,#EF5A48 100%);
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F98B1A', endColorstr='#ea3f60',GradientType=1 );*/
}

/* unvisited spannk */
item-box > a:link {
  font-weight: 600;
  color: #FFF;
}

strong {
  font-weight: 700;
}

/* visited spannk */
a:visited {
  text-decoration: none;
  color: #333;
}

a:active {
  /*text-decoration: none;*/
  color: blue;
}

/* mouse over spannk */
a:hover {
  /*text-decoration: none;*/
  color: #333;
}

.active {
  text-decoration: none !important;
  font-weight: 900;
  /*font-size: 100px;*/
}

.fadein {
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
         -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.footer {
  margin-bottom: 10px;
}
</style>
