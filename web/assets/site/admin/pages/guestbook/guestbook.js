define('site/admin/pages/guestbook/guestbook.vue', function(require, exports, module) {

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
                      link: "/block/edit"
                  }, {
                      text: "删除",
                      cls: "del"
                  }, {
                      text: "审核",
                      cls: "pass"
                  }],
                  rows: [],
                  button: [{
                      text: "编辑",
                      link: "/block/edit"
                  }, {
                      text: "删除",
                      cls: "del"
                  }]
              }
          };
      },
      mounted: function mounted() {
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      this.$on('list-page', this.page);
                      this.page("", 1, 20);
                      this.handle = {
                          "del": this.del,
                          "pass": this.pass
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
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/guestbook/page", "post", { //获取数据
                              cp: cp,
                              mp: mp,
                              kw: ""
                          }));
  
                      case 3:
                          doc = context$1$0.sent;
                          data = doc.msg;
  
                          for (i = 0, l = data.length; i < l; i++) {
                              this.datalist.rows.push({
                                  id: data[i].gbid,
                                  des: data[i].des
                              });
                          }
  
                      case 6:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          pass: function pass(id) {
              alert(1);
          }
      },
      components: {
          pzlist: _componentsListListVue2['default']
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<pzlist :docs=\"datalist\"></pzlist>");
  module.exports = exports['default'];
  //# sourceMappingURL=/static/site/admin/pages/guestbook/guestbook.js.map
  

});
