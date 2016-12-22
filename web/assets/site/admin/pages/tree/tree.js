define('site/admin/pages/tree/tree.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _componentsTreeTreeVue = require('site/admin/components/tree/tree.vue');
  
  var _componentsTreeTreeVue2 = _interopRequireDefault(_componentsTreeTreeVue);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              datalist: {
                  options: {},
                  more: [{
                      text: "添加1",
                      link: "/news/create"
                  }, {
                      text: "审核",
                      cls: "pass"
                  }, {
                      text: "删除",
                      cls: "del"
                  }],
                  rows: {},
                  button: [{
                      text: "编辑",
                      link: "/news/edit"
                  }, {
                      text: "添加子节点",
                      cls: "del"
                  }, {
                      text: "评论",
                      link: "/news/comment"
                  }]
              },
              handle: {} };
      },
      //传递方法
      mounted: function mounted() {
          var doc, data, level1, i, l;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      context$1$0.next = 2;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/page", "post", {
                          pid: 1
                      }));
  
                  case 2:
                      doc = context$1$0.sent;
                      data = doc.msg;
                      level1 = {};
  
                      for (i = 0, l = data.length; i < l; i++) {
                          level1[data[i].id] = {
                              id: data[i].id,
                              pid: data[i].pid,
                              name: data[i].name,
                              path: data[i].nodepath.split(','),
                              fold: false };
                      }
                      //是否展开
                      this.datalist.rows = level1;
                      this.handle = {
                          fold: this.fold
                      };
  
                  case 8:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      },
      methods: {
          fold: function fold(id, nodepath) {
              var doc, data, level, i, l, path, key;
              return regeneratorRuntime.async(function fold$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/page", "post", {
                              pid: id
                          }));
  
                      case 2:
                          doc = context$1$0.sent;
                          data = doc.msg;
  
                          if (!(data.length == 0)) {
                              context$1$0.next = 6;
                              break;
                          }
  
                          return context$1$0.abrupt('return');
  
                      case 6:
                          level = {};
  
                          for (i = 0, l = data.length; i < l; i++) {
                              level[data[i].id] = {
                                  id: data[i].id,
                                  name: data[i].name,
                                  pid: data[i].pid,
                                  path: data[i].nodepath.split(','),
                                  fold: false };
                          }
                          path = (",0" + nodepath + "0,").replace(/,0,/g, "").split(",");
                          key = this.datalist.rows[path[1]];
  
                          console.log(path);
                          for (i = 2, l = path.length; i < l; i++) {
                              key = key.children[path[i]];
                          }
                          console.log(JSON.stringify(key));
                          this.$set(key, "children", level);
  
                      case 14:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      components: {
          pztree: _componentsTreeTreeVue2['default']
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div id=\"main\">\n    <pztree :docs=\"datalist\" :handle=\"handle\"></pztree>\n</div>");
  module.exports = exports['default'];
  
  //获取数据
  //是否展开
  //# sourceMappingURL=/static/site/admin/pages/tree/tree.js.map
  

});
