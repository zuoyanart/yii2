define('site/admin/App.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports["default"] = {
      data: function data() {
          return {
              show: {
                  news: false,
                  hudong: false,
                  system: false
              },
              username: ""
          };
      },
      methods: {
          slider: function slider(event) {
              var o = event.target;
              var style = o.getAttribute("class");
              if (style.indexOf("submenu") > -1) {
                  //带子菜单的父对象
                  var data = o.getAttribute("data");
                  this.$data.show[data] = !this.$data.show[data];
              } else {}
          },
          loginout: function loginout() {
              return regeneratorRuntime.async(function loginout$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(_pizzatools2["default"].httpAgent("/admin/login/loginout", "post", {}));
  
                      case 2:
                          document.location.href = "/admin/login";
  
                      case 3:
                      case "end":
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      mounted: function mounted() {
          this.username = _pizzatools2["default"].getCookie("username");
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports["default"] && (exports["default"].template = template);
  })("<div id=\"app\">\n    <div id=\"header\">\n        <h1><i class=\"icon-pizza\"></i>Pizza Admin</h1>\n    </div>\n    <div id=\"user-nav\">\n        <ul>\n            <li><i class=\"icon-person\"></i><span id=\"userinfo\">{{username}}</span></li>\n            <li><a href=\"javascript:void(0);\" id=\"loginout\" @click=\"loginout\"><i class=\"icon-loginout\"></i>退出</a></li>\n        </ul>\n    </div>\n    <!-- <div id=\"search\">\n        <input type=\"search\" id=\"searchkw\">\n    </div> -->\n    <div id=\"sidebar\" @click=\"slider\">\n        <ul>\n            <li>\n                <router-link to=\"/\"><i class=\"icon-home\"></i>主页</router-link>\n            </li>\n            <li>\n                <a class=\"submenu\" data=\"news\"><i class=\"icon-article\"></i>信息管理</a>\n                <ul v-show=\"show.news\">\n                    <li>\n                        <router-link to=\"/tree\" class=\"tree\">节点管理</router-link>\n                    </li>\n                    <li>\n                        <router-link to=\"/news\" class=\"news\">文章管理</router-link>\n                    </li>\n                    <li>\n                        <router-link to=\"/block\" class=\"block\">模块管理</router-link>\n                        \n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a class=\"submenu\" data=\"hudong\"><i class=\"icon-setting\"></i>互动管理</a>\n                <ul v-show=\"show.hudong\">\n                    <li>\n                        <router-link to=\"/guestbook\">留言板管理</router-link>\n                        \n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a class=\"submenu\" data=\"system\"><i class=\"icon-setting\"></i>系统管理</a>\n                <ul v-show=\"show.system\">\n                    <li>\n                        <router-link to=\"/user\">管理员管理</router-link>\n                        \n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n    <router-view></router-view>\n    <div class=\"row-fluid\"></div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/static/site/admin/App.js.map
  

});
