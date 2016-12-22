define('site/admin/pages/user/user.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _componentsListListVue = require('site/admin/components/list/list.vue');
  
  var _componentsListListVue2 = _interopRequireDefault(_componentsListListVue);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              datalist: {
                  options: {},
                  more: [{
                      text: "添加",
                      link: "/user/edit"
                  }, {
                      text: "删除",
                      cls: "del"
                  }, {
                      text: "冻结",
                      cls: "dongjie"
                  }],
                  rows: [],
                  button: [{
                      text: "编辑",
                      link: "/user/edit"
                  }, {
                      text: "删除",
                      cls: "del"
                  }]
              },
              handle: {} };
      },
      //传递方法
      mounted: function mounted() {
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      this.$on('list-page', this.page);
                      this.page("", 1, 20);
                      this.handle = {
                          "del": this.del
                      };
  
                  case 3:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      },
      methods: {
          page: function page(kw, cp, mp) {
              var doc, data, i, l;
              return regeneratorRuntime.async(function page$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          if (cp == 1) {
                              this.datalist.rows = [];
                          }
                          context$1$0.next = 3;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/user/page", "post", { //获取数据
                              cp: cp,
                              mp: mp,
                              kw: kw
                          }));
  
                      case 3:
                          doc = context$1$0.sent;
                          data = doc.msg;
  
                          for (i = 0, l = data.length; i < l; i++) {
                              this.datalist.rows.push({
                                  id: data[i].id,
                                  name: data[i].username
                              });
                          }
  
                      case 6:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          del: function del(id) {
              var ids, self, _loop, i, l;
  
              return regeneratorRuntime.async(function del$(context$1$0) {
                  var _this = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/user/remove", "post", {
                              id: id
                          }));
  
                      case 2:
                          ids = id.split(',');
                          self = this;
  
                          _loop = function (i, l) {
                              _this.datalist.rows.find(function (value, index) {
                                  if (value.id == ids[i]) {
                                      self.datalist.rows.splice(index, 1);
                                      return true;
                                  }
                              });
                          };
  
                          for (i = 0, l = ids.length; i < l; i++) {
                              _loop(i, l);
                          }
  
                      case 6:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      components: {
          pzlist: _componentsListListVue2['default']
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<pzlist :docs=\"datalist\" :handle=\"handle\"></pzlist>");
  module.exports = exports['default'];
  //# sourceMappingURL=/static/site/admin/pages/user/user.js.map
  

});
