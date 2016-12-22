define('site/admin/components/tree/tree-item.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports["default"] = {
      name: "treeitem",
      props: {
          items: {
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
      methods: {
          click: function click(event) {
              var target = event.target;
              if (target.tagName != "I") {
                  return;
              }
              var parent = target.parentNode;
              var id = parent.getAttribute("id");
              var path = parent.getAttribute("path");
              target.className = "icon-sub";
              this.handle["fold"](id, path);
          }
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports["default"] && (exports["default"].template = template);
  })("<div>\n    <li @click=\"click\" :id=\"items.id\" :path=\"items.path\">\n        <b class=\"indent\" v-for=\"a in (items.path.length-3)\"></b>\n        <i class=\"icon-add\"></i>\n        <em>{{items.name}}</em>\n        <span>\n          <router-link :to=\"'/tree/edit/'+items.id\">编辑</router-link>\n          <router-link :to=\"'/tree/add/'+items.id\">添加子节点</router-link>\n          <i class=\"ishide\">隐藏</i>\n      </span>\n    </li>\n    <treeitem v-for=\"doc in items.children\" :items=\"doc\" :handle=\"handle\"></treeitem>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/static/site/admin/components/tree/tree-item.js.map
  

});
