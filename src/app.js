const template = `
<div id="app">
  <div class="contents">
    <router-link to="/" tag="h1">
      Jimdo Vue
    </router-link>

    <p class="links">
      <router-link to="/page1">いいね</router-link>
      <router-link to="/page2">いい話</router-link>
      <router-link to="/page3">ページ3</router-link>
    </p>

    <router-view></router-view>
  </div>
</div>
`;

module.exports = template;
