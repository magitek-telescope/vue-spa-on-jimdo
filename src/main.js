(function(){
  const $ = e=>document.querySelector(e);
  const $$ = e=>document.querySelectorAll(e);
  const del = e=>{if(e) e.parentNode.removeChild(e);};
  const env = "jimdo";

  const init = function(){
    const Vue = require("../node_modules/vue/dist/vue.min.js");
    const VueRouter = require("../node_modules/vue-router/dist/vue-router.min.js");
    Vue.use(VueRouter);
    const app = require("./app");
    const routes = [
      {path: ""      , component: require("./pages/default")},
      {path: "/page1", component: require("./pages/page1")},
      {path: "/page2", component: require("./pages/page2")},
      {path: "/page3", component: require("./pages/page3")}
    ];
    new Vue({
      router: new VueRouter({routes}),
      template: require("./app"),
      created(){
        const s = document.createElement("style");
        s.innerText = require("./style");
        $("body").appendChild(s);
        $("body").style.margin = "0";
        $("html").style.height = "100%";
        $("body").style.height = "100%";
      }
    }).$mount("#app");
  }

  if(env == "development"){
    init();
  }else{
    window.addEventListener("load", ()=>{
      if(! ("isLoadedScript" in window) ){
        window.isLoadedScript = true;
        if(!$("#cc-eh")){
          del($("#loginbox"));
          del($("#loginbox-darklayer"));
          $("#cc-inner").setAttribute("class", "");
          $("body").childNodes[1].id = "app";
          $("body").setAttribute("id", "");
          $("body").setAttribute("class", "");
          $("body").setAttribute("style", "");
          for(let link of $$("link[rel='stylesheet']")){link.parentNode.removeChild(link);}
          init();
        }
      }
    });
  }
}());
