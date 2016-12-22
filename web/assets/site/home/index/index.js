define('home/index/index', function(require, exports, module) {

  "use strict";
  
  var index = (function () {
    var self = {};
    require("node_modules/vue/dist/vue");
    var $ = require("$");
    '';
  
    self.init = function () {
      alert(1);
      console.log($("body").html());
    };
  
    return self;
  })();
  
  module.exports = index;

});
