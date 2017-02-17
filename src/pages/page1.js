const template = `
  <div class="page page1">
    <h2>いいね</h2>
    <p v-if="isGetDone">
      総いいね： {{count}}<br>
      <button v-on:click="add">+1</button>
    </p>
    <p v-else>
      読み込み中……
    </p>
  </div>
`
module.exports = {
  template,
  data: ()=>{
    return {
      count: 0,
      isGetDone: false
    }
  },
  beforeRouteEnter(_, __, next){
    next(vm=>{
      vm.initialize();
    });
  },
  methods: {
    initialize(){
      const firebase = require("firebase");
      firebase.database().ref('counter/').on("child_added", this.update);
      firebase.database().ref('counter/').on("child_changed", this.update);
    },
    update(data){
      this.count = data.val();
      this.isGetDone = true;
    },
    add(){
      const firebase = require("firebase");
      firebase.database().ref("/counter/count").set(this.count+1);
    }
  }
}
