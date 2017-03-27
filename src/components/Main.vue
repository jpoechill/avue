[<template>
  <transition name="fade">
  <div style="width: 100%;">
    <!-- <transition name="fade"> -->
      <div class='item-box fadein' v-for='(item, index) in currentList'>
        <small>{{ index + 1 }}</small> <a :href="item.link"><strong>{{ capitalize(item.title) }}</strong></a>
        <div v-if="item.link" style="display: inline;">
          ({{ getHost(item.link) }}) </div> <br>
        <div class="item-description">
          <!-- A starter project to build single page Vue.js apps as stand-alone or for Laravel / Laravel Spark projects, based on Browserify and Semantic-ui) -->
          {{ item.description }}
        </div>
        <div class="tags pull-right" style="display: inline; width: 100%;">
          <!-- <div style="border: 0px;">
            <small>40 stars by 4 contributors </small><br>
          </div> -->
          <div style="pull-left">
            40 Stars
          </div>
          <div style="pull-left">
            4 Contributors
          </div> |
          <div style="pull-right">
            Vue.js
          </div>
          <div style="pull-right">
            Vuex Utilities
          </div>
          <div style="pull-right">
            Code Style
          </div>
        </div>
      </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        currentList: [],
        objResources: {
          'category': 'resources',
          'items': [
            {
              'description': '',
              'link': 'http://vuejs.org/guide/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Official Guide'
            },
            {
              'description': '',
              'link': 'http://vuejs.org/api/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'API Reference'
            },
            {
              'description': '',
              'link': 'https://github.com/vuejs/vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'GitHub Repo'
            },
            {
              'description': '',
              'link': '',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Release Notes'
            },
            {
              'description': 'Vue.js 資料まとめ(for japanese) by @hashrock',
              'link': 'https://gist.github.com/hashrock/f575928d0e109ace9ad0',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Japanese Translation'
            },
            {
              'description': 'Weekly dose of hand-picked Vue.js news',
              'link': 'http://vue-newsletter.com/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Newsletter'
            },
            {
              'description': 'Tips to become a better Vue.js developer',
              'link': 'http://vuetips.com',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Tips'
            },
            {
              'description': 'Wikipedia entry page for Vue.js',
              'link': 'https://en.wikipedia.org/wiki/Vue.js',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Wikipedia'
            },
            {
              'description': 'A Vue.js job portal to hire or get hired for all your Vue.js jobs',
              'link': 'https://vuejobs.com/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Jobs'
            },
            {
              'description': 'Vue.js official Twitter account',
              'link': 'https://twitter.com/vuejs',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Twitter'
            },
            {
              'description': '',
              'link': 'https://gitter.im/vuejs/vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Gitter Chat Room'
            },
            {
              'description': '',
              'link': 'http://forum.vuejs.org/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Official Forum'
            },
            {
              'description': 'Request a Vue.js module you wish existed or get ideas for modules',
              'link': 'https://github.com/vuejs/vue-requests',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Requests'
            },
            {
              'description': 'Telegram Group [Portuguese]',
              'link': 'https://t.me/vuejsbrasil',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueJS Brasil'
            },
            {
              'description': 'Telegram Channel & group (group link available in channel bio)',
              'link': 'https://telegram.me/vue_js',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueJS Iran'
            },
            {
              'description': '1300+ registered users worldwide',
              'link': 'https://vueslack.com/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Slack'
            },
            {
              'description': '',
              'link': 'http://www.fullstackradio.com/30',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Full Stack Radio #30 (11-23-2015)'
            },
            {
              'description': '',
              'link': 'https://devchat.tv/js-jabber/187-jsj-vue-js-with-evan-you',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'JavaScript Jabber #187 (11-25-2015)'
            },
            {
              'description': '',
              'link': 'https://changelog.com/184/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Changelog #184 (11-27-2015)'
            },
            {
              'description': '',
              'link': 'http://softwareengineeringdaily.com/2015/12/29/front-end-javascript-with-evan-you/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Software Engineering Daily (12-29-2015)'
            },
            {
              'description': '',
              'link': 'https://javascriptair.com/episodes/2016-03-30/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Javascript Air 016 (03-30-2016)'
            },
            {
              'description': 'Codecasts #2 - Falando Sobre Vuejs e Web Components (2016-08-19) [pt-BR]',
              'link': 'https://soundcloud.com/codecasts/2-falando-sobre-vuejs-e-web-components',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Codecasts #2'
            },
            {
              'description': '',
              'link': 'http://www.fullstackradio.com/50',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Full Stack Radio #50 (09-21-2016)'
            },
            {
              'description': '',
              'link': 'http://teahour.fm/2015/08/16/vuejs-creator-evan-you.html',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '和 Vue.js 框架的作者聊聊前端框架开发背后的故事 [zh-CN]'
            },
            {
              'description': '',
              'link': 'https://github.com/vuejs/vue/tree/dev/examples/todomvc',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js TodoMVC'
            },
            {
              'description': '',
              'link': 'https://github.com/anfelor/TodoMVC-CoffeeScript-and-Vue.js',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'CoffeeScript Version'
            },
            {
              'description': '',
              'link': 'https://github.com/vuejs/vue-hackernews',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js HackerNews Clone'
            },
            {
              'description': '',
              'link': 'https://laracasts.com/series/learn-vue-2-step-by-step',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js screencasts on Laracasts'
            },
            {
              'description': '',
              'link': 'http://www.sitepoint.com/whats-new-in-vue-js-1-0/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'What\'s New in Vue.js 1.0 on Sitepoint'
            },
            {
              'description': '',
              'link': 'https://auth0.com/blog/2015/11/13/build-an-app-with-vuejs/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Build an App with Vue.js: From Authentication to Calling an API on Auth0 blog'
            },
            {
              'description': '',
              'link': 'https://scotch.io/tutorials/create-a-github-file-explorer-using-vue-js',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Create a GitHub File Explorer Using Vue.js on Scotch.io'
            },
            {
              'description': '',
              'link': 'http://vegibit.com/vue-js-tutorial/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Tutorial on Vegibit'
            },
            {
              'description': '',
              'link': 'http://skyronic.com/2015/12/28/vue-project-scratch/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js build set-up from scratch with webpack, vue-loader and hot reload'
            },
            {
              'description': '',
              'link': 'http://skyronic.com/2016/01/03/vuex-basics-tutorial/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuex basics: Tutorial and explanation'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/watch?v=l1KHL-TX3qs',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuex introduction video - James Browne from London Vue.js Meetup #1'
            },
            {
              'description': '',
              'link': 'https://laravist.com/series/vue-js-1-0-in-action-series',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js 中文系列视频教程 on Laravist'
            },
            {
              'description': '',
              'link': 'http://coligo.io/vuejs-the-basics/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js: The Basics on Coligo.io'
            },
            {
              'description': '',
              'link': 'https://coligo.io/vuejs-components/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueJs: Components on Coligo.io'
            },
            {
              'description': '',
              'link': 'https://coligo.io/dynamic-components-in-vuejs/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Dynamic Components in Vue.js on Coligo.io'
            },
            {
              'description': '',
              'link': 'http://craigmckenna.com/develop-a-reactive-invoice-app-using-vue-js/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Develop a Reactive Invoice App using Vue.js on craigmckenna.com'
            },
            {
              'description': '',
              'link': 'http://coligo.io/vuejs-filters/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Understanding Filters in Vue.js on Coligo.io'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/watch?v=TGSJjDahlrQ',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Hybrid App Example with Laravel and Vue.js in portuguese by @vedovelli'
            },
            {
              'description': '',
              'link': 'http://coligo.io/markdown-editor-vuejs/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Creating a Markdown Editor with VueJs and GitHub\'s API on Coligo.io'
            },
            {
              'description': '',
              'link': 'http://coligo.io/real-time-analytics-with-nodejs-socketio-vuejs/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Building a Real-Time Web Analytics Dashboard with NodeJs, Socket.io, and VueJs on Coligo.io'
            },
            {
              'description': '',
              'link': 'http://oguzhan.in/vue-js-ile-uygulama-gelistirme/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Introduction Turkish Languag on oguzhan.in'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/watch?v=IlFk3cyRB0Y&list=PLM-Y_YQmMEqD2EWfWpSbiV3WgShRRW3FE&index=7',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js VideoTutoral Series in Spanish (3-8-2016) on YouTube by Juan Andrés Núñez'
            },
            {
              'description': '',
              'link': 'http://coligo.io/bookmarking-app-electron-vuejs-firebase/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Building a Bookmarking App with Electron, VueJs, and Firebase on Coligo.io'
            },
            {
              'description': '',
              'link': 'https://coligo.io/learn-vuex-by-building-notes-app/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Learn Vuex by Building a Notes App on Coligo.io'
            },
            {
              'description': '',
              'link': 'https://styde.net/curso-de-vue-js/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Screencast Series in Spanish on Styde.net'
            },
            {
              'description': '',
              'link': 'https://github.com/bhnddowinf/vuejs-learn',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '讲解Vue.js 官网 中文-含代码、百度云、youtube on bhnddowinf'
            },
            {
              'description': '',
              'link': 'https://blog.pusher.com/exploring-real-time-apps-with-vuejs-es2016-and-webpack/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Exploring Real Time Apps with VueJS, ES2015 and Webpack on Pusher'
            },
            {
              'description': '',
              'link': 'https://www.sekolahkoding.com/track/belajar-vue-js',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js in Bahasa Indonesia on sekolahkoding.com'
            },
            {
              'description': '',
              'link': 'https://coligo.io/building-a-mobile-app-with-cordova-vuejs/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Building a Mobile App with Cordova and Vue.js on Coligo.io'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/playlist?list=PL5r0NkdgM0UOxb4Hl81FV5UIgexwTf8h7',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js from Scratch Series in Russian on YouTube by .dev'
            },
            {
              'description': '',
              'link': 'http://codeguida.com/post/526/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Створення сервісу для зберігання файлів з Flask, RethinkDB та Vue.js, ч. 1 Ukraine'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/playlist?list=PLjwdMgw5TTLW-mAtlR46VajrKs4dep3y0',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueJS 2 French tutorial Français par Grafikart'
            },
            {
              'description': '',
              'link': 'https://github.com/jayway/vue-js-workshop',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Jayway Vue.js 2 workshop. Build an e-commerce site with vue-router, vuex and vue-resource'
            },
            {
              'description': '',
              'link': 'http://wijmo.com/blog/how-to-create-great-vuejs-applications-using-wijmo-controls/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'How to Create Great VueJS Applications Using Wijmo Controls'
            },
            {
              'description': '',
              'link': 'https://github.com/bhnddowinf/vuejs2-learn',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '**讲解Vue.js 2 官网 中文-含代码、百度云、youtube ** on bhnddowinf'
            },
            {
              'description': '',
              'link': 'https://www.gitbook.com/book/xpepermint/vue-js-cheatsheet/details',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Cheatsheet: Server-side Applications, Router, Vuex Store, GraphQL and more by @xpepermint'
            },
            {
              'description': '',
              'link': 'https://www.theodo.fr/blog/2016/10/medium-like-image-loading-with-vue-js/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Medium like Image Loading with Vue.js'
            },
            {
              'description': '',
              'link': 'https://metricloop.com/blog/how-to-use-vuex-in-a-laravel-spark-project',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'How to Use Vuex in a Laravel Spark Project on Metric Loop'
            },
            {
              'description': '',
              'link': 'https://metricloop.com/blog/how-to-set-up-modules-in-vuex',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'How To Set Up Modules in Vuex on Metric Loop'
            },
            {
              'description': '',
              'link': 'https://laracasts.com/series/learn-vue-2-step-by-step',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Learn Vue 2: Step By Step on Laracasts'
            },
            {
              'description': '',
              'link': 'http://javascript.ctolib.com/docs/read/vue-js-c-index.html',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js 中文教程'
            },
            {
              'description': '',
              'link': 'https://www.sitepoint.com/up-and-running-vue-js-2-0/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Up and Running with the Vue.js 2.0 Framework on SitePoint'
            },
            {
              'description': '',
              'link': 'https://metricloop.com/blog/how-to-make-api-calls-with-vuex',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'How to make API Calls with Vuex on Metric Loop'
            },
            {
              'description': '',
              'link': 'https://metricloop.com/blog/how-to-use-vuex-to-build-a-feature',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'How to Use Vuex to Build a Feature on Metric Loop'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/playlist?list=PLwAKR305CRO_1yAao-8aZiQnBqJeyng4O',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js 2.0 Fundamentals on YouTube by DevMarketer'
            },
            {
              'description': '',
              'link': 'https://medium.com/js-dojo/vuex-for-the-clueless-the-missing-primer-on-vues-application-data-store-33fa51ffc3af#.2j25xpfui',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuex For The Clueless — The Missing Primer On Vue’s Application Data Store'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/watch?v=Jxefsv5Zqkw&t=3s',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Real-time Grid Component Laravel, Vue.js, Vuex & Socket.io'
            },
            {
              'description': '',
              'link': 'https://www.udemy.com/vuejs-2-the-complete-guide',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueJS 2 - The Complete Guide (incl. Vuex) - Udemy Tutorial'
            },
            {
              'description': '',
              'link': 'https://egghead.io/courses/develop-web-apps-with-vue-js',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Develop Web Apps with Vue.js on egghead.io'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/playlist?list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js 2 - Getting Started'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/playlist?list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js 2 & Vuex (Basics)'
            },
            {
              'description': '',
              'link': 'https://www.youtube.com/playlist?list=PLa3NvhdFWNipwk1KXeUpVQnAiAfuBw4El',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Türkçe VueJS Eğitim Videoları on YouTube by Fatih Acet'
            },
            {
              'description': '',
              'link': 'https://devblog.digimondo.io/building-a-json-tree-view-component-in-vue-js-from-scratch-in-six-steps-ce0c05c2fdd8#.738ok0l4p',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Building a JSON Tree View Component in Vue.js from Scratch in Six Steps on digimondo devblog by Arvid Kahl'
            },
            {
              'description': '',
              'link': 'https://github.com/xanf/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Let\'s Vue! - OpenLecture 2017.01 in Russian on YouTube by Illya Klymov (@xanf)'
            },
            {
              'description': '',
              'link': 'https://afropolymath.svbtle.com/bootstrapping-your-first-vue-js-project/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Bootstrapping your first Vue.js application using vue-cli by @afropolymath'
            },
            {
              'description': '',
              'link': 'https://github.com/Detachment/Build-vue-hackernews-2.0-from-scratch',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Bulid vue-hackernews-2.0 from Scratch by @ Detachment'
            },
            {
              'description': '',
              'link': 'https://medium.com/@JiriChara/role-based-authorization-for-your-vue-js-and-nuxt-js-applications-using-vue-kindergarten-fd483e013ec5#.kp81np177',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Role Based Authorization for your Vue.js and Nuxt.js Applications Using vue-kindergarten'
            },
            {
              'description': '',
              'link': 'http://matthiashager.com/complete-vuejs-application-tutorial',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Complete Vue.js Application Tutorial - Creating a Simple Budgeting App with Vue by @matthiaswh'
            },
            {
              'description': '',
              'link': 'http://forum.vuejs.org/topic/39/starter-application-with-jwt-auth-sample-backend-api',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Starter Application with JWT Auth + sample backend API in Laravel'
            },
            {
              'description': '',
              'link': 'https://github.com/brandonjpierce/node-webkit-boilerplate',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Node Webkit + Vue example by @brandonjpierce'
            },
            {
              'description': '',
              'link': 'https://github.com/superlloyd/VueSamples',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Samples by @superlloyd'
            },
            {
              'description': '',
              'link': 'https://github.com/kazupon/vue-router-hackernews',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'HackerNews clone with vue.js + vue-router by @kazupon'
            },
            {
              'description': '',
              'link': 'https://github.com/bradstewart/electron-boilerplate-vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Electron + Vue example by @bradstewart'
            },
            {
              'description': '',
              'link': 'https://github.com/inca/voie-example',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Single page application example (Vue + Voie) by Boris Okunskiy'
            },
            {
              'description': '',
              'link': 'https://github.com/rajabishek/begin',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Begin - Task Manager SPA written in Vue + Lumen by Raj Abishek'
            },
            {
              'description': '',
              'link': 'https://github.com/BosNaufal/vue-mini-shop',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Mini Shop by BosNaufal'
            },
            {
              'description': '',
              'link': 'https://github.com/mul14/vue-soundcloud',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue SoundCloud by mul14'
            },
            {
              'description': '',
              'link': 'https://github.com/haydenbbickerton/feature-requests-app',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Feature Requests (Laravel + Vue Combo) by haydenbbickerton'
            },
            {
              'description': '',
              'link': 'https://github.com/yjj5855/node-vue-server-webpack',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Cookbook (Vue1.0 + express) by @yjj5855: A demo first screen rendering of a service'
            },
            {
              'description': '',
              'link': 'https://github.com/websemantics/strong-together',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Strong Together - A starter project to build single page Vue.js apps as stand-alone or for Laravel / Laravel Spark projects, based on Browserify and Semantic-ui) by WebSemantics'
            },
            {
              'description': '',
              'link': 'https://github.com/sjerrys/vuetest',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuetest: an ad admin web with user auth, bootstrap ui, uploader, WYSIWYG editor in iframe'
            },
            {
              'description': '',
              'link': 'https://github.com/andylei18/vue-shopping',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-shopping by andylei18'
            },
            {
              'description': '',
              'link': 'https://github.com/shinygang/Vue-cnodejs',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue-cnodejs,060 by @shinygang'
            },
            {
              'description': '',
              'link': 'https://github.com/hilongjw/vue-zhihu-daily',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-zhihu-daily by hilongjw'
            },
            {
              'description': '',
              'link': 'https://github.com/PetervMeijgaard/jwt-example',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'jwt-example by @petervmeijgaard'
            },
            {
              'description': 'Multiplayer online chess game by gustaYo',
              'link': 'https://github.com/gustaYo/vue-chess',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueChess'
            },
            {
              'description': '',
              'link': 'https://github.com/gustaYo/ngexplorer-vuejs-client',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Ngexplorer-vuejs-client -Vue client for Ngexplorer by gustaYo'
            },
            {
              'description': '',
              'link': 'https://pengfu.github.io/vue-2048/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue 2048 (Vue + Webpack) by @pengfu: Popular 2048-Game implemented using Vue,Webpack,Sass,ES6'
            },
            {
              'description': '',
              'link': 'https://github.com/BosNaufal/vue-simple-pwa',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Simple PWA by BosNaufal'
            },
            {
              'description': '',
              'link': 'https://github.com/aweber1/tour-of-heroes-vue2',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Tour of Heroes (Vue 2.0): A Vue 2.0 port of the Angular 2.0 Tour of Heroes demo app. Highlights: ES6/7, render functions, JSX, revue (redux bindings for Vue), vue-router, Airbnb eslint, webpack. by @aweber1'
            },
            {
              'description': '',
              'link': 'https://github.com/echoVic/vue-table-pagination',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-table-pagination A table with pagination by echovic'
            },
            {
              'description': '',
              'link': 'https://github.com/delay/feathers-vue-blog-admin-demo',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Feathers and Vue 2.0 Blog Admin Demo Demo for using Feathers with Vue 2.0. It includes authentication, vue-router, vue-infinite-loading and roles by delay'
            },
            {
              'description': '',
              'link': 'https://github.com/cs1707/vue-zhihudaily-2.0',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-zhihudaily-2.0 Zhihudaily demo built with Vue 2.0, vue-router & vuex, with server-side rendering. by cs1707'
            },
            {
              'description': '',
              'link': 'https://github.com/fishenal/Todos_Vuejs',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-demo-todolist a simply vue2.0 demo built with Vue 2.0, vue-cli. by fishenal'
            },
            {
              'description': '',
              'link': 'https://github.com/liujians/vue-adminLte-vue-router',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-AdminLte by liujians'
            },
            {
              'description': '',
              'link': 'https://github.com/ycwalker/CMS-of-Blog',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue(2.0) + Node.js: A blog content manage system (CMS) by @ycwalker'
            },
            {
              'description': '',
              'link': 'https://github.com/gustaYo/vue-chess',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'ngexplorer-quasar -Implementation of Ngexplorer with quasar framework by gustaYo'
            },
            {
              'description': '',
              'link': 'https://github.com/moonou/zhihu-daily-vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'zhihu-daily-vue a zhihu daily base on vue2.0 by moonou'
            },
            {
              'description': '',
              'link': 'https://github.com/qxl1231/generator-loopback-vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'loopback-vue loopback+vue+vue-resource,ionic-app,vue page分页功能,authenticate 权限控制,accesstoken机制,credentials,CI,docker qxl1231'
            },
            {
              'description': '',
              'link': 'https://github.com/kfei/vue-s3-dropzone',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-s3-dropzone A Vue.js drag-and-drop component uploads files to AWS S3 serverlessly'
            },
            {
              'description': '',
              'link': 'https://github.com/TIGERB/easy-vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'easy-vue a easy example using the vue to implement easy web with vue 2.0, vuex 2.0, vue-router 2.0, vue-infinite-scroll 2.0, vue-progressbar 2.0 by TIGERB'
            },
            {
              'description': '',
              'link': 'https://github.com/metricloop/vuex-events-messaging-demo',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuex Events Messaging Demo by Metric Loop'
            },
            {
              'description': '',
              'link': 'https://github.com/akifo/vue-memo',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-memo a simple demo build with Vue.js(>2.x.), vue-router(>2.x.), vuex(>2.x.), vuex-router-sync@next(>3.x.) and Firebase(>3.6.x) by akifo'
            },
            {
              'description': '',
              'link': 'https://github.com/ChangJoo-Park/Resume-Vue',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Resume Vue JSON based Resume based on Vue 2.0 by ChangJoo Park'
            },
            {
              'description': '',
              'link': 'https://github.com/Angarsk8/phoenix_vuejs_authentication_example',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'App example with JWT Authentication developed with Phoenix Framework, Vue and Vue Router (demo) by @Angarsk8'
            },
            {
              'description': '',
              'link': 'https://github.com/shershen08/vue.js-v2-crud-application',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Sample CRUD app with router in Vue 2.0 by @shershen08'
            },
            {
              'description': '',
              'link': 'https://github.com/mgyongyosi/VuejsSSRSample',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'ASP.NET Core Vue.js server-side rendering sample by @mgyongyosi'
            },
            {
              'description': '',
              'link': 'https://github.com/sejr/vuefire-quickstart',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuefire-quickstart - Documented Firebase integration w/ webpack and eslint, by @sejr'
            },
            {
              'description': '',
              'link': 'https://github.com/rokups/hello-vue-django',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'hello-vue-django Vue.js and Django integration starter project with hot code reload'
            },
            {
              'description': '',
              'link': 'https://github.com/Angarsk8/loopa-news',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Real Time Social News App developed with Phoenix, Vue, Vue Router and Vuex (demo) by @Angarsk8'
            },
            {
              'description': '',
              'link': 'https://github.com/CaiYiLiang/simply-calculator-vuejs',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-calculator a simply calculator built with Vue 2.0, vue-cli(webpack-simple). by CaiYiLiang'
            },
            {
              'description': '',
              'link': 'https://github.com/CaiYiLiang/vue-demos/tree/master/wikipediaViewer-vuejs',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Wikipedia-viewer A simple wikipedia-viewer page built with vue2.x ,vue-router,vue-cli(webpack-simple) and ajax(jsonp). by CaiYiLiang'
            },
            {
              'description': '',
              'link': 'https://github.com/superman66/vue2.x-douban',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2.x-douban A simple of douban movie build with vue2.x,vue-router and axios(豆瓣电影). by Superman'
            },
            {
              'description': '',
              'link': 'https://github.com/jcc/vue-laravel-example',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-laravel-example Vue - Laravel - Example is a simple example to set Vue with Laravel. by Jiajian Chan'
            },
            {
              'description': '',
              'link': 'https://github.com/hal0gen/vue-foundation',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-foundation A demo app integrating VueJS with Zurb Foundation, built using the webpack vue-cli template'
            },
            {
              'description': '',
              'link': 'https://github.com/MarkPieszak/aspnetcore-Vue-starter',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'aspnetcore-Vue-starter A VueJS 2 starter template as part of an asp.net MVC dotnetcore project. This template includes the VueJS client app and a backend API controller'
            },
            {
              'description': '',
              'link': 'https://github.com/yujiahaol68/reddit-app',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-reddit-app A Reddit SPA demo built with Vue 2.X , Vue Router 2 , Vuex and axios. Using Muse-UI and vue-cli webpack template by @yujiahaol68'
            },
            {
              'description': '',
              'link': 'https://github.com/pluto1114/vue-music-qq',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-music-qq A qq-music project is based on vue-cli. The pages are simple and smooth'
            },
            {
              'description': '',
              'link': 'https://github.com/ShuvoHabib/Vue-JSX-and-Vue-Redux-Navigation-Tab',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'NavigationTab with Vue-Redux and Plain VueJSX Navigation Tab with both plain Vue JSX and Vue + Redux Binding'
            },
            {
              'description': '',
              'link': 'https://veggiemap.herokuapp.com/',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Veggie Map An interactive demo using Vuejs + Vue router + Leaflet and Firebase'
            },
            {
              'description': '',
              'link': 'https://github.com/johnnynotsolucky/samples/tree/master/vuejs-d3',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuejs-d3 examples how to use d3 for visualisations'
            },
            {
              'description': '',
              'link': '',
              'parent': 'resources',
              'tags': [
                'books',
                'Second tag'
              ],
              'title': 'The Majesty Of Vue.js by Alex Kyriakidis & Kostas Maniatis, Packt. (Nov 2016)'
            },
            {
              'description': '',
              'link': '',
              'parent': 'resources',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Learning Vue.js 2 by Olga Filipova, Packt. (Dec 2016)'
            }
          ],
          'shortname': 'resources'
        },
        objProjects: {
          'category': 'projects',
          'items': [
            {
              'description': 'Modular and lightweight CMS built with Symfony components and Vue.js',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'PageKit'
            },
            {
              'description': 'Compare npm packages and spot download trends',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Npmcharts.com'
            },
            {
              'description': 'A personal music streaming server that works',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Koel'
            },
            {
              'description': 'Simple RSS Reader made using atom electron and vue.js',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'RSS Reader'
            },
            {
              'description': 'A simple music player built by electron and vue',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Gokotta'
            },
            {
              'description': 'An admin portal based on AdminLTE with vue.js integration',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'CoPilot'
            },
            {
              'description': 'A simple tool for doing collaborative retrospectives in agile teams',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Retrospectify'
            },
            {
              'description': 'Cms based on mongodb, nodejs, koa, vue and more',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'jade-press'
            },
            {
              'description': 'Organize Your GitHub Stars With Ease',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'astralapp'
            },
            {
              'description': 'An Elegant Markdown Editor',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'EME'
            },
            {
              'description': 'A spa which can help you check your github in a better way',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Github-explorer'
            },
            {
              'description': 'Start your dev servers from your browser and get local domains in seconds',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Hotel'
            },
            {
              'description': 'A Twitter client written with modern web technologies',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Surfbird'
            },
            {
              'description': 'A math-aware search engine',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Approach0'
            },
            {
              'description': 'Self Hosted Movie, Series and Anime Watch List',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Flox'
            },
            {
              'description': 'A game for identifying JavaScript tools and libraries',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'JavaScript Guessing Game'
            },
            {
              'description': 'A blog based on GitHub pages by Vue.js 2 + Webpack 2',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-ghpages-blog'
            },
            {
              'description': 'Blog platform, built with Laravel and Vue.js',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuedo'
            },
            {
              'description': 'A Vue.js project for music',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-music163'
            },
            {
              'description': 'Real-time collaboration tool, it combines Pomodoro Technique with a team status share board',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Tomato5'
            },
            {
              'description': 'Tabs Manager for Google Chrome',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Peek-a-tab'
            },
            {
              'description': 'A service which provides simple access to thousands of video tutorials on web developing and programming',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Web Learn'
            },
            {
              'description': 'A tool to convert CSV, TSV to/from JSON',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'ExcelJSON'
            },
            {
              'description': 'A material blog built with Laravel5.3 and Vue2.x',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Materialize-blog'
            },
            {
              'description': 'Generate vue single file component on browser',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VueCompomnentGenerator'
            },
            {
              'description': 'News for web designers and developers aggregated from multiple sources (Reddit, Hacker News and Prominent Blogs)',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'SDR News'
            },
            {
              'description': 'Open source blog built with Laravel and Vue.js',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'PJ Blog'
            },
            {
              'description': 'Lulumi-browser is a light weight browser coded with Vue.js 2 and Electron',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Lulumi-browser'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-wordpress-pwa'
            },
            {
              'description': 'Browse and test a REST API described with the OpenAPI 3.0 Specification',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'OpenAPI 3 viewer'
            },
            {
              'description': 'A collection of UI controls with VueJS support',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Wijmo'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Collate Notes'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Laravel Spark'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vice Video'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Formlets'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Laracasts'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'esa.io'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '稀土掘金'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Prague Airport'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Portfolio Site'
            },
            {
              'description': 'Mistake-free writing service',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Grammarly'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Laravist'
            },
            {
              'description': 'An app aimed for personal trainers and their clients',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Atiiv'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Statamic'
            },
            {
              'description': 'A tool to report water dam level using the U.S. Geological Survey database',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Embalses!'
            },
            {
              'description': 'A simple way for travellers to create a blog based on a Map',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'TravelMap'
            },
            {
              'description': 'Custom shirt builder',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Proper Cloth Shirt Builder'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'CheckIt'
            },
            {
              'description': 'A browser extension which show notifications and news from reddit',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Reddit News'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Powerpuff Yourself by Cartoon Networks'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '小桃酱'
            },
            {
              'description': 'Web app that plays randomly all top 50 songs from the soundcloud charts',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'cloudradioo'
            },
            {
              'description': 'Simple and beautiful notepad to Markdown with Vue.js and Local Storage API',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vNotes'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Open Function Computers'
            },
            {
              'description': 'A webmail client written in Vue.js for Dermail, a mail systemn written in node.js',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Dermail'
            },
            {
              'description': 'A patent search engine',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'octimine'
            },
            {
              'description': 'A web based MySQL and PostgreSQL data browser and dashboard manager',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Draxed'
            },
            {
              'description': 'A simple way to look up wikipedia articles near you. Or simply navigate to a place and find interesting wikipedia information. Responsive web app',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Leapspotleap'
            },
            {
              'description': 'A Personal blog. FE and CMS are in same vue SPA',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'X-SONGTAO'
            },
            {
              'description': 'Film & events schedule SPA made with Vue & Laravel 5. Russian',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Cinemateka'
            },
            {
              'description': 'A Job Board and career platform operating in Iran',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Jobinja'
            },
            {
              'description': 'Show all Putian hostiptal information',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '滚蛋吧！莆田系'
            },
            {
              'description': 'Recruiting Platform',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Jobi : '
            },
            {
              'description': 'Ecommerce website for high quality spices. Checkout, cart, the product detail page, and search are built using Vue. Checkout is a single page app written with Vue & Vuex',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'The Spice House'
            },
            {
              'description': 'Webinar / Live events app',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Livestorm'
            },
            {
              'description': 'A technology services and solutions website',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Metric Loop'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Holden'
            },
            {
              'description': 'Online Training for Language Proficiency Tests',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Global-Exam'
            },
            {
              'description': 'A webapp that helps student better plan their courses (hobby project, not in affiliation with UCSC)',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'SlugSurvival'
            },
            {
              'description': 'A group decision making tool built using Vue.js, vue-sortable, Semantic UI and Zappa',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'FreePoll.Online'
            },
            {
              'description': 'Track github project\'s new release on mac menubar using vue.js with electron',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'GitRelease'
            },
            {
              'description': 'Applications online flight bookings',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': '12BAY.VN'
            },
            {
              'description': 'Playground for Rapid Frontend Experiments',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'PLAYCODE.IO'
            },
            {
              'description': 'A calendar app built with Vue.js, Vuex and server-side rendering',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Calendar'
            },
            {
              'description': 'Underground House Music Online Radio',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'The Void Radio'
            },
            {
              'description': 'Shorten URLs with VueJS & Bitly API',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Bitly Vue'
            },
            {
              'description': 'API Based/Decoupled CMS using VueJS for it\'s frontend',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Storyblok'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'WizzAir'
            },
            {
              'description': 'Guide to moving different platform/hosting sites to HTTPS',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Moving to HTTPS'
            },
            {
              'description': 'Discover great books and bookshelves on different topics',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Booknshelf'
            },
            {
              'description': 'Text-editor-like weekly planner',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Coypu'
            },
            {
              'description': 'A real time display of top news activity on Hacker News',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Top HN'
            },
            {
              'description': 'Euronews is a multilingual news media service, headquartered in Lyon, France',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Euronews'
            },
            {
              'description': 'Roozame is a persian smart news media service',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Roozame روزامه�'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Koumoul'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Jean-Pierre Morin | 1700 LAPOSTE'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Facebook NewsFeed'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'YouTube AdBlitz 2016'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Omnisense Experience'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Louis Ansa Website (portfolio)'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Djeco.com'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Tolks.io'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Meet Graham'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'NOIZE original'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Alibaba'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Baidu'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Sina Weibo'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Xiaomi'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Ele.me'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Optimizely'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Expedia'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'UCWeb'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Line'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Nintendo'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Celtra'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Sainsbury\'s'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'AREX'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'DJI'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Octimine GmbH'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Hunliji'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'GitLab'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Clemenger BBDO Melbourne'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'ZenMate'
            },
            {
              'description': '',
              'link': '',
              'parent': 'projects',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Codeship'
            }
          ],
          'shortname': 'projects'
        },
        objComponents: {
          'category': 'Components & Libraries',
          'items': [
            {
              'description': 'Data table simplify',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuetable-2'
            },
            {
              'description': 'Vue.js 2 grid components',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-tables-2'
            },
            {
              'description': 'A vue.js server side component to create dynamic tables',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-datasource'
            },
            {
              'description': 'Vue adaptor for ag-Grid',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'ag-grid-vue'
            },
            {
              'description': 'Vue2.0 DataTables, based on element-ui',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-data-tables'
            },
            {
              'description': 'Vue.js agnostic non-blocking notifications library',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-notifications'
            },
            {
              'description': 'A toast plugin for vue/vue2',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-easy-toast'
            },
            {
              'description': 'Responsive Touch Compatible Toast plugin for VueJS',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-toasted'
            },
            {
              'description': 'Radial progress bar component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-radial-progress'
            },
            {
              'description': 'A lightweight progress bar for vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-progressbar'
            },
            {
              'description': 'Simplest Youtube Like Loading Bar Component For Vue 2',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2-loading-bar'
            },
            {
              'description': 'Yet another top progress loading bar component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-top-progress'
            },
            {
              'description': 'Progress bars is based on nprogress for Vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-nprogress'
            },
            {
              'description': 'Easy tooltips with Vue 2.x',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'v-tooltip'
            },
            {
              'description': 'Popper.js directive for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-popper-component'
            },
            {
              'description': 'A VueJS (2.x) Plugin for multiple modals windows with a single component instance',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuedals'
            },
            {
              'description': 'The sweetest library to happen to modals. Now available for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'sweet-modal-vue'
            },
            {
              'description': 'Scrolls a image slower than the window to create a neat optical effect',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-parallax'
            },
            {
              'description': 'Vue.js component for parallax image scroll effects',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-parallaxy'
            },
            {
              'description': 'Webpack based - load only what you need - svg inline icons',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-icons'
            },
            {
              'description': 'Font Awesome component for Vue.js, using inline SVG',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-awesome'
            },
            {
              'description': 'Side-nav',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-side-nav'
            },
            {
              'description': 'Slider Component of Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-easy-slider'
            },
            {
              'description': 'A responsive carousel(namely slider or swiper) component for Vue.js v2.x+',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-l-carousel'
            },
            {
              'description': 'Swiper(slide) component for Vue.js(1.x ~ 2.x)',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-awesome-swiper'
            },
            {
              'description': 'Vue Slider Component based on lory',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-lory'
            },
            {
              'description': 'Vue component for Slick-carousel',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-slick'
            },
            {
              'description': 'A Vue Component for Flickity.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-flickity'
            },
            {
              'description': 'Vue Carousel 3D - Beautiful, flexible and touch supported 3D Carousel for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Carousel 3D'
            },
            {
              'description': 'A flexible, responsive, touch-friendly carousel for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-carousel'
            },
            {
              'description': 'VueJS component wrapping Morris.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-morris'
            },
            {
              'description': 'Google Charts plugin for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-charts'
            },
            {
              'description': 'Vue.js wrapper for Chart.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-chartjs'
            },
            {
              'description': 'Based on Vue2.0 wrapper for ChartJs',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'hchs-vue-charts'
            },
            {
              'description': 'ECharts component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-echarts'
            },
            {
              'description': 'Simple, elegant spark lines for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuetrend'
            },
            {
              'description': 'Highcharts component for Vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-highcharts'
            },
            {
              'description': 'Vue.js(v2.x+) component wrap for ECharts.js(v3.x+)',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-echarts-v3'
            },
            {
              'description': 'A tiny timeago component for Vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-timeago'
            },
            {
              'description': 'Jalaali Moment.js filters for your Vue.js project',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-moment-jalaali'
            },
            {
              'description': 'Vue calendar fullCalendar. No jQuery required. Schedule events management',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-fullcalendar'
            },
            {
              'description': 'A simple events calendar for Vue2, no dependencies except Vue2',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-event-calendar'
            },
            {
              'description': 'Google maps component for vue with 2-way data binding',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2-google-maps'
            },
            {
              'description': 'Vue 2 components for Leaflet maps',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2-leaflet'
            },
            {
              'description': 'A Vue 2.x component of easy-to-config music players with controls',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-aplayer'
            },
            {
              'description': 'An infinite scroll plugin for Vue.js 1.0 & Vue.js 2.0',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-infinite-loading'
            },
            {
              'description': 'Infinite scroll component for Vue.js 2',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-mugen-scroll'
            },
            {
              'description': 'An infinite scroll directive for vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-infinite-scroll'
            },
            {
              'description': 'A Powerful and Highspeed Markdown Parser for Vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-markdown'
            },
            {
              'description': 'A JSON Tree View Component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-json-tree-view'
            },
            {
              'description': 'A Vue.js component for sharing links to social networks, work with Vue.js 1.X or 2.X',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-social-sharing'
            },
            {
              'description': 'A Vue.js 2 component to draw QR codes on an HTML Canvas using qrious',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-qriously'
            },
            {
              'description': 'The directive of vue 2.x for qart.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-qart'
            },
            {
              'description': 'An avatar component for vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-avatar'
            },
            {
              'description': 'Touch ripple component for Vue.js(1.x ~ 2.x)',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-touch-ripple'
            },
            {
              'description': 'Vue component that simulates a user typing, selecting, and erasing text',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-typer'
            },
            {
              'description': 'Vue 2 virtual keyboard component',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-keyboard'
            },
            {
              'description': 'Image comparison component, works with Vue.js 2.x',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-twentytwenty'
            },
            {
              'description': 'Cookie info plugin for Vue.js 2.x',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-cookie-law'
            },
            {
              'description': 'Calendar and datepicker component with material design for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-datepicker'
            },
            {
              'description': 'A dropdown time picker (hour|minute|second) for Vue 2.x, with flexible time format support',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2-timepicker'
            },
            {
              'description': 'A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuejs-datepicker'
            },
            {
              'description': 'Flatpickr for VueJS',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-flatpickr'
            },
            {
              'description': 'A native Vue.js component that provides similar functionality to Select2 without the overhead of jQuery',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-select'
            },
            {
              'description': 'Universal select/multiselect/tagging component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-multiselect'
            },
            {
              'description': 'Slider for vue1.x and vue2.x',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-slider-component'
            },
            {
              'description': 'Vue component allowing drag-and-drop sorting in sync with View-Model. Based on Sortable.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuedraggable'
            },
            {
              'description': 'Drag and drop so simple it hurts',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-dragula'
            },
            {
              'description': 'A sortable list directive with Vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'awe-dnd'
            },
            {
              'description': 'Vue instant allows you to easily create custom search controls with auto suggestions for your vue 2 applications',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-instant'
            },
            {
              'description': 'A tags input component based on Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-tagsinput'
            },
            {
              'description': 'Vue.js 2.0 Input Tag Component',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-input-tag'
            },
            {
              'description': 'A flexible, highly available district picker for picking provinces, cities and districts of China for Vue.js 2.x',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'v-distpicker '
            },
            {
              'description': 'Vue Color Pickers for Sketch, Photoshop, Chrome & more',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-color'
            },
            {
              'description': 'An on/off switch component for Vue.js with theme support',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-switches'
            },
            {
              'description': 'Masked input component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-masked-input'
            },
            {
              'description': 'Input mask for React, Angular, Ember, Vue, & plain JavaScript',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-text-mask'
            },
            {
              'description': 'An ip input implemented by Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-ip-input'
            },
            {
              'description': 'Input field component to display currency value based on Vue',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-numeric'
            },
            {
              'description': 'Quill editor component for Vue2',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-quill-editor'
            },
            {
              'description': 'A mobiledoc editor component toolkit for Vuejs',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-mobiledoc-editor'
            },
            {
              'description': 'A MediumEditor component for Vue 2',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2-medium-editor'
            },
            {
              'description': 'VueJS wrapper for Froala Editor',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-froala'
            },
            {
              'description': 'A vue plugin for image to crop and upload',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-core-image-upload'
            },
            {
              'description': 'Simple and hackable file uploader for VueJs. Supports Vue >= 2.1',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-clip'
            },
            {
              'description': 'Simple File upload component for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-simple-upload'
            },
            {
              'description': 'A context menu component for vue js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-context-menu'
            },
            {
              'description': 'Search places and address using Google Maps API',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-gmaps'
            },
            {
              'description': 'A component for rendering Vue components with live editor and preview',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vuep'
            },
            {
              'description': 'Places component is based on places.js for Vue 2.x. Turn any input into an address autocomplete',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-places'
            },
            {
              'description': 'Password strength meter based on zxcvbn in vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-password-strength-meter'
            },
            {
              'description': 'Float label pattern for Vue.js',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-float-label'
            },
            {
              'description': 'A VueJS (2.x) button component that requires you to keep pressing to confirm a given action',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-longpress'
            },
            {
              'description': 'Embed component is based on embed.js for Vue 2.x, a component that embeds emojis, media, maps, tweets, gists, code, services and markdown',
              'link': '',
              'parent': 'components',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-embed'
            }
          ],
          'shortname': 'components'
        },
        objUILayouts: {
          'category': 'UI Layouts',
          'items': [
            {
              'description': 'A waterfall layout component for Vue.js',
              'link': 'https://github.com/MopTym/vue-waterfall',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Waterfall'
            },
            {
              'description': 'Vue component for isotope filter & sort magical layouts',
              'link': 'https://github.com/David-Desmaisons/Vue.Isotope',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Isotope'
            },
            {
              'description': 'A draggable and resizable grid layout, for Vue.js',
              'link': 'https://github.com/jbaysolutions/vue-grid-layout',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Grid Layout'
            },
            {
              'description': 'Drag Zone component for Vue.js(2.x)',
              'link': 'https://github.com/surmon-china/vue-drag-zone',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Drag Zone'
            },
            {
              'description': 'Vue.js directive for masonry blocks layouting',
              'link': 'https://github.com/shershen08/vue-masonry',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Masonry'
            },
            {
              'description': 'Flexbox based responsive fraction grid system for Vue.js',
              'link': 'https://github.com/bkzl/vue-fraction-grid',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Fraction Grid'
            },
            {
              'description': 'A vue (2.x) component support big data by using virtual scroll list',
              'link': 'https://github.com/tangbc/vue-virtual-scroll-list',
              'parent': 'uilayouts',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Virtual Scroll List'
            }
          ],
          'shortname': 'uilayouts'
        },
        objFrameworks: {
          'category': 'Frameworks',
          'items': [
            {
              'description': 'Quasar Framework',
              'link': 'https://github.com/quasarframework/quasar',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Quasar Framework'
            },
            {
              'description': 'Material design for Vue.js',
              'link': 'https://github.com/marcosmoura/vue-material',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Material'
            },
            {
              'description': 'Material Component Framework for Vue.js 2',
              'link': 'https://github.com/vuetifyjs/vuetify',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuetify'
            },
            {
              'description': 'Full featured HTML framework for building iOS & Android apps',
              'link': 'https://github.com/nolimits4web/Framework7',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Framework7 Vue'
            },
            {
              'description': '[Chinese] Vue UI Components based on WeUI',
              'link': 'https://github.com/airyland/vux',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'VUX'
            },
            {
              'description': 'Mobile app development framework and SDK using HTML5 and JavaScript. Create beautiful and performant cross-platform mobile apps. Based on Web Components, and provides bindings for Angular 1, 2, React and Vue.js',
              'link': 'https://github.com/OnsenUI/OnsenUI',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Onsenui'
            },
            {
              'description': 'Reusable Material Design Lite components for Vue.js',
              'link': 'https://github.com/posva/vue-mdl',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue MDL'
            },
            {
              'description': 'A lightweight collection of essential UI components written with Vue and inspired by Material Design',
              'link': 'https://github.com/JosephusPaye/Keen-UI',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Keen UI'
            },
            {
              'description': 'Vue Admin Panel Framework, Powered by Vue 2.0 and Bulma 0.3',
              'link': 'https://github.com/vue-bulma/vue-admin',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Admin'
            },
            {
              'description': 'UIkit with all the power of Vue',
              'link': 'https://github.com/vuikit/vuikit',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuikit'
            },
            {
              'description': 'A Vue.js 2.0 UI Toolkit for Web',
              'link': 'https://github.com/ElemeFE/element',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Element UI'
            },
            {
              'description': 'Bootstrap 4 Components for Vue.js 2',
              'link': 'https://bootstrap-vue.github.io',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Bootstrap Vue'
            },
            {
              'description': 'Bootstrap 3 components implemented by Vue2',
              'link': 'https://github.com/wxsms/uiv',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'UIV'
            },
            {
              'description': 'Mobile UI elements for Vue.js',
              'link': 'https://github.com/ElemeFE/mint-ui',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Mint UI'
            },
            {
              'description': 'Framework for server-rendered Vue.js applications',
              'link': 'https://github.com/nuxt/nuxt.js',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Nuxt'
            },
            {
              'description': 'IOS and Android Apps with HTML & JavaScript - develop, build and deploy - free and open source',
              'link': 'https://github.com/scriptPilot/app-framework',
              'parent': 'frameworks',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'App Framework'
            }
          ],
          'shortname': 'frameworks'
        },
        objUIUtilities: {
          'category': 'UI Utilities',
          'items': [
            {
              'description': 'Vue-ShortKey - plugin for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Shortkey'
            },
            {
              'description': 'Throttle events based on requestAnimationFrame',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Throttle Event'
            },
            {
              'description': 'Waypoint component for Vue, this is the easiest way to trigger a function when you scroll',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Waypoint'
            },
            {
              'description': 'Reusable clickaway directive for reusable Vue.js components',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Clickaway'
            },
            {
              'description': 'Fires an event on a specific scroll position',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Scrollfire'
            },
            {
              'description': 'Vue directive to detect resize events with deboucing and throttling capacity',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Resize Directive'
            },
            {
              'description': 'Define your custom viewports and use them in your components',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Viewports'
            },
            {
              'description': 'Vue.js(2.x) directive to hide/show HTML-elements with the Bootstrap 4, 3 or self defined breakpoints',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Responsive'
            },
            {
              'description': 'JavaScript powered forms for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Formly'
            },
            {
              'description': 'A reusable focus directive for reusable Vue.js components',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Focus'
            },
            {
              'description': 'A schema-based form generator component for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Form Generator'
            },
            {
              'description': 'Validator component for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Validator'
            },
            {
              'description': 'Simple Vue.js input validation plugin',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vee Validate'
            },
            {
              'description': 'RawModel.js plugin for Vue.js v2. Form validation has never been easier',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Rawmodel'
            },
            {
              'description': 'Simple, lightweight model-based validation for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuelidate'
            },
            {
              'description': 'A simple yet flexible validator library for vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Simple Vue Validator'
            },
            {
              'description': 'Vue.js 2 form component that integrates jQuery Validation and Axios',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Vform'
            },
            {
              'description': 'Comprehensive form validation for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Form'
            },
            {
              'description': 'Automatic scroll-to-bottom directive for Vue.js 2.0',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Chat Scroll'
            },
            {
              'description': 'Adds a directive that listens for click events and scrolls to elements',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Scrollto'
            },
            {
              'description': 'The official router for Vue.js',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Router'
            },
            {
              'description': 'A Vue.js plugin for lazyload your Image or Component in your application',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Lazyload'
            },
            {
              'description': 'Lazy load background images for Vue 2',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Lazy Background Images'
            },
            {
              'description': 'Vue progressive image loading plugin',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': ' Vue Progressive Image'
            },
            {
              'description': 'A lazyload plugin for Vue.js v2.x+',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue L Lazyload'
            },
            {
              'description': 'A simple vue.js plugin to paginate data',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Paginate'
            },
            {
              'description': 'Vue.js 2 pagination component',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Pagination 2'
            },
            {
              'description': 'Best and complete pagination plugin for Vue.js. Inspired in Angular Bootstrap Pagination',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Uib Pagination'
            },
            {
              'description': 'A Vue.js(v2.x+) component for creating pagination',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue.js Paginate'
            },
            {
              'description': 'A Vue.js 2.0 port of Animate.css. For use with Vue\'s built-in transitions',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue2 Animate'
            },
            {
              'description': 'Manage the meta information of the head tag, a simple and easy way',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Head'
            },
            {
              'description': 'Manage page meta info in Vue 2.0 components. SSR + Streaming supported',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Meta'
            },
            {
              'description': '',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Move a DOM node to a target DOM node'
            },
            {
              'description': '',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-dom-portal - An escape hatch for DOM Elements in Vue.js components'
            },
            {
              'description': '',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue2-filters - A collection of standard filters Vue 1.* adapted for use in Vue 2.*'
            },
            {
              'description': '',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-svgicon - A tool to create svg icon components. (vue 2.x)'
            },
            {
              'description': '',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-resource-progressbar-interceptor - Interceptor that ties a progressbar to all requests, that it is clear that something is loading'
            },
            {
              'description': '',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-images-loaded - Vue.js 2.0 directive to detect images loading'
            },
            {
              'description': 'A v-visible directive for VueJS (2.x), like v-show but for visibility',
              'link': '',
              'parent': 'uiutilities',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Visible'
            }
          ],
          'shortname': 'uiutilities'
        },
        objUtilities: {
          'category': 'utilities',
          'items': [{
            description: "Sets of ECMAScript / Typescript decorators that helps you write Vue component easily",
            link: "https://github.com/vue-typed/vue-typed",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Typed"
          }, {
            description: "Typescript decorators to make vue feel more typescripty",
            link: "https://github.com/itsFrank/vue-typescript",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Typescript"
          }, {
            description: "Vue.js and Property Decorator",
            link: "https://github.com/kaorun343/vue-property-decorator",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Property Decorator"
          }, {
            description: "Decorators to use TypeScript classes as Vue.js 2.0 components",
            link: "https://github.com/locoslab/vue-typescript-component",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Typescript Component"
          }, {
            description: "TypeScript declaration file that allows using 'import' with .vue files",
            link: "https://github.com/locoslab/vue-typescript-import-dts",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Typescript Import DTS"
          }, {
            description: "Type-check your script in your vue-loader",
            link: "https://github.com/HerringtonDarkholme/vue-ts-loader",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue TS Loader"
          }, {
            description: "The HTTP client for Vue.js",
            link: "https://github.com/pagekit/vue-resource",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Resource"
          }, {
            description: "Async computed properties for Vue.js",
            link: "https://github.com/foxbenjaminfox/vue-async-computed",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Async Computed"
          }, {
            description: "A tiny library for handling JSONP request",
            link: "https://github.com/LancerComet/vue-jsonp",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Jsonp"
          }, {
            description: "V-Model is a model plugin for Vue.js, like ng-resource",
            link: "https://github.com/huanleguang/v-model",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "V-Model"
          }, {
            description: "A helper to mock your http response, based on vue-resource's inteceptor",
            link: "https://github.com/noru/vue-resource-mock",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Resource Mock"
          }, {
            description: "Internationalization plugin for Vue.js",
            link: "https://github.com/kazupon/vue-i18n",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue i18n"
          }, {
            description: "VueJS plugin for translations",
            link: "https://github.com/javisperez/vuetranslate",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Translate Plugin"
          }, {
            description: "Localization plugin for vue.js 2.0 using vuex as store",
            link: "https://github.com/dkfbasel/vuex-i18n",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex i18n"
          }, {
            description: "Translate your Vue.js applications with gettext",
            link: "https://github.com/Polyconseil/vue-gettext",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Gettext"
          }, {
            description: "Simple event handling for Vue.js",
            link: "https://github.com/cklmercer/vue-events",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Events"
          }, {
            description: "Event handling plugin for VueJS",
            link: "https://github.com/sandeepk01/vue-event-handler",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Event Handler"
          }, {
            description: "Vue.js localStorage plugin with types support",
            link: "https://github.com/pinguinjkeke/vue-local-storage",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue-Localstorage"
          }, {
            description: "Vue plugin for work with LocalStorage from Vue context",
            link: "https://github.com/RobinCK/vue-ls",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Ls"
          }, {
            description: "Centralized State Management for Vue.js",
            link: "https://github.com/vuejs/vuex",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex"
          }, {
            description: "Synchronize Vue State with the Browser URL, Server Backend, and other endpoints",
            link: "https://github.com/buhrmi/vue-sync",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Sync"
          }, {
            description: "Redux binding for Vue",
            link: "https://github.com/revue/revue",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Revue"
          }, {
            description: "Binding Solutions for Vue & Redux",
            link: "https://github.com/Vuedeux/vuedeux",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuedeux"
          }, {
            description: "Persist Vuex state with localStorage",
            link: "https://github.com/JiriChara/vue-kindergarten",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Kindergarten"
          }, {
            description: "A plugin for syncing Vuex store with js-data",
            link: "https://github.com/robinvdvleuten/vuex-persistedstate",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Persistedstate"
          }, {
            description: "",
            link: "https://github.com/AlexandreBonaventure/vuex-jsdata-plugin",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Plugin Jsdata"
          }, {
            description: "Local state management within Vuex",
            link: "https://github.com/ktsn/vuex-local",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Local"
          }, {
            description: "Utilities for vuex to easily create and manage actions",
            link: "https://github.com/varHarrie/vuex-action",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Action"
          }, {
            description: "A Helper utility to simplify the usage of REST APIs with Vuex. Based on axios",
            link: "https://github.com/christianmalek/vuex-rest-api",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Rest Api"
          }, {
            description: "A Vuex plugin utility to cache action those will make remote request",
            link: "https://github.com/superwf/vuex-cache",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Cache"
          }, {
            description: "Vuex state persistance and synchronization between tabs/windows",
            link: "https://github.com/RashadSaleh/vuex-basement",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Basement"
          }, {
            description: "Share vuex mutations between tabs/windows",
            link: "https://github.com/xanf/vuex-shared-mutations",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vuex Shared Mutations"
          }, {
            description: "Vue Prop Types definitions",
            link: "https://github.com/dwightjack/vue-types",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Types"
          }, {
            description: "A simple factory/provider extension for Vue.js, like services in Angular",
            link: "https://github.com/ye-will/vue-factory",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Factory"
          }, {
            description: "Eslint plugin for vue.js projects",
            link: "https://github.com/vuejs/eslint-plugin-vue",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Eslint Plugin Vue"
          }, {
            description: "Decorators for VueJS (beta)",
            link: "https://github.com/partyka95/vue-decorators",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Decorators"
          }, {
            description: "Simple BEM class name generator for Vue.JS",
            link: "https://github.com/c01nd01r/vue-bem-cn",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue-BEM-CN"
          }, {
            description: "Standardized, designer-friendly script tag behavior for your Single Page App",
            link: "https://github.com/taoeffect/vue-script2",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Script2"
          }, {
            description: "Webpack loader for Vue.js components",
            link: "https://github.com/vuejs/vue-loader",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Loader"
          }, {
            description: "Browserify transform for single-file Vue components",
            link: "https://github.com/vuejs/vueify",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "vueify"
          }, {
            description: "A simple CLI wrapper around the vue-component-compiler",
            link: "https://github.com/paulpflug/vue-compiler",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Compiler"
          }, {
            description: "Adds support to Brunch for pre-compiling single file Vue components",
            link: "https://github.com/nblackburn/vue-brunch",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Brunch"
          }, {
            description: "Fast prototype and distribute modern web apps like a pro",
            link: "https://github.com/egoist/vbuild",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vbuild"
          }, {
            description: "Load .vue files directly from your html/js without node.js environment nor build step",
            link: "https://github.com/FranckFreiburger/http-vue-loader",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "HTTP Vue Loader"
          }, {
            description: "A page navigation library, record routes and cache pages, like native app navigation. 一个页面导航库，记录路由并缓存页面，像原生APP导航一样。",
            link: "https://github.com/zack24q/vue-navigation",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Navigation"
          }, {
            description: "A simple dependency injection library for Vue 2",
            link: "https://github.com/dealloc/vuec",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Container"
          }, {
            description: "A simple plugin to call methods on parent components",
            link: "https://github.com/rpkilby/vue-super",
            parent: "utilities",
            tags: ["First tag", "Second tag"],
            title: "Vue Super"
          }],
          'shortname': 'utilities'
        },
        objIntegrations: {
          'category': 'Integrations',
          'items': [
            {
              'description': 'Vue component to integrate Disqus comments in your application, with support for SPA',
              'link': 'https://github.com/ktquez/vue-disqus',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Disqus'
            },
            {
              'description': 'Vue.js and YouTube',
              'link': 'https://github.com/kaorun343/vue-youtube-embed',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Youtube Embed'
            },
            {
              'description': 'A Vue.js component that provides \'Add to Calendar\' functionality, works with Vue 2.X',
              'link': 'https://github.com/nicolasbeauvais/vue-add-to-calendar',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-add-to-calendar'
            },
            {
              'description': 'Vue first-class integration in Meteor',
              'link': 'https://github.com/Akryum/vue-meteor',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue + Meteor'
            },
            {
              'description': 'Apollo/GraphQL integration for VueJS',
              'link': 'https://github.com/Akryum/vue-apollo',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'vue-apollo'
            },
            {
              'description': 'A modern, type-safe, idiomatic Vue binding library',
              'link': 'https://github.com/HerringtonDarkholme/av-ts',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'AV TS'
            },
            {
              'description': 'Build .NET desktop applications using HTML, CSS and javascript',
              'link': 'https://github.com/NeutroniumCore/Neutronium',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Neutronium'
            },
            {
              'description': 'Vue bindings for Three.js',
              'link': 'https://github.com/fritx/vue-threejs',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Threejs'
            },
            {
              'description': 'Jest preprocessor.js for Vue.js components (supporting html, pug, and babel) and TypeScript',
              'link': 'https://github.com/locoslab/vue-typescript-jest',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Typescript Jest'
            },
            {
              'description': 'Utilities for testing Vue.js components using Jest',
              'link': 'https://github.com/locoslab/vue-jest-utils',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Jest Utils'
            },
            {
              'description': 'Vue Custom Element - Custom Elements for Vue.js',
              'link': 'https://github.com/karol-f/vue-custom-element',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Custom Element'
            },
            {
              'description': 'Socket.io implemantation for vuejs',
              'link': 'https://github.com/MetinSeylan/Vue-Socket.io',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Socket.io'
            },
            {
              'description': 'Vue.js plugin for Cordova',
              'link': 'https://github.com/kartsims/vue-cordova',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Cordova'
            },
            {
              'description': 'Simple websocket (socket.io) plugin for Vue.js',
              'link': 'https://github.com/icebob/vue-websocket',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Websocket'
            },
            {
              'description': 'AutobahnJS wrapper library fo Vue.js',
              'link': 'https://github.com/lajosbencz/vue-wamp',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Wamp'
            },
            {
              'description': 'Vue rendering engine for Express.js. Use .Vue files as templates using res.render()',
              'link': 'https://github.com/danmademe/express-vue',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Express Vue'
            },
            {
              'description': 'Google Universal Analytics support in Vue.js',
              'link': 'https://github.com/ScreamZ/vue-analytics',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue UA'
            },
            {
              'description': 'Vue plugin for Google Analytics',
              'link': 'https://github.com/MatteoGabriele/vue-analytics',
              'parent': 'integrations',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Analytics'
            }
          ],
          'shortname': 'integrations'
        },
        objDevTools: {
          'category': 'Dev Tools',
          'shortname': 'devtools',
          'items': [
            {
              description: "A small development server for building vue components",
              link: "https://github.com/paulpflug/vue-dev-server",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Dev Server"
            },  {
              description: "Chrome devtools extension for debugging Vue.js applications",
              link: "https://github.com/vuejs/vue-devtools",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue.js Devtools"
            },  {
              description: "Visualization and debugging tool built for Vue.js",
              link: "https://github.com/MiCottOn/DejaVue",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "DejaVue"
            },  {
              description: "Convert Markdown file to Vue Component",
              link: "https://github.com/QingWei-Li/vue-markdown-loader",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Markdown Loader"
            },  {
              description: "A minimalistic framework for demonstrating your Vue components",
              link: "https://github.com/vue-play/vue-play",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Play"
            },  {
              description: "React inspired style guide generator for Vue.js",
              link: "https://github.com/shershen08/vue-styleguide-generator",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Styleguide Generator"
            },  {
              description: "A Vue.js testing utility library",
              link: "https://github.com/eddyerburgh/avoriaz",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Avoriaz"
            },  {
              description: "A simple dependency injection library for Vue 2",
              link: "https://github.com/dealloc/vuec",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Container"
            },  {
              description: "Vuegister (an acronym for vue-register) is a require hook for loading of the Vue.js single-file components (or .vue files)",
              link: "https://github.com/iatsiuk/vuegister",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vuegister"
            },  {
              description: "Load vue components in node",
              link: "https://github.com/knpwrs/vue-node",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Node"
            },  {
              description: "Vue component file syntax for Atom",
              link: "https://github.com/hedefalk/atom-vue",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Language Vue@atom.io"
            },  {
              description: "Adds syntax highlighting to Vue Component files in Atom",
              link: "https://github.com/CYBAI/language-vue-component",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Language Vue Component@atom.io"
            },  {
              description: "Vue.js 1.0+ autocomplete for Atom",
              link: "https://github.com/ealves-pt/atom-vue-autocomplete",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Autocomplete@atom.io"
            },  {
              description: "Atom snippets for Vue component files",
              link: "https://github.com/ealves-pt/atom-vue-snippets",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Snippets@atom.io"
            },  {
              description: "Auto compile vue file on save",
              link: "https://github.com/paulpflug/vue-autocompile",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Autocompile@atom.io"
            },  {
              description: "Sublime Text syntax highlighting for single-file Vue components",
              link: "https://github.com/vuejs/vue-syntax-highlight",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Syntax Highlight"
            },  {
              description: "Syntax Highligth for Vue.js components",
              link: "https://github.com/posva/vim-vue",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vim Vue"
            },  {
              description: "Vue tooling for VSCode",
              link: "https://github.com/octref/vetur",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vetur"
            },  {
              description: "Contains HTML Intellisense and code snippets for the Vue.js JavaScript library",
              link: "https://github.com/egoist/vuepack",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Pack"
            },  {
              description: "Brackets extension for Vue.js",
              link: "https://github.com/pandao/brackets-vue",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Brackets Vue"
            },  {
              description: "Vue.js features for the Intellij Platform (WebStorm, RubyMine, Intellij, etc)",
              link: "https://github.com/postalservice14/vuejs-plugin",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue.js Plugin"
            },  {
              description: "Vue.js support for WebStorm, IntelliJ IDEA, PhpStorm, PyCharm & RubyMine – official Vue.js support by JetBrains",
              link: "https://github.com/JetBrains/intellij-plugins/tree/master/vuejs",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue.js support for WebStorm"
            },  {
              description: "Emacs major mode for vue.js",
              link: "https://github.com/CodeFalling/vue-mode",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Vue Mode"
            },  {
              description: "Syntax files (modified or original) for katepart (kate, kwrite, kdevelop)",
              link: "https://github.com/mtorromeo/kate-syntax-files",
              parent: "devtools",
              tags: ["First tag", "Second tag"],
              title: "Kate Syntax Files"
            }
          ]
        },
        objScaffold: {
          'category': 'Scaffold',
          'items': [
            {
              'description': 'Simple CLI for scaffolding Vue.js projects',
              'link': 'https://github.com/vuejs/vue-cli',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue CLI'
            },
            {
              'description': 'Boilerplate for Vue.js plugin',
              'link': 'https://github.com/kazupon/vue-plugin-boilerplate',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Plugin Boilerplate '
            },
            {
              'description': 'Bourgeon is an opinionated-featured VueJS 2.0 setup for Webpack',
              'link': 'https://github.com/rayfranco/bourgeon',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Bourgeon'
            },
            {
              'description': 'A modern starter which uses Vue 2, Vuex, Vue-router and Webpack 2 (and even Electron)',
              'link': 'https://github.com/egoist/vuepack',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Pack'
            },
            {
              'description': 'An opinionated Vue 2.0 SPA Starter',
              'link': 'https://github.com/weavingbird/vue-settler',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Settler'
            },
            {
              'description': 'Ultra Simple, Development, Testing and Production Build Cli',
              'link': 'https://github.com/brianvoe/vue-build',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Build'
            },
            {
              'description': 'Robust Vue 2 starter with Element-UI',
              'link': 'https://github.com/Metnew/vue-element-starter',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Element Starter '
            },
            {
              'description': 'A modern Vue.js multiple pages starter which uses Vue 2, Webpack2, and Element-UI',
              'link': 'https://github.com/Plortinus/vue-multiple-pages',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Multiple Pages'
            },
            {
              'description': 'A highly opinionated starter kit for building Single Page Applications with Laravel and Vue.js',
              'link': 'https://github.com/codecasts/spa-starter-kit',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'SPA Starter Kit'
            },
            {
              'description': 'Vue.js Server Side Rendering Boilerplate without Polluting Vuex',
              'link': 'https://github.com/fenivana/vue-ssr-boilerplate',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'SSR Boilerplate'
            },
            {
              'description': 'Single page apps with Laravel, Vue.js, and October CMS',
              'link': 'https://github.com/scottbedard/oc-vuetober-theme',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vuetober'
            },
            {
              'description': 'An Electron & Vue.js quick start boilerplate with vue-cli scaffolding, common Vue plugins, electron-packager/electron-builder, unit/e2e testing, vue-devtools, and webpack',
              'link': 'https://github.com/SimulatedGREG/electron-vue',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Electron Vue'
            },
            {
              'description': 'A modern starter which uses Vue 2, Vuex, Vue-router and Webpack 2 (and even Electron)',
              'link': 'https://github.com/egoist/vuepack',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Pack'
            },
            {
              'description': 'A CLI generator for Vue components, views and store modules',
              'link': 'https://github.com/hjeti/vue-generator',
              'parent': 'scaffold',
              'tags': [
                'First tag',
                'Second tag'
              ],
              'title': 'Vue Generator'
            }
          ],
          'shortname': 'scaffold'
        },

      }
    },
    computed: {
      hello: function (string) {
        var newString = string

        return newString
      },
      list: function () {
      return [
          this.objResources,
          this.objProjects,
          this.objComponents,
          this.objUILayouts,
          this.objFrameworks,
          this.objUIUtilities,
          this.objUtilities,
          this.objIntegrations,
          this.objDevTools,
          this.objScaffold,
        ]
    }
    },
    methods: {
      hello: function (string) {
        var newString = string.split('-')

        if (newString[1] == null) {
          newString[1] = ''
        }

        return '<strong>' + newString[0] + '</strong> (mail.yahoo.com) <br><small>' + newString[1] + '<small>'
      },
      updateList: function () {
        var currentPage = this.$route.params.page
        var vm = this
        vm.currentList = []

        setTimeout(function () {
          for (var i = 0; i < vm.list.length; i++) {
            // console.log("Hello: " + i);
            // console.log(vm.list);
            if (vm.list[i].shortname === currentPage) {
              for (var t = 0; t < vm.list[i].items.length; t++) {
                vm.currentList.push(vm.list[i].items[t])
              }
            }
          }
        }, 0)
      },
      getHost: function (url){
        if (url) {
          url = url.replace(/^((\w+:)?\/\/[^\/]+\/?).*$/, '$1')
          url = url.replace(/\/$/, '')
          url = url.replace(/.*?:\/\//g, '')
          url = url.replace('www', '')
          return url
        }
      },
      capitalize: function (string) {
        var capitalizedStr = string.split('')
        capitalizedStr[0] = capitalizedStr[0].toUpperCase()
        return capitalizedStr.join('')
      }
    },
    mounted: function () {
      this.updateList()
    },
    watch: {
      // Refresh data when route changes
      '$route': 'updateList'
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin-top: 0px;
    margin-bottom: 16px;
  }

  .item-box {
    color: #FFF;
    font-weight: 500;
    font-family: 'Open Sans';
    border-radius: 10px;
    background-color: rgba(255, 255, 255, .2);
    padding: 14px;
    margin-bottom: 6px;
  }

  .item-box:hover {
    background-color: rgba(255, 255, 255, .4);
  }

  item-box a:active {
    color: blue;
  }

  .item-description {
      font-size: 14px;
      margin-bottom: 4px;
  }

  a {
    color: #FFF;
    font-weight: 500;
  }

  .tags {
    /*padding-top: 2px;*/
    opacity: grey;
    margin-bottom: 10px !important;
  }

  .tags > div {
    font-family: 'Open Sans';
    /*background-color: #FFF;*/
    display: inline;
    font-weight: 700;
    color: #FFF;
    font-size: 10px;
    border-radius: 6px;
    border: .18em solid #FFF;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-right: 4px;

    /*margin-top: 40px;*/
  }

  small {
    color: #FFF;
    font-weight: 500;
    font-size: 12px;
  }

  strong {
    font-weight: 700;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

</style>
