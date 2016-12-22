define('site/admin/pages/user/edit.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  var _pzvueSelect = require('node_modules/pzvue-select/dist/pz-select');
  
  var _pzvueSelect2 = _interopRequireDefault(_pzvueSelect);
  
  var _pzvueInput = require('node_modules/pzvue-input/dist/pz-input');
  
  var _pzvueInput2 = _interopRequireDefault(_pzvueInput);
  
  var _pzvueForm = require('node_modules/pzvue-form/dist/pz-form');
  
  var _pzvueForm2 = _interopRequireDefault(_pzvueForm);
  
  var _pzvueFormitem = require('node_modules/pzvue-formitem/dist/pz-formitem');
  
  var _pzvueFormitem2 = _interopRequireDefault(_pzvueFormitem);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              form: {
                  username: '',
                  nickname: '',
                  password: ''
              },
              rules: {
                  username: {
                      min: 1,
                      max: 10,
                      message: "请填写1-10位的用户名"
                  },
                  nickname: {
                      min: 1,
                      max: 10,
                      message: "请填写1-10位的昵称"
                  },
                  password: {
                      required: false,
                      min: 6,
                      max: 20,
                      message: "请填写6-20位的密码"
                  }
              }
          };
      },
      components: {
          pzbutton: _pzvueButton2['default'],
          pzinput: _pzvueInput2['default'],
          pzselect: _pzvueSelect2['default'],
          "pz-form": _pzvueForm2['default'],
          "pz-formitem": _pzvueFormitem2['default']
      },
      methods: {
          submitHandle: function submitHandle() {
              var ischeck, id, op;
              return regeneratorRuntime.async(function submitHandle$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(this.$refs.form.validate());
  
                      case 2:
                          ischeck = context$1$0.sent;
  
                          if (!ischeck) {
                              context$1$0.next = 12;
                              break;
                          }
  
                          id = this.$route.params.id;
                          op = id ? "update" : "create";
  
                          this.form.id = id;
                          context$1$0.next = 9;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/user/" + op, "post", this.form));
  
                      case 9:
                          history.back();
                          context$1$0.next = 14;
                          break;
  
                      case 12:
                          console.log("数据验证失败");
                          id = this.$layer.alert("this is demo", {
                              title: "警告"
                          });
  
                      case 14:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      mounted: function mounted() {
          var id, article;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      id = this.$route.params.id;
  
                      if (!id) {
                          context$1$0.next = 6;
                          break;
                      }
  
                      context$1$0.next = 4;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/user/get", "post", {
                          id: id
                      }));
  
                  case 4:
                      article = context$1$0.sent;
  
                      this.form = article.msg;
  
                  case 6:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div id=\"main\">\n    <div class=\"menu\">\n        <a href=\"javascript:history.back();\">返回</a>\n    </div>\n    <pz-form ref=\"form\">\n        <pz-formitem label=\"用户名\" :validate=\"rules.username\">\n            <pzinput v-model=\"form.username\" placeholder=\"\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"昵称\" :validate=\"rules.nickname\">\n            <pzinput v-model=\"form.nickname\" placeholder=\"\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"密码\" :validate=\"rules.password\">\n            <pzinput v-model=\"form.password\" placeholder=\"\"></pzinput>\n        </pz-formitem>\n        <pz-formitem>\n            <pzbutton @click.native=\"submitHandle\">提交</pzbutton>\n        </pz-formitem>\n    </pz-form>\n</div>");
  module.exports = exports['default'];
  //通过验证
  
  //获取block
  //# sourceMappingURL=/static/site/admin/pages/user/edit.js.map
  

});
