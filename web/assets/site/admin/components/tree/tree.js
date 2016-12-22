define('site/admin/components/tree/tree.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _treeItemVue = require("site/admin/components/tree/tree-item.vue");
  
  var _treeItemVue2 = _interopRequireDefault(_treeItemVue);
  
  exports["default"] = {
      data: function data() {
          return {
              nodepath: []
          };
      },
      props: {
          docs: {
              type: Object,
              "default": function _default() {
                  return {};
              }
          },
          handle: {
              type: Object,
              "default": function _default() {
                  return {};
              }
          }
      },
      method: {},
      components: {
          treeitem: _treeItemVue2["default"]
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports["default"] && (exports["default"].template = template);
  })("<ul class=\"treelist\" id=\"treelist\">\n    <li id=\"1\" path=\"path,1,\"><b class=\"icon-setting\"></b>&nbsp;&nbsp;<em>首页</em><span><router-link to=\"/tree/edit?pid=1\">添加子节点</router-link></span></li>\n    <treeitem v-for=\"doc in docs.rows\" :items=\"doc\" :handle=\"handle\"></treeitem>\n</ul>");
  module.exports = exports["default"];
  //# sourceMappingURL=/static/site/admin/components/tree/tree.js.map
  

});
