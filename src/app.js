const template = `
<div id="app">
  <div class="contents">
    <h1>Jimdo Vue</h1>

    <p class="links">
      <router-link to="/page1">ページ1</router-link>
      <router-link to="/page2">ページ2</router-link>
      <router-link to="/page3">ページ3</router-link>
    </p>

    <router-view></router-view>
  </div>
</div>
`;

module.exports = template;
