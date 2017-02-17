window.addEventListener("load", ()=>{
  if(! ("isLoadedScript" in window) ){
    window.isLoadedScript = true;
    const template = `
    <div id="app">
      <h1>Potato4d's Repository</h1>
      <ul v-if="repos.length">
         <li v-for="repo in repos">
          <a :href="repo.html_url" :title="repo.full_name">
            {{ repo.html_url }}
          </a>
         </li>
      </ul>
    </div>
    `;
    const $ = e=>document.querySelector(e);
    const $$ = e=>document.querySelectorAll(e);
    const del = e=>{
      if(e) e.parentNode.removeChild(e);
    };

    if(!$("#cc-eh")){
      del($("#loginbox"));
      del($("#loginbox-darklayer"));
      $("#cc-inner").setAttribute("class", "");
      setTimeout(()=>{
        $("body").childNodes[1].id = "app";
        $("body").setAttribute("id", "");
        $("body").setAttribute("class", "");
        $("body").setAttribute("style", "");
        for(let link of $$("link[rel='stylesheet']")){link.parentNode.removeChild(link);}

        new Vue({
          el: "#app",
          template,
          data: ()=>{
            return {
              repos: []
            }
          },
          created(){
            fetch("https://api.github.com/users/potato4d/repos")
            .then((response)=>{
              if(response.ok){
                return response.json();
              }else{
                return Promise.reject("Error");
              }
            })
            .then((repos)=>{
              this.repos = repos;
            })
            .catch((err)=>{
              alert("Error");
              console.log(err);
            });
          }
        });
      }, 0);
    }
  }
});
