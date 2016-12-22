define('site/admin/pages/news/news.vue', function(require, exports, module) {

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
                      link: "/news/create"
                  }, {
                      text: "审核",
                      cls: "pass"
                  }, {
                      text: "删除",
                      cls: "del"
                  }],
                  rows: [],
                  button: [{
                      text: "编辑",
                      link: "/news/edit"
                  }, {
                      text: "删除",
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
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      this.$on('list-page', this.page);
                      //获取数据
                      context$1$0.next = 3;
                      return regeneratorRuntime.awrap(this.page("", 1, 1, 20));
  
                  case 3:
                      //设置方法
                      this.handle = {
                          "pass": this.pass,
                          "del": this.del
                      };
  
                  case 4:
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
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/page", "post", {
                              cp: cp,
                              mp: mp,
                              kw: kw,
                              nodeid: 1
                          }));
  
                      case 3:
                          doc = context$1$0.sent;
                          data = doc.msg;
  
                          for (i = 0, l = data.length; i < l; i++) {
                              this.datalist.rows.push({
                                  id: data[i].id,
                                  nodename: "[" + data[i].nodename + "]",
                                  title: data[i].title,
                                  link: '/content/' + data[i].id + '?preview=true',
                                  button: [{
                                      text: data[i].pass == 0 ? "审核" : "取消审核",
                                      cls: "pass"
                                  }]
                              });
                          }
  
                      case 6:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          pass: function pass(id, node) {
              var passState, res, ids, self, _loop, i, l;
  
              return regeneratorRuntime.async(function pass$(context$1$0) {
                  var _this = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          passState = node == "取消审核" ? "false" : "true";
                          context$1$0.next = 3;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/pass", "post", { //审核
                              id: id,
                              ispass: passState
                          }));
  
                      case 3:
                          res = context$1$0.sent;
                          ids = id.split(',');
                          self = this;
  
                          _loop = function (i, l) {
                              _this.datalist.rows.find(function (value, index) {
                                  if (value.id == ids[i]) {
                                      self.datalist.rows[index].button[0].text = node == "取消审核" ? "审核" : "取消审核";
                                      return true;
                                  }
                              });
                          };
  
                          for (i = 0, l = ids.length; i < l; i++) {
                              _loop(i, l);
                          }
  
                      case 8:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          del: function del(id) {
              var res, ids, self, _loop2, i, l;
  
              return regeneratorRuntime.async(function del$(context$1$0) {
                  var _this2 = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/remove", "post", {
                              id: id
                          }));
  
                      case 2:
                          res = context$1$0.sent;
                          ids = id.split(',');
                          self = this;
  
                          _loop2 = function (i, l) {
                              _this2.datalist.rows.find(function (value, index) {
                                  if (value.id == ids[i]) {
                                      self.datalist.rows.splice(index, 1);
                                      return true;
                                  }
                              });
                          };
  
                          for (i = 0, l = ids.length; i < l; i++) {
                              _loop2(i, l);
                          }
  
                      case 7:
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
  //删除
  //# sourceMappingURL=/static/site/admin/pages/news/news.js.map
  

});
