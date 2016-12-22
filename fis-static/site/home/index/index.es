let index = (()=>{
  let self = {};
 require("vue");
 let $ = require("$");
 require("/css/variables.css");


  self.init = ()=>{
      alert(1);
      console.log($("body").html());
  }

  return self;
}());

module.exports = index;
